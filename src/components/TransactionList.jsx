import React from 'react';

import SingleTransactionBox from './SingleTransactionBox';

const TransactionList = (props) => {
  const { transArray } = props;
  let key = 0;

  return (
    <div className="box trans-box l-flex l-flex-row">
      {
        transArray.map((item) => {
          key += 1;
          const {
            type,
            amount,
            createdon,
            accountnumber,
          } = item;

          return (
            <SingleTransactionBox
              transType={type}
              transAmount={amount}
              transDate={createdon}
              transAccount={accountnumber}
              key={key}
            />
          );
        })
      }
    </div>
  );
};

export default TransactionList;
