import React from 'react';
import expect from 'expect';
import { shallow } from 'enzyme';

import StaffAccounts from '../src/pages/StaffAccounts';
import configureStore from '../src/store/configureStore';

const store = configureStore();

describe('StaffAccounts', () => {
  let app;
  let res;

  beforeEach(() => {
    app = shallow(
      <StaffAccounts
        store={store}
      />,
    );

    res = app.dive().dive();
  });

  it('renders successfully', () => {
    expect(app).toBeDefined();
  });

  it('renders a MainTemplate', () => {
    expect(res.find('MainTemplate').length).toBe(1);
  });

  it('renders a section', () => {
    expect(res.find('section').length).toBe(1);
  });

  it('renders a h2', () => {
    expect(res.find('h2').length).toBe(1);
  });

  it('renders a div', () => {
    expect(res.find('div').length).toBe(1);
  });

  it('renders a AccountsTable', () => {
    expect(res.find('AccountsTable').length).toBe(1);
  });
});
