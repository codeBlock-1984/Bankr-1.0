import React from 'react';
import expect from 'expect';
import { shallow } from 'enzyme';

import ForbiddenPage from '../src/pages/ForbiddenPage';

describe('ForbiddenPage', () => {
  let app;
  let res;

  beforeEach(() => {
    app = shallow(
      <ForbiddenPage />,
    );

    res = app;
  });

  it('renders successfully', () => {
    expect(app).toBeDefined();
  });

  it('renders a h3', () => {
    expect(res.find('h3').length).toBe(1);
  });

  it('renders a div', () => {
    expect(res.find('div').length).toBe(1);
  });

  it('renders a h1', () => {
    expect(res.find('h1').length).toBe(1);
  });
});
