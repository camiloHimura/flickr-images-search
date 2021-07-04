import React, { useRef } from 'react';
import Loader from '../Loader';
import { ImgLoader } from '../../utils/ImgLoader';
import './Img.css';

interface Props {
  alt: string;
  src: string;
  onClick: () => void;
}

const Img: React.FC<Props> = ({ src, alt, onClick }) => {
  const [isLoaded, setIsLoaded] = React.useState(false);
  const [aspectRatio, setAspectRatio] = React.useState('80px');

  const componentIsMounted = useRef(true);
  React.useEffect(() => {
    return () => {
      componentIsMounted.current = false;
    };
  }, []);

  React.useEffect(() => {
    ImgLoader(src, (iImage) => {
      if (componentIsMounted.current) {
        setIsLoaded(true);
        setAspectRatio(`${(iImage.naturalHeight / iImage.naturalWidth) * 100}%`);
      }
    });
  }, [src]);

  return (
    <div className="contImg" style={{ paddingBottom: aspectRatio, width: '100%' }}>
      {!isLoaded && <Loader data-test="loader" className="loader" />}
      <button onClick={onClick} className={isLoaded ? 'loaded' : ''}>
        <img data-test="img" src={src} alt={alt} />
      </button>
    </div>
  );
};

export default Img;
