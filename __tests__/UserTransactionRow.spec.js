import React from 'react';
import expect from 'expect';
import { shallow } from 'enzyme';

import UserTransactionRow from '../src/components/UserTransactionRow';

describe('UserTransactionRow', () => {
  let app;

  beforeEach(() => {
    app = shallow(
      <UserTransactionRow
        type="debit"
        amount="500"
        date="05-06-12"
        newbalance="5994"
        accountnumber="1029394857"
      />,
    );
  });

  it('renders successfully', () => {
    expect(app).toBeDefined();
  });

  it('renders a div', () => {
    expect(app.find('div').length).toBe(7);
  });

  it('renders a i', () => {
    expect(app.find('i').length).toBe(1);
  });
});
