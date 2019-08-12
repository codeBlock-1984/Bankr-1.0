import React from 'react';

import UserTransactionRow from './UserTransactionRow';

const TransactionTable = (props) => {
  const { data } = props;
  return (
    <div className="detail-table">
      <div className="detail-table__row">
        <div className="detail-table__head trans-tb-date-head">Date</div>
        <div className="detail-table__head trans-tb-desc-head">Description</div>
        <div className="detail-table__head trans-tb-type-head">Type</div>
        <div className="detail-table__head trans-tb-amount-head">Amount</div>
        <div className="detail-table__head trans-tb-balance-head">Balance</div>
        <div className="detail-table__head trans-tb-icon-head" />
      </div>
      {
        data.map((item) => {
          const {
            date,
            type,
            accountnumber,
            newbalance,
            amount,
          } = item;

          return (
            <UserTransactionRow
              date={date}
              type={type}
              accountnumber={accountnumber}
              newbalance={newbalance}
              amount={amount}
            />
          );
        })
      }
    </div>
  );
};

export default TransactionTable;
