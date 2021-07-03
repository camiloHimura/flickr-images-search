import React, { useRef } from 'react';
import { createPortal } from 'react-dom';
import './Modal.css';

import useClickOutside from '../../hooks/useClickOutside';
import Button from '../Button/Button';

export const Modal: React.FC<any> = (props) => {
  //const { isSettingsOpen, toggleSettings } = props;
  const elemt = document.getElementById('modal');
  const ref = useRef(null);
  useClickOutside(ref, () => console.log('close outside'));

  const Component = (
    <div className="modal">
      <div className="body" ref={ref}>
        <Button text="X" className="close" onClick={() => console.log('close....')} />
        {props.children}
      </div>
    </div>
  );

  /* if (!isSettingsOpen) {
    Component = null;
  } */

  return createPortal(Component, elemt);
};

export default Modal;
