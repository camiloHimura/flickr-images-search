import { useState, useEffect } from 'react';
import * as R from 'ramda';

import { stat } from '../interfaces/iFlickrResponse';
import iQuery from '../interfaces/iQuery';
import instance from '../utils/axios.conf';
import iPhoto from '../interfaces/iPhoto';

interface response {
  data: iPhoto[];
  isLoading: boolean;
  error: null | string;
}

export const useFetch: (params: iQuery) => response = (params) => {
  const [state, setState] = useState({
    data: [],
    isLoading: false,
    error: null,
  });

  const setError = () => setState({ data: [], isLoading: false, error: true });
  const isValidResponse = R.ifElse(
    R.pathEq(['data', 'stat'], stat.ok),
    ({ data }) =>
      setState((prev) => {
        return {
          data: R.concat(prev.data, data.photos.photo),
          isLoading: false,
          error: null,
        };
      }),
    setError,
  );

  const getPhotos = R.pipe(
    R.partial(instance.get, ['/rest']),
    R.otherwise(setError),
    R.andThen(isValidResponse),
  );

  useEffect(() => {
    if (params.page === 1) {
      setState({ data: [], isLoading: true, error: null });
    }

    getPhotos({ params });
  }, [params.text, params.page]);

  return state;
};

export default useFetch;
