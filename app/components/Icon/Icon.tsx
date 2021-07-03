import React from 'react';
import './Icon.css';

interface iProps {
  style?: any;
  name: string;
  color?: string;
  pointer?: boolean;
  onClick: () => void;
  className?: string;
}

const Icon: React.FC<iProps> = React.memo((props) => {
  const { style = {}, name, color = '', pointer = false, onClick, className = '' } = props;

  return (
    // eslint-disable-next-line jsx-a11y/no-noninteractive-element-interactions
    <i
      onClick={onClick}
      onKeyDown={onClick}
      className={`material-icons ${className} ${color} ${pointer ? 'pointer' : ''}`}
      style={style}
      data-test="icon"
      role="img"
    >
      {name}
    </i>
  );
});

Icon.displayName = 'Icon';

export default Icon;
