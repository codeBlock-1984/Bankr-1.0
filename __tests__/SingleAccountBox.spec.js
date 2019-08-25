import React from 'react';
import expect from 'expect';
import { shallow } from 'enzyme';

import SingleAccountBox from '../src/components/SingleAccountBox';

describe('SingleAccountBox', () => {
  let app;

  beforeEach(() => {
    app = shallow(
      <SingleAccountBox
        accountType="style"
        accountNumber="1029388475"
        accountBalance="500.0"
      />,
    );
  });

  it('renders successfully', () => {
    expect(app).toBeDefined();
  });

  it('renders a div', () => {
    expect(app.find('div').length).toBe(1);
  });

  it('renders a p', () => {
    expect(app.find('p').length).toBe(4);
  });

  it('renders a span', () => {
    expect(app.find('span').length).toBe(3);
  });

  it('renders a img', () => {
    expect(app.find('img').length).toBe(1);
  });
});
