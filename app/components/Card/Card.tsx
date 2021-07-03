import React from 'react';
import Img from '../Img';
import './Card.css';

interface Props {
  title: string;
  imgUrl: string;
}

const Card: React.FC<Props> = ({ imgUrl, title }) => {
  return (
    <div className="card">
      <Img data-test="img" src={imgUrl} />
      <h3 className="card-title">{title}</h3>
    </div>
  );
};

export default Card;
