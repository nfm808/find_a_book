import React from 'react';
import './header.css';

function header(props) {
  return (
    <header className="App__header">
      <h1>{props.appTitle}</h1>
    </header>
  )
}

header.defaultProps = {
  appTitle: 'Default App Title'
}

export default header

