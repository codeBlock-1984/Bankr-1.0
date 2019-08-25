import React from 'react';
import expect from 'expect';
import { shallow } from 'enzyme';

import LoginFormFooter from '../src/components/LoginFormFooter';

describe('LoginFormFooter', () => {
  let app;

  beforeEach(() => {
    app = shallow(
      <LoginFormFooter />,
    );
  });

  it('renders successfully', () => {
    expect(app).toBeDefined();
  });

  it('renders a div', () => {
    expect(app.find('div').length).toBe(1);
  });

  it('renders a span', () => {
    expect(app.find('span').length).toBe(1);
  });

  it('renders a p', () => {
    expect(app.find('p').length).toBe(1);
  });

  it('renders a FormLink', () => {
    expect(app.find('Connect(FormLink)').length).toBe(1);
  });
});
