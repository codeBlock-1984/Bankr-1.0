import React from 'react';
import expect from 'expect';
import { shallow } from 'enzyme';

import StaffPage from '../src/pages/StaffPage';

describe('StaffPage', () => {
  let app;

  beforeEach(() => {
    app = shallow(
      <StaffPage />,
    );
  });

  it('renders successfully', () => {
    expect(app).toBeDefined();
  });

  it('renders a div', () => {
    expect(app.find('div').length).toBe(1);
  });

  it('renders a MainNav', () => {
    expect(app.find('Connect(MainNav)').length).toBe(1);
  });

  it('renders a MainAside', () => {
    expect(app.find('Connect(MainAside)').length).toBe(1);
  });
});
