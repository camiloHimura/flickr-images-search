import React from 'react';
import * as R from 'ramda';
import './Search.css';

import { iSearch } from '../../interfaces';
import Input from '../Input';
import * as Utils from '../../utils';

const Search: React.FC<iSearch> = (props) => {
  const { style = {}, onSearch } = props;

  const searchWhenValGreaterThree = R.when(
    R.either(Utils.inputGte(3), ({ target }) => target.value === ''),
    R.useWith(onSearch, [Utils.getInputValue]),
  );

  return (
    <Input
      style={style}
      type="text"
      placeholder="Search"
      onInput={searchWhenValGreaterThree}
      data-test="cp-input"
    />
  );
};

export default Search;
