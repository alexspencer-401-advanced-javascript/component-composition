import React, { Component } from 'react';
import DeckOfCards from '../Decks/DeckOfCards';
import { getCharacters } from '../services/arnoldApi';

export default class Character extends Component {
  state = {
    characters: []
  }

  componentDidMount(){
    return getCharacters()
      .then((fetchedChars) => {
        this.setState({ 
          characters: fetchedChars 
        });
      });
  }

  render(){

    return (
      <DeckOfCards props={this.state.characters}/>
    );
  }
}
