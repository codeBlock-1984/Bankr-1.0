import React from 'react';
import expect from 'expect';
import { shallow } from 'enzyme';

import { UserDashboard } from '../src/pages/UserDashboard';
import configureStore from '../src/store/configureStore';

const store = configureStore();
const user = {
  firstName: 'Henry',
  lastName: 'Crawley',
  email: 'crawley@gmail.com',
};
const userTransactions = [
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
  {
    type: 'debit',
    amount: '500',
    createdon: '05-06-12',
    accountnumber: 1029394857,
  },
];

const userAccounts = [
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

describe('UserDashboard', () => {
  let app;
  let res;

  beforeEach(() => {
    app = shallow(
      <UserDashboard
        user={user}
        userAccounts={userAccounts}
        userTransactions={userTransactions}
        token="eyshfejskfhfkye.dskidkdklldkhehk"
        store={store}
        getUserAccounts={jest.fn()}
        setUserAccounts={jest.fn()}
      />,
    );

    res = app;
  });

  it('renders successfully', () => {
    expect(res).toBeDefined();
  });

  it('renders a MainTemplate', () => {
    expect(res.find('MainTemplate').length).toBe(1);
  });

  it('renders a section', () => {
    expect(res.find('section').length).toBe(2);
  });

  it('renders a h2', () => {
    expect(res.find('h2').length).toBe(2);
  });

  it('renders a BottomPlaceHolder', () => {
    expect(res.find('BottomPlaceholder').length).toBe(1);
  });

  it('renders a TopPlaceholder', () => {
    expect(res.find('TopPlaceholder').length).toBe(1);
  });
});
