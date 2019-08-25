import React from 'react';
import expect from 'expect';
import { shallow } from 'enzyme';

import NavListItem from '../src/components/NavListItem';

describe('NavListItem', () => {
  let app;

  beforeEach(() => {
    app = shallow(
      <NavListItem
        page="2"
        title="My Nav"
      />,
    );
  });

  it('renders successfully', () => {
    expect(app).toBeDefined();
  });

  it('renders a Link', () => {
    expect(app.find('Link').length).toBe(1);
  });

  it('renders a i', () => {
    expect(app.find('i').length).toBe(1);
  });

  it('renders a span', () => {
    expect(app.find('span').length).toBe(1);
  });
});
