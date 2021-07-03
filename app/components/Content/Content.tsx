import React from 'react';
import Search from '../Search';
import './Content.css';

import CardLoading from '../CardLoading';
/* 
import Card from '../Card'; 
*/

const CardsLoading = (length: number) =>
  Array.from({ length }, (_, index) => (
    <CardLoading key={`cardLoading-${index}`} data-test="cp-cardLoading" />
  ));
/* 
const CardComponent = (info: iLink) => <Card key={info.id} {...info} data-test="cp-card" />;
*/

const Content: React.FC = () => {
  return (
    <section className="Content">
      <Search onSearch={(val) => console.log('val', val)} data-test="cp-search" />
      {CardsLoading(10)}
    </section>
  );
};

export default Content;
