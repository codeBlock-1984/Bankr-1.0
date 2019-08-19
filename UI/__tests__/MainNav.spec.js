import React from 'react';
import expect from 'expect';
import { shallow } from 'enzyme';

import MainNav from '../src/components/MainNav';
import configureStore from '../src/store/configureStore';

const store = configureStore();
const links = [
  'Home',
  'Accounts',
];

describe('MainNav', () => {
  let app;
  let res;

  beforeEach(() => {
    app = shallow(
      <MainNav
        links={links}

        store={store}
      />,
    );

    res = app.dive();
  });

  it('renders successfully', () => {
    expect(app).toBeDefined();
  });

  it('renders a MainNavHeader', () => {
    expect(res.find('MainNavHeader').length).toBe(1);
  });

  it('renders a NavList', () => {
    expect(res.find('NavList').length).toBe(1);
  });

  it('renders a Footer', () => {
    expect(res.find('Footer').length).toBe(1);
  });
});
