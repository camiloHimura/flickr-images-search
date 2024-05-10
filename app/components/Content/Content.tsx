import React, { useState } from 'react';
import './Content.css';

import Search from '../Search';
import CardContainer from '../CardContainer';
import useFetch from '../../hooks/useFetch';
import CardLoading from '../CardLoading';

const CardsLoading = (length: number) =>
  Array.from({ length }, (_, index) => (
    <CardLoading key={`cardLoading-${index}`} data-test="cp-cardLoading" />
  ));

const Content: React.FC = () => {
  const [params, setParams] = useState({ text: '', page: 1 });
  const { data, isLoading } = useFetch(params);
  const isLoadingOrEmpty = isLoading || data.length === 0;

  return (
    <section className="content">
      <Search onSearch={(text) => setParams({ page: 1, text })} data-test="cp-search" />

      <div className="content-cards">
        {isLoadingOrEmpty && CardsLoading(9)}
        {!isLoading && (
          <CardContainer
            data={data}
            data-test="cp-cardContainer"
            onLoadMore={() => setParams((params) => ({ ...params, page: params.page + 1 }))}
          />
        )}
      </div>
    </section>
  );
};

export default Content;
