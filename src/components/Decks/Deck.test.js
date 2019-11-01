import React from 'react';
import { shallow } from 'enzyme';
import Deck from './Deck';

describe('Deck component', () => {
  it('renders Deck', () => {
    const wrapper = shallow(<Deck items={[
      {
        '_id': '5da237699734fdcb7bef8f51',
        'name': 'Arnold Shortman',
        'image': 'https://vignette.wikia.nocookie.net/heyarnold/images/f/f5/Arnold.png/revision/latest?cb=20181027162333'
      }
    ]} />);
    expect(wrapper).toMatchSnapshot();
  });
});
