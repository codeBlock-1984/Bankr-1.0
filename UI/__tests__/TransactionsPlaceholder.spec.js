import React from 'react';
import expect from 'expect';
import { shallow } from 'enzyme';

import TransactionsPlaceholder from '../src/components/TransactionsPlaceholder';

describe('TransactionsPlaceholder', () => {
  let app;

  beforeEach(() => {
    app = shallow(
      <TransactionsPlaceholder
        body="No accounts"
      />,
    );
  });

  it('renders successfully', () => {
    expect(app).toBeDefined();
  });

  it('renders a div', () => {
    expect(app.find('div').length).toBe(9);
  });

  it('renders a h2', () => {
    expect(app.find('h2').length).toBe(1);
  });
});
