import React from 'react';
import expect from 'expect';
import { shallow } from 'enzyme';

import AccountsRow from '../src/components/AccountsRow';

describe('AccountBigBox', () => {
  let app;

  beforeEach(() => {
    app = shallow(
      <AccountsRow
        serialNumber="1"
        firstname="Helen"
        lastname="Troy"
        type="savings"
        accountnumber="1020394540"
        balance="50"
        status="dormant"
        accountDate="24-09-10"
        statusIconClass="fas fa-toggle-off"
      />,
    );
  });

  it('renders successfully', () => {
    expect(app).toBeDefined();
  });

  it('renders a div', () => {
    expect(app.find('div').length).toBe(8);
  });

  it('renders a i', () => {
    expect(app.find('i').length).toBe(3);
  });
});
