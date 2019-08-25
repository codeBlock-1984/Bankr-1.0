import React from 'react';
import expect from 'expect';
import { shallow } from 'enzyme';

import AccountsTable from '../src/components/AccountsTable';

const data = [
  {
    id: '1',
    firstname: 'Helen',
    lastname: 'Troy',
    type: 'savings',
    accountnumber: '1020394540',
    balance: '50',
    status: 'dormant',
    accountDate: '24-09-10',
    statusIconClass: 'fas fa-toggle-off',
  },
  {
    id: '1',
    firstname: 'Helen',
    lastname: 'Troy',
    type: 'savings',
    accountnumber: '1020394540',
    balance: '50',
    status: 'dormant',
    accountDate: '24-09-10',
    statusIconClass: 'fas fa-toggle-off',
  },
];

describe('AccountsTable', () => {
  let app;

  beforeEach(() => {
    app = shallow(
      <AccountsTable
        data={data}
      />,
    );
  });

  it('renders successfully', () => {
    expect(app).toBeDefined();
  });

  it('renders a div', () => {
    expect(app.find('div').length).toBe(9);
  });

  it('renders a AccountsRow', () => {
    expect(app.find('AccountsRow').length).toBe(2);
  });
});
