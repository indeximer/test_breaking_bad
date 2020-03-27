import React from 'react';
import { shallow } from 'enzyme';
import Navbar from './index';

it('renders Navbar without crashing', () => {
  shallow(<Navbar />);
});