/* eslint-disable jsx-a11y/click-events-have-key-events */
/* eslint-disable jsx-a11y/no-static-element-interactions */
import React from 'react';
import Img from '../Img';
import * as R from 'ramda';

import './Card.css';
import iPhoto from '../../interfaces/iPhoto';

interface InitialProps {
  onClick: (img: HTMLImageElement) => void;
}

type Props = InitialProps & iPhoto;

const isImg = R.pathEq(['target', 'tagName'], 'IMG');

const Card: React.FC<Props> = ({ title, onClick, id, secret, server }) => {
  const getClidImg: React.MouseEventHandler<HTMLDivElement> = R.when(
    isImg,
    R.useWith(onClick, [R.path(['target'])]),
  );

  return (
    <div className="card" onClick={getClidImg}>
      <Img
        alt={title}
        data-test="img"
        src={`https://live.staticflickr.com/${server}/${id}_${secret}.jpg`}
      />
      <h3 className="card-title">{title}</h3>
    </div>
  );
};

export default Card;
