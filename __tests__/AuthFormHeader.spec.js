import React from 'react';
import expect from 'expect';
import { shallow } from 'enzyme';

import AuthFormHeader from '../src/components/AuthFormHeader';

describe('AuthFormHeader', () => {
  let app;

  beforeEach(() => {
    app = shallow(
      <AuthFormHeader
        res="hello"
      />,
    );
  });

  it('renders successfully', () => {
    expect(app).toBeDefined();
  });

  it('renders a div', () => {
    expect(app.find('div').length).toBe(2);
  });

  it('renders a p', () => {
    expect(app.find('p').length).toBe(1);
  });

  it('renders a h1', () => {
    expect(app.find('h1').length).toBe(1);
  });
});
