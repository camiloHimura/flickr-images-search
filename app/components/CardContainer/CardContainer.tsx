import React from 'react';
import * as Utils from '../../utils';
import useFetch from '../../hooks/useFetch';
import './CardContainer.css';

import Card from '../Card';
import CardLoading from '../CardLoading';

interface Props {
  searchText: string;
}

const CardsLoading = (length: number) =>
  Array.from({ length }, (_, index) => (
    <CardLoading key={`cardLoading-${index}`} data-test="cp-cardLoading" />
  ));

const CardContainer: React.FC<Props> = ({ searchText = '"' }) => {
  const { data, isLoading } = useFetch({ text: searchText, page: 0 });

  return (
    <div className="cardContainer">
      {isLoading && CardsLoading(9)}

      {Utils.isNotNil(data) && data.photo.map((pto) => <Card key={pto.id} {...pto} />)}
    </div>
  );
};

export default CardContainer;
