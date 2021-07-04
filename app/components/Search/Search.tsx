import React, { useEffect, useState } from 'react';
import * as R from 'ramda';
import './Search.css';

import Input from '../Input';
import useDebounce from '../../hooks/useDebounce';
import iSearch from '../../interfaces/iSearch';

const Search: React.FC<iSearch> = (props) => {
  const { style = {}, onSearch } = props;
  const [searchTerm, setSearchTerm] = useState('');
  const debouncedSearchTerm = useDebounce(searchTerm, 500);

  const inputHandler = R.pipe(R.path(['target', 'value']), setSearchTerm);

  useEffect(() => {
    onSearch(debouncedSearchTerm);
  }, [debouncedSearchTerm]);

  return (
    <Input
      type="text"
      style={style}
      placeholder="Search"
      onInput={inputHandler}
      data-test="cp-input"
    />
  );
};

export default Search;
