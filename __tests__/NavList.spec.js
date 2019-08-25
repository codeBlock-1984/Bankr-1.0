import React from 'react';
import expect from 'expect';
import { shallow } from 'enzyme';

import NavList from '../src/components/NavList';

const data = [
  {
    linkUrl: '/',
    linkTitle: 'Home',
  },
  {
    linkUrl: '/',
    linkTitle: 'Home',
  },
];

describe('NavList', () => {
  let app;

  beforeEach(() => {
    app = shallow(
      <NavList
        links={data}
      />,
    );
  });

  it('renders successfully', () => {
    expect(app).toBeDefined();
  });

  it('renders a NavListItem', () => {
    expect(app.find('NavListItem').length).toBe(2);
  });
});
