import React from 'react';
import { shallow } from 'enzyme';

import Search from './Search';
import { iSearch } from '../../interfaces';
import { findByTestAttr } from '../../utils/test';
import { mocked } from 'ts-jest/utils';

const defaultProps: iSearch = {
  style: {},
  onSearch: jest.fn(),
};
let component;

beforeEach(() => {
  mocked(defaultProps.onSearch).mockRestore();
});

it('Should not call onSearch, input value length is not equal or greater than 3', () => {
  component = shallow(<Search {...defaultProps} />);
  findByTestAttr(component, 'cp-input').simulate('input', { target: { value: 'as' } });
  expect(defaultProps.onSearch).not.toHaveBeenCalled();
});

it('Should call onSearch, input value is "" ', () => {
  component = shallow(<Search {...defaultProps} />);
  findByTestAttr(component, 'cp-input').simulate('input', { target: { value: '' } });
  expect(defaultProps.onSearch).toHaveBeenCalled();
});

it('Should call onSearch, input value length is equal or greater than 3', () => {
  component = shallow(<Search {...defaultProps} />);
  findByTestAttr(component, 'cp-input').simulate('input', { target: { value: 'tes' } });
  expect(defaultProps.onSearch).toHaveBeenCalled();
});
