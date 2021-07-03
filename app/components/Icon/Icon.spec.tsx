import 'jsdom-global/register';
import React from 'react';
import Icon from './Icon';
import { shallow } from 'enzyme';

import { findByTestAttr } from '../../utils/test';
const initialProps = { name: 'test', onClick: jest.fn(), pointer: true };

it('should calle prop onclick', () => {
  const Component = shallow(<Icon {...initialProps} />);
  findByTestAttr(Component, 'icon').simulate('click');
  expect(initialProps.onClick).toHaveBeenCalledTimes(1);
});

it('onclick include "pointer" class', () => {
  const Component = shallow(<Icon {...initialProps} />);
  expect(findByTestAttr(Component, 'icon').prop('className')).toContain('pointer');
});
