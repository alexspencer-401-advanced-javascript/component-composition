import React from 'react';
import propTypes from 'prop-types';

const Card = ({ props }) => {

  // eslint-disable-next-line react/prop-types
  const propElements = props.map(prop => (
    <div key={prop._id}>
      <header><h3>{prop.name}</h3></header>
      <figure>
        <img src={prop.image} alt={prop.name} />
      </figure>
      <p>{prop.name} has {prop._id}</p>
    </div>
  ));

  return (
    <>
      <header>
        <h2>Characters</h2>
      </header>
      <section>
        {propElements}
      </section>
    </>
  );
};

Card.propTypes = {
  props: propTypes.arrayOf(propTypes.shape({
    _id: propTypes.string.isRequired,
    name: propTypes.string.isRequired,
    image: propTypes.string.isRequired
  })).isRequired
};

export default Card;
