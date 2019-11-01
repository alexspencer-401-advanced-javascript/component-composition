import React from 'react';
import { shallow } from 'enzyme';
import DeckOfCards from './DeckOfCards';

describe('DeckOfCards component', () => {
  it('renders DeckOfCards', () => {
    const wrapper = shallow(<DeckOfCards />);
    expect(wrapper).toMatchSnapshot();
  });
});
