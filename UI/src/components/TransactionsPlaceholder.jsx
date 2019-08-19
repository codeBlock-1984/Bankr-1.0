import React from 'react';

const TransactionsPlaceholder = ({ body }) => (
  <div className="detail-table">
    <div className="detail-table__row">
      <div className="detail-table__head trans-tb-date-head">Date</div>
      <div className="detail-table__head trans-tb-desc-head">Description</div>
      <div className="detail-table__head trans-tb-type-head">Type</div>
      <div className="detail-table__head trans-tb-amount-head">Amount</div>
      <div className="detail-table__head trans-tb-balance-head">Balance</div>
      <div className="detail-table__head trans-tb-icon-head" />
    </div>
    <div className="detail-table__row placeholder-transactions">
      <h2 className="placeholder-text">{body}</h2>
    </div>
  </div>
);

export default TransactionsPlaceholder;
