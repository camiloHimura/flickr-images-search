import React, { useState } from 'react';
import './Content.css';

import Search from '../Search';
import CardContainer from '../CardContainer';

const Content: React.FC = () => {
  const [searchText, setSearchText] = useState('');

  return (
    <section className="content">
      <Search onSearch={setSearchText} data-test="cp-search" />

      <CardContainer searchText={searchText} data-test="cp-cardContainer" />
    </section>
  );
};

export default Content;
