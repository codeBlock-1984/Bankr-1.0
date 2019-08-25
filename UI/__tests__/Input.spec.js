import React from 'react';
import expect from 'expect';
import { shallow } from 'enzyme';

import Input from '../src/components/Input';

describe('Input', () => {
  let app;

  beforeEach(() => {
    app = shallow(
      <Input
        name="Email"
        title="Email"
        value="Email"
        inputType="text"
        handleChange={jest.fn()}
        placeholder="Email"
        error="Email"
      />,
    );
  });

  it('renders successfully', () => {
    expect(app).toBeDefined();
  });

  it('renders a div', () => {
    expect(app.find('div').length).toBe(1);
  });

  it('renders a label', () => {
    expect(app.find('label').length).toBe(1);
  });

  it('renders a input', () => {
    expect(app.find('input').length).toBe(1);
  });

  it('renders a span', () => {
    expect(app.find('span').length).toBe(1);
  });
});
