import React from 'react';
import expect from 'expect';
import { shallow } from 'enzyme';

import TransactionList from '../src/components/TransactionList';

const data = [
  {
    type: 'debit',
    amount: '500',
    createdon: '05-06-12',
    accountnumber: 1029394857,
  },
  {
    type: 'debit',
    amount: '500',
    createdon: '05-06-12',
    accountnumber: 1029394857,
  },
];

describe('TransactionList', () => {
  let app;

  beforeEach(() => {
    app = shallow(
      <TransactionList
        transArray={data}
      />,
    );
  });

  it('renders successfully', () => {
    expect(app).toBeDefined();
  });

  it('renders a SingleTransactionBox', () => {
    expect(app.find('SingleTransactionBox').length).toBe(2);
  });
});
