import React from 'react';
import './Button.css';

interface Props {
  className: string;
  text: string;
  onClick: () => void;
}

const Button: React.FC<Props> = ({ className = '', text = '', onClick }) => {
  return (
    <button data-test="button" className={className} onClick={onClick}>
      {text}
    </button>
  );
};

export default Button;
