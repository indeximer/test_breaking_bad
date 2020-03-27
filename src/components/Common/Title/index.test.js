import React from 'react';
import { shallow } from 'enzyme';
import Title from './index';

it('renders Title without crashing', () => {
  shallow(<Title />);
});