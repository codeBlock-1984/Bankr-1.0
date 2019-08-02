import React from 'react';
import expect from 'expect';
import { shallow } from 'enzyme';

import App from '../src/routers/AppRouter';

describe('App', () => {
  let app;

  beforeEach(() => {
    app = shallow(<App />);
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
