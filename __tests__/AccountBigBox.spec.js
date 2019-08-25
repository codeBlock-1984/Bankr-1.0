import React from 'react';
import expect from 'expect';
import { shallow } from 'enzyme';

import AccountBigBox from '../src/components/AccountBigBox';

describe('AccountBigBox', () => {
  let app;

  beforeEach(() => {
    app = shallow(
      <AccountBigBox
        accountName="Helen"
        accountEmail="helen@gmail.com"
        accountType="savings"
        accountNumber="1020394540"
        accountBalance="50"
        accountStatus="dormant"
        accountDate="24-09-10"
      />,
    );
  });

  it('renders successfully', () => {
    expect(app).toBeDefined();
  });

  it('renders a div', () => {
    expect(app.find('div').length).toBe(1);
  });

  it('renders a span', () => {
    expect(app.find('span').length).toBe(7);
  });

  it('renders a p', () => {
    expect(app.find('p').length).toBe(8);
  });

  it('renders an img', () => {
    expect(app.find('img').length).toBe(1);
  });
});
