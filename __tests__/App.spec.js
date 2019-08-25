import React from 'react';
import expect from 'expect';
import { shallow } from 'enzyme';

import configureStore from '../src/store/configureStore';
import AppRouter from '../src/routers/AppRouter';

const store = configureStore();

describe('App', () => {
  let app;
  let res;

  beforeEach(() => {
    app = shallow(<AppRouter store={store} />);
    res = app.dive().dive();
  });

  it('renders successfully', () => {
    expect(app).toBeDefined();
  });

  it('renders a Router', () => {
    expect(res.find('BrowserRouter').length).toBe(1);
  });

  it('renders a Switch', () => {
    expect(res.find('Switch').length).toBe(1);
  });

  it('renders Routes', () => {
    expect(res.find('Route').length).toBe(6);
  });
});
