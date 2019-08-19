import React from 'react';

const AccountsRow = (props) => {
  const {
    serialNumber,
    accountnumber,
    firstname,
    lastname,
    type,
    status,
    balance,
    statusIconClass,
  } = props;

  return (
    <div className="detail-table__row">
      <div className="detail-table__cell">{serialNumber}</div>
      <div className="detail-table__cell m-sentence-case">{`${firstname} ${lastname}`}</div>
      <div className="detail-table__cell">{type}</div>
      <div className="detail-table__cell">{accountnumber}</div>
      <div className="detail-table__cell">{balance}</div>
      <div className="detail-table__cell">{status}</div>
      <div className="detail-table__cell action-cell">
        <i className="fas fa-eye action-icon view-account-btn" />
        <i className="fas fa-trash-alt action-icon del-account-btn" />
        <i className={`fas ${statusIconClass} action-icon`} />
      </div>
    </div>
  );
};

export default AccountsRow;
