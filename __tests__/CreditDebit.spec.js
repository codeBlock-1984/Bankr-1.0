import React from 'react';
import expect from 'expect';
import { shallow } from 'enzyme';

import CreditDebit from '../src/pages/CreditDebit';
import configureStore from '../src/store/configureStore';

const store = configureStore();

describe('CreditDebit', () => {
  let app;
  let res;

  beforeEach(() => {
    app = shallow(
      <CreditDebit
        store={store}
      />,
    );

    res = app.dive().dive();
  });

  it('renders successfully', () => {
    expect(app).toBeDefined();
  });

  it('renders a MainTemplate', () => {
    expect(res.find('main').length).toBe(1);
  });

  it('renders a section', () => {
    expect(res.find('section').length).toBe(1);
  });

  it('renders a h2', () => {
    expect(res.find('h2').length).toBe(1);
  });

  it('renders a div', () => {
    expect(res.find('div').length).toBe(5);
  });

  it('renders a p', () => {
    expect(res.find('p').length).toBe(1);
  });

  it('renders a input', () => {
    expect(res.find('input').length).toBe(4);
  });

  it('renders a select', () => {
    expect(res.find('select').length).toBe(1);
  });

  it('renders a option', () => {
    expect(res.find('option').length).toBe(3);
  });

  it('renders a label', () => {
    expect(res.find('label').length).toBe(2);
  });

  it('renders a i', () => {
    expect(res.find('i').length).toBe(1);
  });

  it('renders a button', () => {
    expect(res.find('button').length).toBe(1);
  });
});
