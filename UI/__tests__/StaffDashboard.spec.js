import React from 'react';
import expect from 'expect';
import { shallow } from 'enzyme';

import { StaffDashboard } from '../src/pages/StaffDashboard';
import configureStore from '../src/store/configureStore';

const store = configureStore();
const user = {
  firstName: 'Henry',
  lastName: 'Crawley',
  email: 'crawley@gmail.com',
};
const actions = [
  {
    type: 'savings',
    accountnumber: '1020030293',
    date: '24-09-13',
    amount: '500',
  },
  {
    type: 'savings',
    accountnumber: '1020030293',
    date: '24-09-13',
    amount: '500',
  },
];

describe('StaffDashboard', () => {
  let app;
  let res;

  beforeEach(() => {
    app = shallow(
      <StaffDashboard
        user={user}
        actions={actions}
        token="eyshfejskfhfkye.dskidkdklldkhehk"
        store={store}
        getUserActions={jest.fn()}
      />,
    );

    res = app;
  });

  it('renders successfully', () => {
    expect(app).toBeDefined();
  });

  it('renders a MainTemplate', () => {
    expect(res.find('MainTemplate').length).toBe(1);
  });

  it('renders a section', () => {
    expect(res.find('section').length).toBe(2);
  });

  it('renders a h2', () => {
    expect(res.find('h2').length).toBe(2);
  });

  it('renders a div', () => {
    expect(res.find('div').length).toBe(1);
  });

  it('renders a ActionSection', () => {
    expect(res.find('ActionSection').length).toBe(1);
  });

  it('renders a ProfileBox', () => {
    expect(res.find('ProfileBox').length).toBe(1);
  });
});
