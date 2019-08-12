import React from 'react';

const UserTransactionRow = (props) => {
  const {
    date,
    accountnumber,
    type,
    amount,
    newbalance,
  } = props;

  return (
    <div className="detail-table__row">
      <div className="detail-table__cell trans-tb-date">{date}</div>
      <div className="detail-table__cell trans-tb-desc">{accountnumber}</div>
      <div className="detail-table__cell trans-tb-type">{type}</div>
      <div className="detail-table__cell trans-tb-amount">{amount}</div>
      <div className="detail-table__cell trans-tb-balance">{newbalance}</div>
      <div className="detail-table__cell trans-tb-icon">
        <i className="fas fa-eye action-icon view-trans-btn" />
      </div>
    </div>
  );
};

export default UserTransactionRow;
