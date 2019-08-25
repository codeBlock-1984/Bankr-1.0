import React from 'react';
import expect from 'expect';
import { shallow } from 'enzyme';

import AccountList from '../src/components/AccountList';

const accountArray = [
  {
    type: 'savings',
    status: 'dormant',
    balance: '500',
    accountnumber: '1020030293',
    createdon: '24-09-13',
  },
  {
    type: 'savings',
    status: 'dormant',
    balance: '500',
    accountnumber: '1020030293',
    createdon: '24-09-13',
  },
];

describe('AccountList', () => {
  let app;

  beforeEach(() => {
    app = shallow(
      <AccountList
        accountArray={accountArray}
      />,
    );
  });

  it('renders successfully', () => {
    expect(app).toBeDefined();
  });

  it('renders a div', () => {
    expect(app.find('div').length).toBe(1);
  });

  it('renders a SingleAccountBox', () => {
    expect(app.find('SingleAccountBox').length).toBe(2);
  });
});
