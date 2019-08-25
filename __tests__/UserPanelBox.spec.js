import React from 'react';
import expect from 'expect';
import { shallow } from 'enzyme';

import configureStore from '../src/store/configureStore';
import UserPanelBox from '../src/components/UserPanelBox';

const store = configureStore();

describe('UserPanelBox', () => {
  let app;
  let res;

  beforeEach(() => {
    app = shallow(
      <UserPanelBox
        dispatch={jest.fn()}

        store={store}
      />,
    );

    res = app.dive().dive();
  });

  it('renders successfully', () => {
    expect(app).toBeDefined();
  });

  it('renders a div', () => {
    expect(res.find('div').length).toBe(1);
  });

  it('renders a ul', () => {
    expect(res.find('ul').length).toBe(1);
  });

  it('renders a li', () => {
    expect(res.find('li').length).toBe(2);
  });

  it('renders a button', () => {
    expect(res.find('button').length).toBe(1);
  });

  it('renders a Link', () => {
    expect(res.find('Link').length).toBe(1);
  });

  it('renders a span', () => {
    expect(res.find('span').length).toBe(2);
  });

  it('renders a i', () => {
    expect(res.find('i').length).toBe(2);
  });
});
