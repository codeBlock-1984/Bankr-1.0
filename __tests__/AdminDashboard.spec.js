import React from 'react';
import expect from 'expect';
import { shallow } from 'enzyme';

import AdminDashboard from '../src/pages/AdminDashboard';
import configureStore from '../src/store/configureStore';

const store = configureStore();

describe('AdminDashboard', () => {
  let app;
  let res;

  beforeEach(() => {
    app = shallow(
      <AdminDashboard
        store={store}
      />,
    );

    res = app.dive().dive();
  });

  it('renders successfully', () => {
    expect(app).toBeDefined();
  });

  it('renders a MainTemplate', () => {
    expect(res.find('main').length).toBe(1);
  });

  it('renders a section', () => {
    expect(res.find('section').length).toBe(2);
  });

  it('renders a h2', () => {
    expect(res.find('h2').length).toBe(2);
  });

  it('renders a div', () => {
    expect(res.find('div').length).toBe(3);
  });
});
