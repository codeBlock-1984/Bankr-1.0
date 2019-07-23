import React, { Fragment } from 'react';
import { render } from 'react-dom';

import HomePage from './components/HomePage';
import './index.css';


const App = () =>
{
  return (
    <Fragment>
      <HomePage name="Shola" />
    </Fragment>
  )
}

export default App

render(<App />, document.getElementById('app'))
