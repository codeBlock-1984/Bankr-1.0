import React from 'react';
import expect from 'expect';
import { shallow } from 'enzyme';

import ButtonInput from '../src/components/ButtonInput';

describe('ButtonInput', () => {
  let app;

  beforeEach(() => {
    app = shallow(
      <ButtonInput
        name="Signin"
        defaultValue="Signin"
        action={jest.fn()}
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
    expect(app.find('p').length).toBe(1);
  });

  it('renders a input', () => {
    expect(app.find('input').length).toBe(1);
  });
});
