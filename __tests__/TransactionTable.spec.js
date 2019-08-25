import React from 'react';
import expect from 'expect';
import { shallow } from 'enzyme';

import TransactionTable from '../src/components/TransactionTable';

const data = [
  {
    type: 'debit',
    amount: '500',
    date: '05-06-12',
    newbalance: '5994',
    accountnumber: 1029394857,
  },
  {
    type: 'debit',
    amount: '500',
    date: '05-06-12',
    newbalance: '5994',
    accountnumber: 1029394857,
  },
];

describe('TransactionTable', () => {
  let app;

  beforeEach(() => {
    app = shallow(
      <TransactionTable
        data={data}
      />,
    );
  });

  it('renders successfully', () => {
    expect(app).toBeDefined();
  });

  it('renders a div', () => {
    expect(app.find('div').length).toBe(8);
  });

  it('renders a UserTransactionRow', () => {
    expect(app.find('UserTransactionRow').length).toBe(2);
  });
});
