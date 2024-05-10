import 'jsdom-global/register';
import React from 'react';
import { mount } from 'enzyme';
import Img from './Img';
import { findByTestAttr } from '../../utils/test';
import { ImgLoader } from '../../utils/ImgLoader';
jest.mock('../../utils/ImgLoader');

const initialProps = {
  src: '',
  alt: 'test',
  onClick: () => ({}),
};

describe('Img', () => {
  let component;

  it('default value, render Loader', () => {
    component = setUp();
    const loader = findByTestAttr(component, 'loader');
    expect(loader).toHaveLength(1);
  });

  it('state updated after loading the image', () => {
    const spySetIsLoaded = jest.fn();
    // eslint-disable-next-line @typescript-eslint/ban-ts-comment
    // @ts-ignore: Unreachable code error
    React.useState = (src) => [src, spySetIsLoaded];
    React.useRef = () => ({
      current: true,
    });

    jest.mocked(ImgLoader).mockImplementationOnce((_imgUrl, callbak) => {
      callbak(new Image());
    });

    component = setUp({ src: 'test Value' });
    expect(spySetIsLoaded).toHaveBeenCalledWith(true);
  });
});

function setUp(props = {}) {
  return mount(<Img {...initialProps} {...props} />);
}
