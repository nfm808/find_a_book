import React, { Component } from 'react';
import './App.css';
import Header from './header/header';
import SearchForm from './searchForm/searchForm';
import FilterSection from './filterSection/filterSection';
import List from './list/list';

class App extends Component {
  state = {
    items: [],
    bookFormat: [],
    saleabilityFilter: 'ALL',
    saleabilityOptions: [],
    isEbook: 'null'

  }

  createSaleType(data) {
    let bookTypes = data.map(type => (
      type.saleInfo.saleability
    ))
    // this creates a new array that only has 
    // unique values from a larger array
    let unique = [...new Set(bookTypes)];
    return unique;
  }

  // creates an array of true or false for eBook value
  createBookFormat(data) {
    let formats = data.map(type => (
      type.saleInfo.isEbook
    ))

    let unique = [...new Set(formats)]
    return unique
  }

  handleBookFormatFilter = (e) => {
    this.setState({
      isEbook: e
    })
  }

  // sets the state of the sale type of the book
  handleSaleabilityFilter = (e) => {
    this.setState({
      saleabilityFilter: e
    })
  }

  handleSearchSubmit = (e) => {
    const query = e.trim().split(' ').join('');
    const url = `https://www.googleapis.com/books/v1/volumes?q=${query}`
    const options = {
      "content": "application/json",
    }
    fetch(url, options)
      .then(response => {
        if(!response.ok){
          throw new Error('Something went wrong')
        }
        return response;
      })
      .then(response => response.json())
      .then(data => {
        this.setState({
          items: data.items,
          saleabilityOptions: this.createSaleType(data.items),
          bookFormat: this.createBookFormat(data.items)
        })
        console.log(this.state.items)
      })
      .catch(err => {
        console.log(err.message);
      })    
  }

  render() {
    const length = this.state.items.length;
    const saleFilter = this.state.saleabilityFilter;
    const isEbook = this.state.isEbook;
    const list = length > 0 && saleFilter !== 'ALL' && isEbook === 'false'?
                  <List
                    books={this.state.items.filter(book => book.saleInfo.saleability === saleFilter && book.saleInfo.isEbook === false)}
                    printType={this.state.printType}
                    bookType={this.state.bookType}
                   />
                : length > 0 && saleFilter !== 'ALL' && isEbook === 'true' ? 
                  <List
                    books={this.state.items.filter(book => book.saleInfo.saleability === saleFilter && book.saleInfo.isEbook === true)}
                    printType={this.state.printType}
                    bookType={this.state.bookType}
                  />
                : length > 0 && saleFilter !== 'ALL' && isEbook === 'null' ? 
                    <List
                      books={this.state.items.filter(book => book.saleInfo.saleability === saleFilter)}
                      printType={this.state.printType}
                      bookType={this.state.bookType}
                    />
                : length > 0 && saleFilter === 'ALL' && isEbook === 'true' ? 
                    <List
                      books={this.state.items.filter(book => book.saleInfo.isEbook === true)}
                      printType={this.state.printType}
                      bookType={this.state.bookType}
                    />
                : length > 0 && saleFilter === 'ALL' && isEbook === 'false' ? 
                    <List
                      books={this.state.items.filter(book => book.saleInfo.isEbook === false)}
                      printType={this.state.printType}
                      bookType={this.state.bookType}
                    />

                : length > 0 && saleFilter === 'ALL' && isEbook === 'null' ? 
                  <List 
                    books={this.state.items}
                    printType={this.state.printType}
                    bookType={this.state.bookType}
                  />
                : null;

    return (
      <main className="App">
        <Header appTitle="Google Book Search"/>
        <SearchForm handleSubmit={this.handleSearchSubmit} />
        <FilterSection 
          handleBookFormatFilter={this.handleBookFormatFilter}
          handleSaleability={this.handleSaleabilityFilter} 
          books={this.state.items} 
          saleabilityOptions={this.state.saleabilityOptions}
          bookFormat={this.state.bookFormat}
        />
        {list}
      </main>
    );
  }
}

export default App;
