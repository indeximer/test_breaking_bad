import React from 'react';
import { shallow } from 'enzyme';
import CharacterSheet from './index';

it('renders CharacterSheet without crashing', () => {
  const character = {
    char_id: 49,
    name: 'Tim Roberts',
    birthday: 'Unknown',
    occupation: [
      'High School Chemistry Teacher',
      'Meth King Pin'
    ],
    img: 'https://vignette.wikia.nocookie.net/breakingbad/images/8/8d/2x02_-_Tim_Roberts.jpg/revision/latest?cb=20110927053954',
    status: 'Alive',
    nickname: 'Detective Roberts',
    appearance: [
      1,
      2,
      3,
      4,
      5
    ],
    portrayed: 'Nigel Gibbs',
    category: 'Breaking Bad',
    better_call_saul_appearance: []
  }
  shallow(<CharacterSheet character={character} />);
});