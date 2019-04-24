import React from 'react'

export default function filter(props) {
  const category  = props.category;
  const title = props.title;

  // mapping through the different sale options defined in state in App.js
  const options = props.bookFormat.length -1 === 0 ?
        null
        : props.bookFormat
        .map(
          (option, i) => option === true
                        ? <option value={true} key={i}>E-Book</option> 
                        : <option value={false} key={i}>Print</option>
        )

  return (
    <form>
      <label htmlFor={category}>{title} Type: </label>
      <select 
        id={category} 
        name={category}
        onChange={e => props.handleBookFormatFilter(e.target.value)}
        >
        <option value="null">All</option>
        {options}
      </select>
    </form>
  )
}