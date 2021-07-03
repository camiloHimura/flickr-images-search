import React from 'react';
import './Content.css';

import useFetch from '../../hooks/useFetch';
import * as Utils from '../../utils';

import Card from '../Card';
import Search from '../Search';
import CardLoading from '../CardLoading';

const CardsLoading = (length: number) =>
  Array.from({ length }, (_, index) => (
    <CardLoading key={`cardLoading-${index}`} data-test="cp-cardLoading" />
  ));

const Content: React.FC = () => {
  const { data, isLoading } = useFetch({ text: '""', page: 0 });
  console.log('====> data', data);
  console.log('isLoading', isLoading);

  return (
    <section className="content">
      <Search onSearch={(val) => console.log('val', val)} data-test="cp-search" />

      <div className="content-cards">
        {isLoading && CardsLoading(9)}

        {Utils.isNotNil(data) &&
          data.photo.map((pto) => (
            <Card key={pto.id} onClick={(data) => console.log('clicking img', data)} {...pto} />
          ))}
      </div>
    </section>
  );
};

export default Content;
