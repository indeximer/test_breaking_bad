import React from 'react';
import { shallow } from 'enzyme';
import Loader from './index';

it('renders Loader without crashing', () => {
  shallow(<Loader />);
});