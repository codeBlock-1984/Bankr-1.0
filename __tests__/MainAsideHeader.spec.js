import React from 'react';
import expect from 'expect';
import { shallow, mount } from 'enzyme';

import MainAsideHead, { MainAsideHeader } from '../src/components/MainAsideHeader';
import configureStore from '../src/store/configureStore';

const store = configureStore();

describe('MainAsideHeader', () => {
  let app;
  let res;

  beforeEach(() => {
    app = shallow(
      <MainAsideHead
        userName="Helen Troy"
        imgUrl="https://avatar.cc/img=3"
        type="client"

        store={store}
      />,
    );

    res = app.dive().dive();
  });

  it('renders successfully', () => {
    expect(app).toBeDefined();
  });

  it('has a handleImageClick method', () => {
    // console.log(inst);
    // // thhskkf
  });

  it('renders a header', () => {
    expect(res.find('header').length).toBe(1);
  });

  it('renders a div', () => {
    expect(res.find('div').length).toBe(4);
  });

  it('renders a form', () => {
    expect(res.find('form').length).toBe(1);
  });

  it('renders a input', () => {
    expect(res.find('input').length).toBe(1);
  });

  it('renders a button', () => {
    expect(res.find('button').length).toBe(1);
  });

  it('renders a i', () => {
    expect(res.find('i').length).toBe(2);
  });

  it('renders a span', () => {
    expect(res.find('span').length).toBe(1);
  });

  it('renders an img', () => {
    expect(res.find('img').length).toBe(1);
  });

  it('handles image click', () => {
    const image = res.find('img');
    expect(image.length).toBe(1);
    image.simulate('click');
  });

  it('renders a p', () => {
    expect(res.find('p').length).toBe(1);
  });
});
