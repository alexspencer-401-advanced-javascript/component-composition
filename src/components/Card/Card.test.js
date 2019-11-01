import React from 'react';
import { shallow } from 'enzyme';
import Card from './Card';

describe('Card component', () => {
  it('renders Card', () => {
    const wrapper = shallow(<Card _id={'asdgadsg'} />);
    expect(wrapper).toMatchSnapshot();
  });
});
