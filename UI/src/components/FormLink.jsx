import React from 'react';
import { Link } from 'react-router-dom';
import { connect } from 'react-redux';
import { resetAuth } from '../actions/auth.actions';

class FormLink extends React.Component {
  constructor(props) {
    super(props);

    this.handleClick = this.handleClick.bind(this);
  }
  
  handleClick(e) {
    this.props.dispatch(resetAuth());
  }

  render() {
    return (
          <Link
            className="reg-form__link m-pri-color"
            to={this.props.page}
            onClick={this.handleClick}
          >
          {this.props.title}
          </Link>
    );
  }
}

export default connect()(FormLink);
