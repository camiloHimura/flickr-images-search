import React, { RefAttributes } from 'react';
import './Input.css';

interface iProps {
  style?: any;
  className?: string;
  'data-test'?: string;
  placeholder?: string;
  type?: 'search' | 'text';
  onInput?: ((data: unknown) => void);
  onChange?: ((data: unknown) => void);
  onFocus?: ((data: unknown) => void);
}

const Input: React.FC<iProps & RefAttributes<HTMLInputElement>> = React.forwardRef((props, ref) => {
  const {
    style = {},
    type = 'text',
    onInput,
    onChange,
    onFocus,
    className = '',
    placeholder = '',
  } = props;
  return (
    <input
      ref={ref}
      type={type}
      style={style}
      onInput={onInput}
      onFocus={onFocus}
      onChange={onChange}
      className={className}
      placeholder={placeholder}
      data-test={props['data-test']}
    />
  );
});

Input.displayName = 'Input';

export default Input;
