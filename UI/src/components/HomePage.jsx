import React from 'react'
import PropTypes from 'prop-types'


import './HomePage.css'

class HomePage extends React.Component {

  render(){
    return <h1>Hello {this.props.name}</h1>
  }
}


HomePage.defaultProps = {
  name: "Benny"
}

HomePage.propTypes = {
  name: PropTypes.string.isRequired,
}


export default HomePage
