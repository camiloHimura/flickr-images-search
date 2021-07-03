import 'jsdom-global/register';
import React from 'react';
import { mount } from 'enzyme';
import { findByTestAttr } from '../../utils/test';
import DetectionLayer from '.';

const spySetLoading = jest.fn(() => true);

const cv = jest.fn();

// eslint-disable-next-line @typescript-eslint/ban-ts-comment
//@ts-ignore
Object.defineProperty(window, 'cv', {
  configurable: true,
  enumerable: true,
  value: cv,
  writable: true,
});

const initialProps = {
  imgUrl: 'urlTEst',
};

describe('Img', () => {
  beforeEach(() => {
    spySetLoading.mockRestore();
  });

  it('default value, render Loader, canvas is hidden', () => {
    const component = setUp();
    const loader = findByTestAttr(component, 'cp-loader');
    expect(loader).toHaveLength(1);
    expect(component.find('canvas').prop('hidden')).toBe(true);
  });

  it('should call setLoading false after loading the image', (done) => {
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
          expect(spySetLoading).toHaveBeenCalledWith(false);
          done();
        }, 0);
      }
    };

    setUp({ src: 'test Value' });
  });
});

function setUp(props = {}) {
  return mount(<DetectionLayer {...initialProps} {...props} />);
}
