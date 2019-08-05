import React from 'react';
import expect from 'expect';
import { shallow } from 'enzyme';

import configureStore from '../src/store/configureStore';

import AccountBigBoxList from '../src/components/AccountBigBoxList';

const store = configureStore();

describe('AccountBigBoxList', () => {
  let app;

  beforeEach(() => {
    app = shallow(<AccountBigBoxList store={store} />);
  });

  it('renders successfully', () => {
    expect(app).toBeDefined();
  });

  // it('renders a Switch', () => {
  //   expect(app.find('Switch').length).toBe(1);
  // });

  // it('renders Routes', () => {
  //   expect(app.find('Route').length).toBe(3);
  // });
});
