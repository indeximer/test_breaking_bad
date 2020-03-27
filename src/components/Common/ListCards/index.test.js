import React from 'react';
import { shallow } from 'enzyme';
import ListCards from './index';

it('renders ListCards without crashing', () => {
  const characters = [
    {
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
    },
    {
      char_id: 51,
      name: 'Group Leader',
      birthday: 'Unknown',
      occupation: [
        'Detective for the APD'
      ],
      img: 'https://vignette.wikia.nocookie.net/breakingbad/images/8/81/Group_Leader_Brown_Shirt_-_Kafkaesque.png/revision/latest?cb=20131025095333',
      status: 'Alive',
      nickname: 'Counselor',
      appearance: [
        2,
        4
      ],
      portrayed: 'Jere Burns',
      category: 'Breaking Bad',
      better_call_saul_appearance: []
    }
  ]
  shallow(<ListCards characters={characters} />);
});