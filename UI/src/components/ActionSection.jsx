import React from 'react';
import ActionBox from './ActionBox';

const ActionSection = (props) => {
  const { data } = props;
  let key = 0;
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

          key += 1;

          return (
            <ActionBox
              type={type}
              accountnumber={accountnumber}
              amount={amount}
              date={date}
              key={key}
            />
          );
        })
      }
    </div>
  );
};

export default ActionSection;
