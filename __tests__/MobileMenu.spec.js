import React from 'react';
import expect from 'expect';
import { shallow } from 'enzyme';

import MobileMenu from '../src/components/MobileMenu';

describe('MobileMenu', () => {
  let app;

  beforeEach(() => {
    app = shallow(
      <MobileMenu />,
    );
  });

  it('renders successfully', () => {
    expect(app).toBeDefined();
  });

  it('renders a div', () => {
    expect(app.find('div').length).toBe(1);
  });

  it('renders a NavList', () => {
    expect(app.find('NavList').length).toBe(1);
  });
});
