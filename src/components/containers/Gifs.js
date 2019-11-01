import React, { Component } from 'react';
import Deck from '../Decks/Deck';
import { getGifs } from '../services/arnoldApi';

export default class Gif extends Component {
  state = {
    gifs: []
  }

  componentDidMount(){
    return getGifs()
      .then((fetchedGifs) => {
        this.setState({ 
          gifs: fetchedGifs 
        });
      });
  }

  render(){
    return (
      <Deck items={this.state.gifs}/>
    );
  }
}
