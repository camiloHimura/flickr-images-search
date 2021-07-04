import React, { useEffect, useState } from 'react';
import './Search.css';

import { iSearch } from '../../interfaces';
import Input from '../Input';
import useDebounce from '../../hooks/useDebounce';

const Search: React.FC<iSearch> = (props) => {
  const { style = {}, onSearch } = props;
  const [searchTerm, setSearchTerm] = useState('');
  const debouncedSearchTerm = useDebounce(searchTerm, 500);

  useEffect(() => {
    if (debouncedSearchTerm) {
      onSearch(debouncedSearchTerm);
    }
  }, [debouncedSearchTerm]);

  return (
    <Input
      style={style}
      type="text"
      placeholder="Search"
      onInput={(event) => setSearchTerm(event.target.value)}
      data-test="cp-input"
    />
  );
};

export default Search;
