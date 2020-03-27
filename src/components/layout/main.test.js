import React from 'react';
import { shallow } from 'enzyme';
import Main from './main';

it('renders Main without crashing', () => {
  shallow(<Main />);
});