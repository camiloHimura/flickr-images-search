import 'jsdom-global/register';
import React from 'react';
import { shallow } from 'enzyme';
import { mocked } from 'ts-jest/utils';

import Card from './CardContainer';

const defaultProps = {
  imgUrl: 'urlTest',
  title: 'title test',
  onClick: jest.fn(),
};

beforeEach(() => {
  mocked(defaultProps.onClick).mockReset();
});

it('Should call onClick prop if the target is an IMG element', () => {
  const component = setUp();
  const newImage = new Image();
  component.simulate('click', { target: newImage });
  expect(defaultProps.onClick).toHaveBeenNthCalledWith(1, newImage);
});

it('Should not call onClick if the target is different to an IMG element', () => {
  const component = setUp();

  ['div', 'p', 'span'].forEach((tagname) => {
    component.simulate('click', { target: document.createElement(tagname) });
    expect(defaultProps.onClick).not.toHaveBeenCalled();
  });
});

const setUp = () => shallow(<Card {...defaultProps} />);
