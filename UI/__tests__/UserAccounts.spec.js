import React from 'react';
import expect from 'expect';
import { shallow } from 'enzyme';

import UserAccounts from '../src/pages/UserAccounts';
import configureStore from '../src/store/configureStore';

const store = configureStore();

describe('UserAccounts', () => {
  let app;
  let res;

  beforeEach(() => {
    app = shallow(
      <UserAccounts
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

  it('renders a Link', () => {
    expect(res.find('Link').length).toBe(1);
  });
});
