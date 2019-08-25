import React from 'react';
import expect from 'expect';
import { shallow } from 'enzyme';

import ProfileBox from '../src/components/ProfileBox';

describe('ProfileBox', () => {
  let app;

  beforeEach(() => {
    app = shallow(
      <ProfileBox
        firstName="Helen"
        lastName="Troy"
        email="helen.troy"
      />,
    );
  });

  it('renders successfully', () => {
    expect(app).toBeDefined();
  });

  it('renders a div', () => {
    expect(app.find('div').length).toBe(2);
  });

  it('renders a span', () => {
    expect(app.find('span').length).toBe(4);
  });

  it('renders a p', () => {
    expect(app.find('p').length).toBe(4);
  });
});
