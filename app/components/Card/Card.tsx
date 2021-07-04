import React, { useState } from 'react';
import Img from '../Img';

import './Card.css';
import iPhoto from '../../interfaces/iPhoto';
import Modal from '../Modal';
import DetectionLayer from '../DetectionLayer';

const Card: React.FC<iPhoto> = ({ title, id, secret, server }) => {
  const [showModal, setShowModal] = useState(false);

  return (
    <div className="card">
      <Img
        alt={title}
        data-test="cp-img"
        onClick={() => setShowModal(true)}
        src={`https://live.staticflickr.com/${server}/${id}_${secret}_q.jpg`}
      />
      <h3 className="card-title">{title}</h3>
      <Modal show={showModal} onClose={() => setShowModal(false)} data-test="cp-modal">
        <DetectionLayer
          imgUrl={`https://live.staticflickr.com/${server}/${id}_${secret}_c.jpg`}
          data-test="cp-detectionLayer"
        />
      </Modal>
    </div>
  );
};

export default Card;
