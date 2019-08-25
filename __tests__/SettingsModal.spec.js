import React from 'react';
import expect from 'expect';
import { shallow } from 'enzyme';

import SettingsModal from '../src/components/SettingsModal';
import configureStore from '../src/store/configureStore';

const store = configureStore();

describe('SettingsModal', () => {
  let app;
  let res;

  beforeEach(() => {
    app = shallow(
      <SettingsModal
        SettingsModalStyle="style"
        dispatch={jest.fn()}
        store={store}
      />,
    );

    res = app.dive().dive();
  });

  it('renders successfully', () => {
    expect(res).toBeDefined();
  });

  it('renders a div', () => {
    expect(res.find('div').length).toBe(7);
  });

  it('renders a h2', () => {
    expect(res.find('h2').length).toBe(1);
  });

  it('renders a span', () => {
    expect(res.find('span').length).toBe(1);
  });

  it('renders a button', () => {
    expect(res.find('button').length).toBe(3);
  });

  it('renders a input', () => {
    expect(res.find('input').length).toBe(6);
  });

  it('renders a label', () => {
    expect(res.find('label').length).toBe(4);
  });

  it('renders a i', () => {
    expect(res.find('i').length).toBe(1);
  });

  it('renders a br', () => {
    expect(res.find('b').length).toBe(1);
  });
});
