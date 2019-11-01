import React from 'react';
import PropTypes from 'prop-types';
import Deck from './Deck.js';

const DeckOfCards = ({ props }) => {  

  return (
    <>
      <Deck title={'Characters'} props={props}/>
      <Deck title={'Gifs'} props={props}/>
    </>
  );
};

DeckOfCards.propTypes = {
  props: PropTypes.arrayOf(PropTypes.shape({
    _id: PropTypes.string,
    name: PropTypes.string,
    image: PropTypes.string,
    gifLink: PropTypes.string
  })),
};

export default DeckOfCards;
