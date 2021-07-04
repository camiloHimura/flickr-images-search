import React, { Fragment, useLayoutEffect, useRef } from 'react';
import './CardContainer.css';

import Card from '../Card';
import useIntersectionObserver from '../../hooks/useOnScreen';
import iPhoto from '../../interfaces/iPhoto';

interface Props {
  data: iPhoto[];
  onLoadMore: () => void;
}

const CardContainer: React.FC<Props> = ({ data, onLoadMore }) => {
  const ref = useRef();
  const loadMore = useIntersectionObserver(ref, { threshold: 0 }, false);

  useLayoutEffect(() => {
    if (loadMore) {
      onLoadMore();
    }
  }, [loadMore]);

  return (
    <Fragment>
      {data?.map((pto) => (
        <Card key={pto.id} {...pto} data-test="cp-card" />
      ))}

      <div className="loadMore" ref={ref} data-test="loadMore"></div>
    </Fragment>
  );
};

export default CardContainer;
