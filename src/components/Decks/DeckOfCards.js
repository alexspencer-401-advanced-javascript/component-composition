import React from 'react';
import PropTypes from 'prop-types';
import Deck from './Deck.js';
import { characters, gifs } from '../../content.json';

const DeckOfCards = () => {  

  return (
    <>
      <Deck title={'Characters'} props={characters}/>
      <Deck title={'Gifs'} props={gifs}/>
    </>
  );
};

DeckOfCards.propTypes = {
  title: PropTypes.string.isRequired,
  props: PropTypes.arrayOf(PropTypes.shape({
    _id: PropTypes.string.isRequired,
    name: PropTypes.string.isRequired,
    image: PropTypes.string.isRequired
  })).isRequired,
};

export default DeckOfCards;
