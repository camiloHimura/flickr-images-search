import 'jsdom-global/register';
import React from 'react';
import { mount } from 'enzyme';
import { findByTestAttr } from '../../utils/test';
import DetectionLayer from './DetectionLayer';
import { ImgLoader } from '../../utils/ImgLoader';

const spySetLoading = jest.fn(() => true);

jest.mock('../../utils/ImgLoader');

const initialProps = {
  imgUrl: 'urlTEst',
};

const imreadDelete = jest.fn();
const MatDelete = jest.fn();
const mockCV = {
  imread: jest.fn(() => ({
    delete: imreadDelete,
  })),
  Mat: jest.fn(() => ({
    delete: MatDelete,
  })),
  cvtColor: jest.fn(),
  COLOR_RGB2GRAY: 'ttest',
  Canny: jest.fn(),
  imshow: jest.fn(),
};
// eslint-disable-next-line @typescript-eslint/ban-ts-comment
// @ts-ignore: Unreachable code error
global.cv = mockCV;

describe('Img', () => {
  beforeEach(() => {
    spySetLoading.mockRestore();
    imreadDelete.mockRestore();
    MatDelete.mockRestore();
  });

  it('should render Loader, canvas is hidden', () => {
    // eslint-disable-next-line @typescript-eslint/no-empty-function
    jest.mocked(ImgLoader).mockImplementationOnce(() => {});
    const component = setUp();
    const loader = findByTestAttr(component, 'cp-loader');
    expect(loader).toHaveLength(1);
    expect(component.find('canvas').prop('hidden')).toBe(true);
  });

  it('should call setLoading false after loading the image', () => {
    jest.mocked(ImgLoader).mockImplementationOnce((_imgUrl, callbak) => {
      callbak(new Image());
    });
    const spySetIsLoaded = jest.fn();
    // eslint-disable-next-line @typescript-eslint/ban-ts-comment
    // @ts-ignore: Unreachable code error
    React.useState = (src) => [src, spySetIsLoaded];

    setUp({ src: 'test Value' });

    expect(spySetIsLoaded).toHaveBeenNthCalledWith(1, false);
    expect(imreadDelete).toHaveBeenCalled();
    expect(MatDelete).toHaveBeenCalled();
  });
});

function setUp(props = {}) {
  return mount(<DetectionLayer {...initialProps} {...props} />);
}
