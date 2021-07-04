import 'jsdom-global/register';
import React from 'react';
import { shallow } from 'enzyme';
import { mocked } from 'ts-jest/utils';

import CardContainer from './CardContainer';
import { findByTestAttr } from '../../utils/test';

const photo = (id: string) => ({
  id,
  farm: 0,
  isfamily: 0,
  isfriend: 0,
  ispublic: 0,
  owner: 'ownerTest',
  secret: 'secretTest',
  server: 'serverTest',
  title: 'titleTest',
});

const onLoadMore = {
  data: Array.from({ length: 10 }, (_, index) => photo(`${index}`)),
  onLoadMore: jest.fn(),
};

beforeEach(() => {
  mocked(onLoadMore.onLoadMore).mockReset();
});

it('Should render loadMore div', () => {
  const component = setUp();
  expect(findByTestAttr(component, 'loadMore')).toHaveLength(1);
});

it('Should render Card component', () => {
  const component = setUp();
  expect(findByTestAttr(component, 'cp-card')).toHaveLength(onLoadMore.data.length);
});

const setUp = () => shallow(<CardContainer {...onLoadMore} />);
