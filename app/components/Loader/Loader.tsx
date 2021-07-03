import React from 'react';
import './Loader.css';

interface Props {
  className?: string;
}

const Loader: React.FC<Props> = ({ className = '' }) => {
  return (
    <div className={`lds-ring ${className}`}>
      <div></div>
      <div></div>
      <div></div>
      <div></div>
    </div>
  );
};

export default Loader;
