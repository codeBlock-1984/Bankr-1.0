import React from 'react';
import expect from 'expect';
import { shallow } from 'enzyme';

import SingleTransactionBox from '../src/components/SingleTransactionBox';

describe('SingleTransactionBox', () => {
  let app;

  beforeEach(() => {
    app = shallow(
      <SingleTransactionBox
        transType="style"
        transAccount="1029388475"
        transAmount="500"
        transDate="23-03-2030"
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
});
