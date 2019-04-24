import React from 'react';
import './searchForm.css';

export class searchForm extends React.Component {

  onSubmitForm = (e) => {
    e.preventDefault();
    this.props.handleSubmit(e.target.query.value)
  }

  render() {
    return (
      <form onSubmit={this.onSubmitForm} className="App__searchForm">
        <label htmlFor="search">Search:</label>
        <input name="query" type="text" placeholder="Title"></input>
        <button  type='submit'>Search</button>
      </form>
    )
  }
}

export default searchForm
