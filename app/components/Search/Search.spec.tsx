import React from 'react';
import { shallow } from 'enzyme';

import Search from './Search';
import { findByTestAttr } from '../../utils/test';
import iSearch from '../../interfaces/iSearch';

const defaultProps: iSearch = {
  style: {},
  onSearch: jest.fn(),
};
let component;

beforeEach(() => {
  jest.mocked(defaultProps.onSearch).mockRestore();
});

it('Should call SetSearchTerm when the input changes', () => {
  const spySetSearchTerm = jest.fn();
  // eslint-disable-next-line @typescript-eslint/ban-ts-comment
  // @ts-ignore: Unreachable code error
  React.useState = (src) => [src, spySetSearchTerm];

  component = shallow(<Search {...defaultProps} />);
  findByTestAttr(component, 'cp-input').simulate('input', { target: { value: 'as' } });
  expect(spySetSearchTerm).toHaveBeenCalled();
});
