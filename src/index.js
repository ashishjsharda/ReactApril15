import React from 'react';
import ReactDOM from 'react-dom';

function Welcome()
{
  return <h1> Welcome to React </h1>
}
ReactDOM.render(
  <React.StrictMode>
    <Welcome />
  </React.StrictMode>,
  document.getElementById('root')
);

