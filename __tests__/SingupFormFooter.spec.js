import React from 'react';
import expect from 'expect';
import { shallow } from 'enzyme';

import SignupFormFooter from '../src/components/SignupFormFooter';

describe('SignupFormFooter', () => {
  let app;

  beforeEach(() => {
    app = shallow(
      <SignupFormFooter />,
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

  it('renders a FormLink', () => {
    expect(app.find('Connect(FormLink)').length).toBe(1);
  });
});
