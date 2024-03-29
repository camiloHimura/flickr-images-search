import React, { useEffect } from 'react';
import { ImgLoader } from '../../utils/ImgLoader';
import Loader from '../Loader';
import './DetectionLayer.css';
interface Props {
  imgUrl: string;
}

declare const cv: any;

const setCanny = (callback) => (iImage: HTMLImageElement) => {
  const mat = cv.imread(iImage);
  const dst = new cv.Mat();
  cv.cvtColor(mat, mat, cv.COLOR_RGB2GRAY, 0);
  cv.Canny(mat, dst, 50, 100, 3, false);
  cv.imshow('canvasOutput', dst);
  mat.delete();
  dst.delete();
  callback();
};

export const DetectionLayer: React.FC<Props> = ({ imgUrl }) => {
  const [isLoading, setLoading] = React.useState(true);

  useEffect(() => {
    ImgLoader(
      imgUrl,
      setCanny(() => setLoading(false)),
    );
  }, [imgUrl]);

  return (
    <div className="detectionLayer">
      {isLoading && <Loader data-test="cp-loader" />}
      <canvas hidden={isLoading} id="canvasOutput"></canvas>
    </div>
  );
};

export default DetectionLayer;
