import React from 'react';
import PropTypes from 'prop-types';
import Deck from './Deck.js';

const DeckOfCards = ({ items }) => {  

  return (
    <>
      <Deck title={'Characters'} items={items}/>
      <Deck title={'Gifs'} items={items}/>
    </>
  );
};

DeckOfCards.propTypes = {
  items: PropTypes.arrayOf(PropTypes.shape({
    _id: PropTypes.string,
    name: PropTypes.string,
    image: PropTypes.string,
    gifLink: PropTypes.string
  })),
};

export default DeckOfCards;
