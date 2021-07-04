export const ImgLoader = (src: string, callback: (img: HTMLImageElement) => any): void => {
  const iImage = new Image();
  iImage.src = src;
  iImage.crossOrigin = 'Anonymous';
  iImage.onload = () => callback(iImage);
};
