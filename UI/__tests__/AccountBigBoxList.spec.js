import React from 'react';
import expect from 'expect';
import { shallow } from 'enzyme';

import configureStore from '../src/Utils/makeMockStore';

import AccountBigBoxList from '../src/components/AccountBigBoxList';

const trimmed = [
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
const userDetails = {
  firstname: 'Helen',
  lastname: 'Troy',
  email: 'helentroy@gmail.com',
};

describe('AccountBigBoxList', () => {
  let app;

  beforeEach(() => {
    app = shallow(
      <AccountBigBoxList
        accountArray={trimmed}
        userDetails={userDetails}
      />,
    );
  });

  it('renders successfully', () => {
    expect(app).toBeDefined();
  });
});
