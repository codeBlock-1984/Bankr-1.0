import React from 'react';

const SingleAccountBox = (props) => {
  const {
    accountType,
    accountNumber,
    accountBalance,
  } = props;

  return (
    <div className="account-box big-box">
      <span className="account-detail__title">Account type</span>
      <p className="account-detail account-type">
        {accountType}
      </p>
      <span className="account-detail__title">Account number</span>
      <p className="account-detail account-number">
        A/C &nbsp;&nbsp;
        {accountNumber}
      </p>
      <span className="account-detail account-card">
        <img src="UI/src/imgs/verve-logo.png" className="card-logo" alt="verve logo" />
        &nbsp;&nbsp;&nbsp;&nbsp;
        ** 4355 8603
      </span>
      <p className="account-detail account-balance account-red">
        {accountBalance}
        &nbsp;ngn
      </p>
      <p className="account-detail account-balance-desc">
        Current balance
      </p>
    </div>
  );
};

export default SingleAccountBox;
