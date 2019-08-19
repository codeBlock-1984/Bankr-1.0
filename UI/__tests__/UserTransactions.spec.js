import React from 'react';
import expect from 'expect';
import { shallow } from 'enzyme';
import { Switch, BrowserRouter } from 'react-router-dom';
import { createMemoryHistory } from 'history';

import ConnectedUserTransactions, { UserTransactions, mapStateToProps } from '../src/pages/UserTransactions';
import makeMockStore from './Utils/makeMockStore';

describe('UserTransactions', () => {
  let app;

  const token = 'eyshfishoeiri36i5hkrhkdhjgdj.nsdkkwwiriwyr64793';
  const getUserTransactions = jest.fn();

  const transactions = [
    {
      type: 'debit',
      amount: '500',
      createdon: '05-06-12',
      accountnumber: 1029394857,
    },
    {
      type: 'debit',
      amount: '500',
      createdon: '05-06-12',
      accountnumber: 1029394857,
    },
    {
      type: 'debit',
      amount: '500',
      createdon: '05-06-12',
      accountnumber: 1029394857,
    },
    {
      type: 'debit',
      amount: '500',
      createdon: '05-06-12',
      accountnumber: 1029394857,
    },
    {
      type: 'debit',
      amount: '500',
      createdon: '05-06-12',
      accountnumber: 1029394857,
    },
    {
      type: 'debit',
      amount: '500',
      createdon: '05-06-12',
      accountnumber: 1029394857,
    },
  ];

  const store = makeMockStore({
    transaction: {
      userTransactions: transactions,
    },
    auth: {
      user: {
        token,
      },
    },
  });

  const state = {
    transaction: {
      userTransactions: transactions,
    },
    auth: {
      user: {
        token,
      },
    },
  };

  beforeEach(() => {
    app = shallow(
      <UserTransactions
        transactions={transactions}
        getUserTransactions={getUserTransactions}
        token={token}
      />,
    );
  });

  // it('componentDidUpdate should be called on update', () => {
  //   const component = shallow(
  //     <UserTransactions
  //       socialLogin={login}
  //       location={location}
  //       auth={auth}
  //       history={history}
  //     />,
  //   );
  //   const componentDidUpdate = jest.spyOn(component.instance(), 'componentDidUpdate');
  //   component.instance().forceUpdate();
  //   component.update();
  //   component.instance().componentDidUpdate();
  //   expect(componentDidUpdate).toBeDefined();
  // });

  it('renders successfully', () => {
    expect(app).toBeDefined();
  });

  it('renders the connected component successfully', () => {
    const connectedComp = shallow(
      <ConnectedUserTransactions store={store} />,
    );
    expect(connectedComp).toBeDefined();
  });

  it('renders a MainTemplate component', () => {
    expect(app.find('MainTemplate').length).toBe(1);
  });

  it('renders a section component', () => {
    expect(app.find('section').length).toBe(1);
  });

  it('renders a h2 component', () => {
    expect(app.find('h2').length).toBe(1);
  });

  it('renders a div component', () => {
    expect(app.find('div').length).toBe(1);
  });

  it('has a mapStateToProps function', () => {
    expect(mapStateToProps(state)).toEqual({ transactions, token });
  });
});
