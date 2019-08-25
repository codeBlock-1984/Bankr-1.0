import React from 'react';
import expect from 'expect';
import { shallow } from 'enzyme';

import configureStore from '../src/Utils/makeMockStore';

import ActionBox from '../src/components/ActionBox';

describe('ActionBox', () => {
  let app;

  beforeEach(() => {
    app = shallow(
      <ActionBox
        type="savings"
        accountnumber="1020030293"
        date="24-09-13"
        amount="500"
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
