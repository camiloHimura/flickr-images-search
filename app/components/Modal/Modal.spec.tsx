import 'jsdom-global/register';
import React from 'react';
import { shallow } from 'enzyme';
import { findByTestAttr } from '../../utils/test';
import Modal from './Modal';

const initialProps = {
  show: false,
  onClose: jest.fn(),
};

describe('Modal', () => {
  beforeEach(() => {
    jest.mocked(initialProps.onClose).mockRestore();
  });

  it('should render null', () => {
    const component = setUp();
    expect(component.find('modal')).toHaveLength(0);
  });

  it('should call onClose', () => {
    const component = setUp({ show: true });
    const onClick = findByTestAttr(component, 'cp-close').prop('onClick') as () => void;
    onClick();
    expect(initialProps.onClose).toHaveBeenCalled();
  });
});

const setUp = (props = {}) => {
  const container = document.createElement('div');
  container.id = 'modal';
  document.body.appendChild(container);

  return shallow(<Modal {...initialProps} {...props} />);
};
