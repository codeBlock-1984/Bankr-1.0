import React from 'react';
import expect from 'expect';
import { shallow } from 'enzyme';

import UserAccountPlaceholder from '../src/components/UserAccountPlaceholder';

describe('UserAccountPlaceholder', () => {
  let app;

  beforeEach(() => {
    app = shallow(
      <UserAccountPlaceholder
        body="No accounts"
      />,
    );
  });

  it('renders successfully', () => {
    expect(app).toBeDefined();
  });

  it('renders a div', () => {
    expect(app.find('div').length).toBe(1);
  });

  it('renders a h2', () => {
    expect(app.find('h2').length).toBe(1);
  });
});
