import 'jsdom-global/register';
import React from 'react';
import { mount } from 'enzyme';
import Img from './Img';
import { findByTestAttr } from '../../utils/test';

describe('Img', () => {
  let component;

  it('default value, render Loader', () => {
    component = setUp();
    const loader = findByTestAttr(component, 'loader');
    expect(loader).toHaveLength(1);
  });

  it('state updated after loading the image', (done) => {
    const spySetIsLoaded = jest.fn();
    // eslint-disable-next-line @typescript-eslint/ban-ts-comment
    // @ts-ignore: Unreachable code error
    React.useState = (src) => [src, spySetIsLoaded];
    // eslint-disable-next-line @typescript-eslint/ban-ts-comment
    // @ts-ignore: Unreachable code error
    global.Image = class Image {
      constructor() {
        setTimeout(() => {
          // eslint-disable-next-line @typescript-eslint/ban-ts-comment
          // @ts-ignore: Unreachable code error
          this.onload();
          expect(spySetIsLoaded).toHaveBeenCalledWith(true);
          done();
        }, 0);
      }
    };

    component = setUp({ src: 'test Value' });
  });
});

function setUp(props = {}) {
  const initialProps = {
    src: '',
    alt: 'test',
    onClick: () => ({}),
    ...props,
  };

  return mount(<Img {...initialProps} />);
}
