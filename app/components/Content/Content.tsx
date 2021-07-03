import React from 'react';
import Search from '../Search';
import './Content.css';

import CardLoading from '../CardLoading';
import Card from '../Card';

const CardsLoading = (length: number) =>
  Array.from({ length }, (_, index) => (
    <CardLoading key={`cardLoading-${index}`} data-test="cp-cardLoading" />
  ));

// const CardComponent = (info: iLink) => <Card key={info.id} {...info} data-test="cp-card" />;

const Content: React.FC = () => {
  return (
    <section className="content">
      <Search onSearch={(val) => console.log('val', val)} data-test="cp-search" />

      <Card
        imgUrl="https://images.gids.tv/spectaculaire-oorlogsfilm-300-zaterdag-op-veronica.jpg?w=730"
        title="test"
      />
      <div className="content-cards">{CardsLoading(9)}</div>
    </section>
  );
};

export default Content;
