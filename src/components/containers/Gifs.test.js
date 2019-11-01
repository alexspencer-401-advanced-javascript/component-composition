import React from 'react';
import { shallow } from 'enzyme';
import Gifs from './Gifs';


jest.mock('../services/arnoldApi.js', () => ({
  getGifs() {
    return Promise.resolve([
      {
        '_id': '5da23754845fd2cb76d59f10',
        'gifLink': 'https://media.tenor.com/images/7511947a6ae9acb62c9515bfba14b1ec/tenor.gif'
      }]);
  }
}));

describe('gif component', () => {
  it('makes a successful api call and returns gifs', () => {
    const wrapper = shallow(<Gifs />);
    expect(wrapper).toMatchSnapshot();
  });
});
