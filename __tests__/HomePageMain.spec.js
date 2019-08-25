import React from 'react';
import expect from 'expect';
import { shallow } from 'enzyme';

import HomePageMain from '../src/components/HomePageMain';

describe('HomePageMain', () => {
  let app;

  beforeEach(() => {
    app = shallow(
      <HomePageMain />,
    );
  });

  it('renders successfully', () => {
    expect(app).toBeDefined();
  });

  it('renders a footer', () => {
    expect(app.find('main').length).toBe(1);
  });

  it('renders a div', () => {
    expect(app.find('div').length).toBe(1);
  });

  it('renders a h1', () => {
    expect(app.find('h1').length).toBe(1);
  });

  it('renders a p', () => {
    expect(app.find('p').length).toBe(2);
  });
});
