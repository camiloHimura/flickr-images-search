import React, { useEffect } from 'react';

//https://usehooks.com/page/3
export default (
  ref: React.MutableRefObject<HTMLInputElement>,
  handler: () => void,
): (() => void) => {
  useEffect(() => {
    const listener = (event) => {
      if (!ref.current || ref.current.contains(event.target)) {
        return;
      }

      handler();
    };

    window.addEventListener('mousedown', listener);
    window.addEventListener('touchstart', listener);

    return () => {
      window.removeEventListener('mousedown', listener);
      window.removeEventListener('touchstart', listener);
    };
  }, [ref, handler]);

  return handler;
};
