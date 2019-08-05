import React from 'react';

const AccountBigBox = (props) => {
  const {
    accountName,
    accountEmail,
    accountType,
    accountNumber,
    accountBalance,
    accountStatus,
    accountDate,
  } = props;

  return (
    <div className="account-box big-box">
      <span className="account-detail__title">Account name</span>
      <p className="account-detail account-name">{accountName}</p>
      <span className="account-detail__title">Email</span>
      <p className="account-detail account-email">{accountEmail}</p>
      <span className="account-detail__title">Account type</span>
      <p className="account-detail account-type">{accountType}</p>
      <span className="account-detail__title">Account number</span>
      <p className="account-detail account-number">
        A/C &nbsp;&nbsp;
        {accountNumber}
      </p>
      <span className="account-detail__title">Status</span>
      <p className="account-detail account-status">{accountStatus}</p>
      <span className="account-detail__title">Date created</span>
      <p className="account-detail account-created-on">{accountDate}</p>
      <span className="account-detail account-card">
        <img src="/UI/src/imgs/verve-logo.png" className="card-logo" alt="verve logo" />
        &nbsp;&nbsp;&nbsp;&nbsp;** 4355 8603
      </span>
      <p className="account-detail account-balance account-red">
        {accountBalance}
        &nbsp;ngn
      </p>
      <p className="account-detail account-balance-desc">(Current balance)</p>
      <a className="action-btn view-transactions-link" href="pages/transactions/1/transactions.html">view transactions</a>
    </div>
  );
};

export default AccountBigBox;
