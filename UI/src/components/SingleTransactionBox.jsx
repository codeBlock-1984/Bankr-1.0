import React from 'react';

const SingleTransactionBox = (props) => {
  const {
    transType,
    transDate,
    transAccount,
    transAmount,
  } = props;

  return (
    <div className="single-box">
      <p className="trans-detail trans-title">
        {transType}
      </p>
      <p className="trans-detail trans-date-time">
        {transDate}
      </p>
      <p className="trans-detail trans-vendor">
        {transAccount}
      </p>
      <p className="trans-detail trans-amount">
        { transAmount }
        &nbsp;
        ngn
      </p>
    </div>
  );
};

export default SingleTransactionBox;
