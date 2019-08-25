import React from 'react';
import expect from 'expect';
import { shallow } from 'enzyme';

import ActionSection from '../src/components/ActionSection';

const trimmed = [
  {
    type: 'savings',
    status: 'dormant',
    amount: '500',
    accountnumber: '1020030293',
    date: '24-09-13',
  },
  {
    type: 'savings',
    status: 'dormant',
    amount: '500',
    accountnumber: '1020030293',
    date: '24-09-13',
  },
];

describe('ActionSection', () => {
  let app;

  beforeEach(() => {
    app = shallow(
      <ActionSection
        data={trimmed}
      />,
    );
  });

  it('renders successfully', () => {
    expect(app).toBeDefined();
  });

  it('renders an ActionBox', () => {
    expect(app.find('ActionBox').length).toBe(2);
  });
  it('renders a div', () => {
    expect(app.find('div').length).toBe(1);
  });
});
