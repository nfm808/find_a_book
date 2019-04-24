import React, { Component } from 'react';
import './filterSection.css';
import Filter from '../filter/filter';
import FilterBookType from '../filterBookType/filterBookType';

export class filterSection extends Component {
  render() {
    return (
      <section className="App__filterSection">
        <FilterBookType 
          handleBookFormatFilter={this.props.handleBookFormatFilter}
          books={this.props.books} 
          title="Book" 
          category="type"
          bookFormat={this.props.bookFormat}
        />
        <Filter 
          handleSaleability={this.props.handleSaleability} 
          title="Sale Options" 
          category="type"
          saleabilityOptions={this.props.saleabilityOptions}
        />
      </section>
    )
  }
}

export default filterSection
