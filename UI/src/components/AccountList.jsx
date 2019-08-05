import React from 'react';

import SingleAccountBox from './SingleAccountBox';

const AccountList = (props) => {
  const { accountArray } = props;
  let key = 0;

  return (
    <div className="account-wrapper l-flex l-flex-row">
      {
        accountArray.map((item) => {
          key += 1;
          const {
            type,
            accountnumber,
            balance,
          } = item;

          return (
            <SingleAccountBox
              accountType={type}
              accountNumber={accountnumber}
              accountBalance={balance}
              key={key}
            />
          );
        })
      }
    </div>
  );
};

export default AccountList;
