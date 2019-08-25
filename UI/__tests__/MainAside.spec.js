import React from 'react';
import expect from 'expect';
import { shallow } from 'enzyme';

import MainAside from '../src/components/MainAside';
import configureStore from '../src/store/configureStore';

const store = configureStore();

describe('MainAside', () => {
  let app;
  let res;

  beforeEach(() => {
    app = shallow(
      <MainAside
        userName="Helen Troy"
        imgUrl="https://avatar.cc/img=3"
        type="client"

        store={store}
      />,
    );

    res = app.dive().dive();
  });

  it('renders successfully', () => {
    expect(app).toBeDefined();
  });

  it('renders a section', () => {
    expect(res.find('section').length).toBe(1);
  });

  it('renders a MainAsideHeader', () => {
    expect(res.find('Connect(MainAsideHeader)').length).toBe(1);
  });

  it('renders a UserPanelBox', () => {
    expect(res.find('Connect(UserPanelBox)').length).toBe(1);
  });

  it('renders a MobileMenu', () => {
    expect(res.find('MobileMenu').length).toBe(1);
  });

  it('renders a SettingsModal', () => {
    expect(res.find('Connect(SettingsModal)').length).toBe(1);
  });

  it('renders a Loader', () => {
    expect(res.find('Loader').length).toBe(1);
  });

  it('renders a PageSwitcher', () => {
    expect(res.find('Connect(PageSwitcher)').length).toBe(1);
  });
});
