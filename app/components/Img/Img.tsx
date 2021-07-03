import React from 'react';
import Loader from '../Loader';
import './Img.css';

interface Props {
  src: string;
}

const Img: React.FC<Props> = ({ src }) => {
  const [isLoaded, setIsLoaded] = React.useState(false);
  const [aspectRatio, setAspectRatio] = React.useState('80px');

  React.useEffect(() => {
    const iImage = new Image();
    iImage.src = src;
    iImage.onload = () => {
      setIsLoaded(true);
      setAspectRatio(`${(iImage.naturalHeight / iImage.naturalWidth) * 100}%`);
    };
  }, [src]);

  return (
    <div className="contImg" style={{ paddingBottom: aspectRatio, width: '100%' }}>
      {!isLoaded && <Loader data-test="loader" className="loader" />}
      <img data-test="img" src={src} alt="flickr img" className={isLoaded ? 'loaded' : ''} />
    </div>
  );
};

export default Img;
