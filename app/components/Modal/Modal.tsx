import React, { useRef } from 'react';
import { createPortal } from 'react-dom';
import './Modal.css';

import useClickOutside from '../../hooks/useClickOutside';
import Icon from '../Icon';

interface Props {
  show: boolean;
  onClose: () => void;
}

export const Modal: React.FC<Props> = ({ show, onClose, children }) => {
  const elemt = document.getElementById('modal');
  const ref = useRef(null);
  useClickOutside(ref, onClose);

  let Component = (
    <div className="modal">
      <div className="body" ref={ref}>
        <Icon name="cancel" className="close" onClick={onClose} data-test="cp-close" />
        {children}
      </div>
    </div>
  );

  if (!show) {
    Component = null;
  }

  return createPortal(Component, elemt);
};

export default Modal;
