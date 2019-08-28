import React from 'react';
import { Link } from 'react-router-dom';

const AuthFormHeader = (props) => {
  const { res } = props;
  return (
    <div className="generic-wrapper">
      <div className="form-wrapper__heading m-pri-bg">
        <h1 className="form-wrapper__title h-30 l-text-center">
          <Link className="home-link" to="/">Bankr</Link>
        </h1>
      </div>
      <p className="alert-message m-error l-text-center" id="message-box">
        {res}
        &nbsp;
      </p>
    </div>
  );
};

export default AuthFormHeader;
