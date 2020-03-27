import React from 'react';
import { shallow } from 'enzyme';
import CharacterList from './index';

it('renders CharacterList without crashing', () => {
  shallow(<CharacterList />);
});