import { useState, useEffect, useRef } from 'react';
import * as R from 'ramda';

import { photos, stat } from '../interfaces/iFlickrResponse';
import iQuery from '../interfaces/iQuery';
import instance from '../utils/axios.conf';

interface response {
  data: null | photos;
  isLoading: boolean;
  error: null | string;
}

export const useFetch: (params: iQuery) => response = (params) => {
  const [state, setState] = useState({
    data: null,
    isLoading: false,
    error: null,
  });

  const setError = () => setState({ data: null, isLoading: false, error: true });

  const isValidResponse = R.ifElse(
    R.pathEq(['data', 'stat'], stat.ok),
    ({ data }) => setState({ data: data.photos, isLoading: false, error: null }),
    setError,
  );

  const getPhotos = R.pipe(
    R.partial(instance.get, ['/rest']),
    R.otherwise(setError),
    R.andThen(isValidResponse),
  );

  useEffect(() => {
    setState({ data: null, isLoading: true, error: null });
    console.log(params);
    getPhotos({ params });
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [params.text]);

  return state;
};

export default useFetch;
