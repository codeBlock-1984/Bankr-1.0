import React from 'react';
import expect from 'expect';
import { shallow } from 'enzyme';

import Loader from '../src/components/Loader';

describe('Loader', () => {
  let app;

  beforeEach(() => {
    app = shallow(
      <Loader />,
    );
  });

  it('renders successfully', () => {
    expect(app).toBeDefined();
  });

  it('renders a div', () => {
    expect(app.find('div').length).toBe(2);
  });

  it('renders a img', () => {
    expect(app.find('img').length).toBe(1);
  });
});
