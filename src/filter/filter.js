import React from 'react'

export default function filter(props) {
  const category  = props.category;
  const title = props.title;

  // mapping through the different sale options defined in state in App.js
  const options = props.saleabilityOptions.length -1 === 0 ?
        null
        : props.saleabilityOptions
        .map(
          (option, i) => <option value={option} key={i}>{normalizeOption(option)}</option> 
        )

  // adjusting the options to give spaces instead of underscores
  function normalizeOption(str) {
    str = str.replace(/_/g, " ");
    return str;
  }


  return (
    <form>
      <label htmlFor={category}>{title}: </label>
      <select 
        id={category} 
        name={category}
        onChange={e => props.handleSaleability(e.target.value)}  
      >
        <option value='ALL'>All</option>
        {options}
      </select>
    </form>
  )
}

