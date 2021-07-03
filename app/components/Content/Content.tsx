import React from 'react';
import './Content.css';
import { iContent, iLink, iTag } from '../../interfaces';

import CardLoading from '../CardLoading';
import Card from '../Card';

export enum eContent {
  tagListClass = 'tagList',
  tagListPlaceHolder = 'Filter By Tags',
}


/* const CardComponent = (info: iLink) => <Card key={info.id} {...info} data-test="cp-card" />;
const CardsLoading = (length: number) =>
  Array.from({ length }, (_, index) => (
    <CardLoading key={`cardLoading-${index}`} data-test="cp-cardLoading" />
  )); */

const Content: React.FC<iContent> = () => {
  return (
    <section className="Content">
      Content ..... 
    </section>
  );
};

export default Content;
