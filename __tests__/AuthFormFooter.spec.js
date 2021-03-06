import React from 'react';
import expect from 'expect';
import { shallow } from 'enzyme';

import AuthFormFooter from '../src/components/AuthFormFooter';

describe('AuthFormFooter', () => {
  let app;

  beforeEach(() => {
    app = shallow(
      <AuthFormFooter />,
    );
  });

  it('renders successfully', () => {
    expect(app).toBeDefined();
  });

  it('renders a footer', () => {
    expect(app.find('footer').length).toBe(1);
  });

  it('renders a p', () => {
    expect(app.find('p').length).toBe(1);
  });
});
