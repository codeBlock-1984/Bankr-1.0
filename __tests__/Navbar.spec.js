import React from 'react';
import expect from 'expect';
import { shallow } from 'enzyme';

import Navbar from '../src/components/Navbar';

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

describe('Navbar', () => {
  let app;

  beforeEach(() => {
    app = shallow(
      <Navbar
        data={data}
      />,
    );
  });

  it('renders successfully', () => {
    expect(app).toBeDefined();
  });

  it('renders a Link', () => {
    expect(app.find('Link').length).toBe(2);
  });
});
