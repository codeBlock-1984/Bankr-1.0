import React from 'react';
import expect from 'expect';
import { shallow } from 'enzyme';

import configureStore from '../src/store/configureStore';
import AppRouter from '../src/routers/AppRouter';

const store = configureStore();

describe('App', () => {
  let app;

  beforeEach(() => {
    app = shallow(<AppRouter store={store} />);
  });

  it('renders successfully', () => {
    expect(app).toBeDefined();
  });

  it('renders a Switch', () => {
    expect(app.find('Switch').length).toBe(1);
  });

  it('renders Routes', () => {
    expect(app.find('Route').length).toBe(3);
  });
});
