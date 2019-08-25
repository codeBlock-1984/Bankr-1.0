import React from 'react';
import expect from 'expect';
import { shallow } from 'enzyme';

import PageSwitcher from '../src/components/PageSwitcher';
import configureStore from '../src/store/configureStore';

const store = configureStore();

describe('PageSwitcher', () => {
  let app;
  let res;

  describe('Client dashboard rendering', () => {
    beforeEach(() => {
      app = shallow(
        <PageSwitcher
          type="user"
          store={store}
        />,
      );

      res = app.dive().dive();
    });

    it('renders successfully', () => {
      expect(res).toBeDefined();
    });

    it('renders a Switch', () => {
      expect(res.find('Switch').length).toBe(1);
    });

    it('renders a Route', () => {
      expect(res.find('Route').length).toBe(3);
    });
  });

  describe('renders staff dashboard', () => {
    beforeEach(() => {
      app = shallow(
        <PageSwitcher
          type="staff"
          store={store}
        />,
      );
    });

    it('renders successfully', () => {
      expect(res).toBeDefined();
    });

    it('renders a Switch', () => {
      expect(res.find('Switch').length).toBe(1);
    });

    it('renders a Route', () => {
      expect(res.find('Route').length).toBe(3);
    });
  });

  describe('renders admin dashboard', () => {
    beforeEach(() => {
      app = shallow(
        <PageSwitcher
          type="admin"
          store={store}
        />,
      );
    });

    it('renders successfully', () => {
      expect(res).toBeDefined();
    });

    it('renders a Switch', () => {
      expect(res.find('Switch').length).toBe(1);
    });

    it('renders a Route', () => {
      expect(res.find('Route').length).toBe(3);
    });
  });
});
