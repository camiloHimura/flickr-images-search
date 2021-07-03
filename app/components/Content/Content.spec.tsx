import 'jsdom-global/register';
import React from 'react';
import { shallow } from 'enzyme';

import { findByTestAttr } from '../../utils/test';

import Content from './Content';

jest.mock('../CardContainer', () => ({
  __esModule: true,
  default: jest.fn(() => '[CardContainer]'),
}));

it('should render Search component', () => {
  const Component = setUp();
  const Search = findByTestAttr(Component, 'cp-search');

  expect(Search).toHaveLength(1);
});

it('should render cardContainer component', () => {
  const Component = setUp();
  const cardContainer = findByTestAttr(Component, 'cp-cardContainer');

  expect(cardContainer).toHaveLength(1);
});

const setUp = () => {
  return shallow(<Content />);
};
