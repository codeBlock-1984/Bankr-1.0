import React, { Fragment } from 'react'
import { render } from 'react-dom'

import HomePage from './components/HomePage'
import './index.css'


const App = () =>
{
  return (
    <Fragment>
      <h1>Hello World Ezekiel</h1>
      <HomePage name="Shola" />
    </Fragment>
  )
}

export default App

render(<App />, document.getElementById('app'))
