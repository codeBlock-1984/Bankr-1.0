import React from 'react';

import AccountsRow from './AccountsRow';

const AccountsTable = (props) => {
  const { data } = props;
  let key = 0;
  return (
    <div className="detail-table all-accounts-table">
      <div className="detail-table__row">
        <div className="detail-table__head">S/N</div>
        <div className="detail-table__head">Account Name</div>
        <div className="detail-table__head">Account Type</div>
        <div className="detail-table__head">Account Number</div>
        <div className="detail-table__head">Balance</div>
        <div className="detail-table__head">Status</div>
        <div className="detail-table__head action-head" />
      </div>
      {
        data.map((item) => {
          const {
            id,
            accountnumber,
            firstname,
            lastname,
            type,
            status,
            balance,
            statusIconClass,
          } = item;

          key += 1;

          return (
            <AccountsRow
              serialNumber={id}
              accountnumber={accountnumber}
              firstname={firstname}
              lastname={lastname}
              type={type}
              status={status}
              balance={balance}
              statusIconClass={statusIconClass}
              key={key}
            />
          );
        })
      }
    </div>
  );
};

export default AccountsTable;
