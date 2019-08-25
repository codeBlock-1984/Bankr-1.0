import React from 'react';
import expect from 'expect';
import { shallow } from 'enzyme';

import MainTemplate from '../src/containers/MainTemplate';

describe('MainTemplate', () => {
  let app;

  beforeEach(() => {
    app = shallow(
      <MainTemplate>
        <h1>Hello</h1>
      </MainTemplate>,
    );
  });

  it('renders successfully', () => {
    expect(app).toBeDefined();
  });

  it('renders a main', () => {
    expect(app.find('main').length).toBe(1);
  });

  it('renders a h1', () => {
    expect(app.find('h1').length).toBe(1);
  });
});
