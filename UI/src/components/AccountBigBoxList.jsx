import React from 'react';

import AccountBigBox from './AccountBigBox';
import GetDateString from '../helpers/getDateString';

const { getLongDateString } = GetDateString;

const AccountBigBoxList = (props) => {
  const { accountArray, userDetails } = props;
  const { firstName, lastName, email } = userDetails;
  let key = 0;

  return (
    <div className="account-wrapper  big-wrapper l-flex l-flex-col">
      {
        accountArray.map((item) => {
          key += 1;
          const {
            type,
            status,
            balance,
            accountnumber,
            createdon,
          } = item;
          const accountDate = getLongDateString(createdon);

          return (
            <AccountBigBox
              accountName={`${firstName} ${lastName}`}
              accountEmail={email}
              accountType={type}
              accountNumber={accountnumber}
              accountBalance={balance}
              accountStatus={status}
              accountDate={accountDate}
              key={key}
            />
          );
        })
      }
    </div>
  );
};

export default AccountBigBoxList;
