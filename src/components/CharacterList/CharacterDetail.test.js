import React from 'react';
import { shallow } from 'enzyme';
import CharacterDetail from './CharacterDetail';

it('renders CharacterDetail without crashing', () => {
  shallow(<CharacterDetail />);
});