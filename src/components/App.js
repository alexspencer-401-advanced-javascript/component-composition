import React from 'react';
import { characters, gifs } from '../content.json';
import Card from '../components/Card/Card';

export default function App() {
  return (
    <>
      <Card props={characters}/>
      <section>
        {gifs.map(({ _id, image }) => (
          <div key={_id}>
            <header><h3>{_id}</h3></header>
            <figure>
              <img src={image} alt={_id} />
            </figure>
          </div>
        ))}
      </section>
    </>
  );
}
