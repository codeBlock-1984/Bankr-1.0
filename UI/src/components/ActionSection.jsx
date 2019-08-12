import React from 'react';
import ActionBox from './ActionBox';

const ActionSection = (props) => {
  const { data } = props;
  return (
    <div className="box trans-box l-flex l-flex-row">
      {
        data.map((item) => {
          const {
            type,
            accountnumber,
            amount,
            date,
          } = item;

          return (
            <ActionBox
              type={type}
              accountnumber={accountnumber}
              amount={amount}
              date={date}
            />
          );
        })
      }
    </div>
  );
};

export default ActionSection;
