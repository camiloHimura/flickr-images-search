import 'jsdom-global/register';
import React from 'react';
import { shallow } from 'enzyme';

import Card from './Card';
import iPhoto from '../../interfaces/iPhoto';
import { findByTestAttr } from '../../utils/test';

const defaultProps: iPhoto = {
  id: 'idTest',
  farm: 0,
  isfamily: 0,
  isfriend: 0,
  ispublic: 0,
  owner: 'ownerTest',
  secret: 'secretTest',
  server: 'serverTest',
  title: 'titleTest',
};

describe('Card', () => {
  const spySetShowModal = jest.fn();
  // eslint-disable-next-line @typescript-eslint/ban-ts-comment
  // @ts-ignore: Unreachable code error
  React.useState = (src) => [src, spySetShowModal];

  beforeEach(() => {
    spySetShowModal.mockRestore();
  });

  it('Should Img component with the photo config and small resolution "q" ', () => {
    const component = setUp();

    expect(findByTestAttr(component, 'cp-img').prop('src')).toBe(
      `https://live.staticflickr.com/${defaultProps.server}/${defaultProps.id}_${defaultProps.secret}_q.jpg`,
    );
  });

  it('Img onClick should call setShowModal true', () => {
    const component = setUp();

    const onClick = findByTestAttr(component, 'cp-img').prop('onClick') as () => void;
    onClick();

    expect(spySetShowModal).toHaveBeenCalledWith(true);
  });

  it('Should detectionLayer component with the photo config and medium resolution "c"', () => {
    const component = setUp();

    expect(findByTestAttr(component, 'cp-detectionLayer').prop('imgUrl')).toBe(
      `https://live.staticflickr.com/${defaultProps.server}/${defaultProps.id}_${defaultProps.secret}_c.jpg`,
    );
  });

  it('Modal onClose should call setShowModal false', () => {
    const component = setUp();

    const onClick = findByTestAttr(component, 'cp-modal').prop('onClose') as () => void;
    onClick();

    expect(spySetShowModal).toHaveBeenCalledWith(false);
  });
});

const setUp = () => shallow(<Card {...defaultProps} />);
