import React from 'react';
import expect from 'expect';
import { shallow } from 'enzyme';

import AdminPage from '../src/pages/AdminPage';
import configureStore from '../src/store/configureStore';

const store = configureStore();

describe('AdminPage', () => {
  let app;
  let res;

  beforeEach(() => {
    app = shallow(
      <AdminPage
        store={store}
      />,
    );

    res = app;
  });

  it('renders successfully', () => {
    expect(app).toBeDefined();
  });

  it('renders a MainAside', () => {
    expect(res.find('Connect(MainAside)').length).toBe(1);
  });

  it('renders a MainNav', () => {
    expect(res.find('Connect(MainNav)').length).toBe(1);
  });

  it('renders a div', () => {
    expect(res.find('div').length).toBe(1);
  });
});
