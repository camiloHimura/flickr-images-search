import React from 'react';
import { shallow } from 'enzyme';
import Button from './Button';

describe('Button render', () => {
  const text = 'test text';
  const spyClick = jest.fn();
  const Component = shallow(<Button text={text} onClick={spyClick} className="" />);

  it('should call onClick prop', () => {
    Component.find('button').simulate('click');
    expect(spyClick).toHaveBeenCalled();
  });
});
