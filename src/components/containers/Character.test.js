import React from 'react';
import { shallow } from 'enzyme';
import Character from './Character';


jest.mock('../services/arnoldApi.js', () => ({
  getCharacters() {
    return Promise.resolve([
      {
        '_id': '5da237699734fdcb7bef8f56',
        'name': 'Miles Shortman',
        'image': 'https://vignette.wikia.nocookie.net/heyarnold/images/2/2e/Miles.jpg/revision/latest/scale-to-width-down/243?cb=20101115140639'
      }]);
  }
}));

describe('image component', () => {
  it('makes a successful api call and returns characters', () => {
    const wrapper = shallow(<Character />);
    expect(wrapper).toMatchSnapshot();
  });
});
