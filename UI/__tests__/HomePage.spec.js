import React from 'react';
import expect from 'expect';
import { shallow } from 'enzyme';

import HomePage from '../src/pages/HomePage';


let homePage;
describe('HomePage', () => {
  beforeEach(() => {
    homePage = shallow(<HomePage />);
  });

  it('renders successfully', () => {
    expect(homePage).toBeDefined();
  });

  // it('renders a div with specified class', () => {
  //   expect(homePage.find('div').length).toBe(1);
  //   expect(homePage.find('.page-wrapper').length).toEqual(1);
  // });

  it('renders a NavBar component', () => {
    expect(homePage.find('Navbar').length).toBe(1);
    expect(homePage.find('.landing-page-nav').length).toEqual(1);
  });

  it('renders a HomePageMain component', () => {
    expect(homePage.find('HomePageMain').length).toEqual(1);
  });

  it('renders a Footer component', () => {
    expect(homePage.find('Footer').length).toBe(1);
    expect(homePage.find('.page-footer--small').length).toBe(1);
  });
});
