import React from 'react';
import expect from 'expect';
import { shallow } from 'enzyme';

import Users from '../src/pages/Users';
import configureStore from '../src/store/configureStore';

const store = configureStore();

describe('Users', () => {
  let app;
  let res;

  beforeEach(() => {
    res = shallow(
      <Users store={store} />,
    );
    app = res.dive().dive();
  });

  it('renders successfully', () => {
    expect(app).toBeDefined();
  });

  it('renders a section', () => {
    expect(app.find('section').length).toBe(1);
  });

  it('renders a div', () => {
    expect(app.find('div').length).toBe(8);
  });

  it('renders a MainTemplate', () => {
    expect(app.find('main').length).toBe(1);
  });

  it('renders a h2', () => {
    expect(app.find('h2').length).toBe(1);
  });

  it('renders a a', () => {
    expect(app.find('a').length).toBe(1);
  });
});
