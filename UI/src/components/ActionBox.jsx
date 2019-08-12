import React from 'react';

const ActionBox = (props) => {
  const {
    type,
    date,
    accountnumber,
    amount,
  } = props;
  return (
    <div className="single-box">
      <p className="trans-detail trans-title">{type}</p>
      <p className="trans-detail trans-date-time">{date}</p>
      <p className="trans-detail trans-vendor">{accountnumber}</p>
      <p className="trans-detail trans-amount">
        {amount}
        &nbsp;ngn
      </p>
    </div>
  );
};

export default ActionBox;
