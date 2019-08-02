import React from 'react';
import { Link } from 'react-router-dom';
import { connect } from 'react-redux';
import { resetAuth } from '../actions/auth.actions';

class FormLink extends React.Component {
  constructor(props) {
    super(props);

    this.handleClick = this.handleClick.bind(this);
  }

  handleClick() {
    const { dispatch } = this.props;
    dispatch(resetAuth());
  }

  render() {
    const { page, handleClick, title } = this.props;
    return (
      <Link
        className="reg-form__link m-pri-color"
        to={page}
        onClick={handleClick}
      >
        {title}
      </Link>
    );
  }
}

export default connect()(FormLink);
