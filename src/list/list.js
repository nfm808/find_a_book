import React, { Component } from 'react'
import './list.css'
import ListItem from '../listItem/listItem'

class list extends Component {
  
  
  render() {
    const list_item = this.props.books
      .map((index, id) => (
      <ListItem 
        key={id}
        book={index}
      />
    ))

    return (
      <section className='App__list'>
        {list_item}
      </section>
    )
  }
}

export default list
