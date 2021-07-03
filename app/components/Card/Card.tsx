import React, { useState } from 'react';
import Img from '../Img';

import './Card.css';
import iPhoto from '../../interfaces/iPhoto';
import Modal from '../Modal';

type Props = iPhoto;

const Card: React.FC<Props> = ({ title, id, secret, server }) => {
  const [showModal, setShowModal] = useState(false);

  return (
    <div className="card">
      <Img
        alt={title}
        data-test="img"
        onClick={() => setShowModal(true)}
        src={`https://live.staticflickr.com/${server}/${id}_${secret}_q.jpg`}
      />
      <h3 className="card-title">{title}</h3>
      <Modal show={showModal} onClose={() => setShowModal(false)}>
        <div>Modal test</div>
      </Modal>
    </div>
  );
};

export default Card;
