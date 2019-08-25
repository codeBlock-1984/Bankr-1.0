import React from 'react';
import expect from 'expect';
import { shallow } from 'enzyme';
import { BrowserRouter as Router } from 'react-router-dom';

import configureStore from '../src/store/configureStore';
import Form, { FormLink } from '../src/components/FormLink';

const store = configureStore();

describe('FormLink', () => {
  let app;
  let res;
  let comp;

  beforeEach(() => {
    app = shallow(
      <Router>
        <FormLink
          page="/"
          title="hello"
          dispatch={jest.fn()}
        />
      </Router>,
    );
    res = app.dive().dive().dive();
    comp = app.instance();
  });

  it('has a handleClick', () => {
    const inst = app.dive().dive().dive().instance();
    inst.handleClick();
  });

  it('renders successfully', () => {
    expect(comp).toBeDefined();
  });

  it('renders a Link', () => {
    expect(res.find('Link').length).toBe(1);
  });
});
