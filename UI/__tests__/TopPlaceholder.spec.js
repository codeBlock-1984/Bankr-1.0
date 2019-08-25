import React from 'react';
import expect from 'expect';
import { shallow } from 'enzyme';

import TopPlaceholder from '../src/components/TopPlaceholder';

describe('TopPlaceholder', () => {
  let app;

  beforeEach(() => {
    app = shallow(
      <TopPlaceholder
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
