import React from 'react'
import './listItem.css'

export default function listItem(props) {
  console.log(props);
  // setting up each element to populate the list
  const title = props.book.volumeInfo.title;
  const description = props.book.volumeInfo.description;
  
  // Converting the array to a string and then adding
  // a space after each author's name
  const author = !props.book.volumeInfo.authors ? null 
                : props.book.volumeInfo.authors.toString().replace(/,/g, ", ");
  // checking if an image exists
  const img = !props.book.volumeInfo.imageLinks ? null 
            : <img className="App__thumbnail" src={props.book.volumeInfo.imageLinks.smallThumbnail} alt={`${title} book image.`} ></img>;

  // rendering conditionally based on if the book is for sale
  const price = !props.book.saleInfo.saleability ? ''
                :  props.book.saleInfo.saleability === "NOT_FOR_SALE" ? "Not available for sale."
                :  props.book.saleInfo.saleability === "FREE" ? 'Free'
                : !props.book.saleInfo.retailPrice.amount ? ''
                : `$${props.book.saleInfo.retailPrice.amount} ${props.book.saleInfo.retailPrice.currencyCode}`;

  // checking if search info exists
  const textSnippet = !props.book.searchInfo? null 
                    : props.book.searchInfo.textSnippet;
  return (
    <section className="App__listItem">
      {img}
      <div className="App__bookInfo">
        <h2 className="App__bookTitle">{title}</h2>
        <p>Author: {author}</p>
        <p>{price}</p>
        <p>{textSnippet}</p>
      </div>
    </section>
  )
}
