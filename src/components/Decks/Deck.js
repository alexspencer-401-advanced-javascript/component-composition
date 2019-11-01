import React from 'react';
import PropTypes from 'prop-types';
import Card from '../Card/Card';

const Deck = ({ items, title }) => {
  const propElements = items.map(prop => (
    <Card key={prop._id} {...prop} />
  ));

  return (
    <>
      <header>
        <h2>{title}</h2>
      </header>
      <ul>
        {propElements}
      </ul>
    </>
  );
};

Deck.propTypes = {
  title: PropTypes.string,
  items: PropTypes.arrayOf(PropTypes.shape({
    _id: PropTypes.string,
    name: PropTypes.string,
    image: PropTypes.string,
    gifLink: PropTypes.string
  })),
};

export default Deck;
