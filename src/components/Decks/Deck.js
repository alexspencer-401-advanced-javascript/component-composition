import React from 'react';
import PropTypes from 'prop-types';
import Card from '../Card/Card';

const Deck = ({ props, title }) => {
  // eslint-disable-next-line react/prop-types
  const propElements = props.map(prop => (
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
  title: PropTypes.string.isRequired,
  props: PropTypes.arrayOf(PropTypes.shape({
    _id: PropTypes.string.isRequired,
    name: PropTypes.string.isRequired,
    image: PropTypes.string.isRequired
  })).isRequired,
};

export default Deck;

{/* <section>
        {gifs.map(({ _id, image }) => (
          <div key={_id}>
            <header><h3>{_id}</h3></header>
            <figure>
              <img src={image} alt={_id} />
            </figure>
          </div>
        ))}
      </section> */}
