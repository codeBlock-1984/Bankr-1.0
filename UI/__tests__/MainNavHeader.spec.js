import React from 'react';
import expect from 'expect';
import { shallow } from 'enzyme';

import MainNavHeader from '../src/components/MainNavHeader';

describe('MainNavHeader', () => {
  let app;

  beforeEach(() => {
    app = shallow(
      <MainNavHeader />,
    );
  });

  it('renders successfully', () => {
    expect(app).toBeDefined();
  });

  it('renders a header', () => {
    expect(app.find('header').length).toBe(1);
  });

  it('renders a h1', () => {
    expect(app.find('h1').length).toBe(1);
  });

  it('renders a Link', () => {
    expect(app.find('Link').length).toBe(1);
  });
});
