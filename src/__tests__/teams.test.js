import React from 'react';
import Enzyme, { shallow } from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';

import Teams from '../teams';

Enzyme.configure({ adapter: new Adapter() });

describe('Teams', () => {
  it('Teams renders without crashing', () => {
    const welcome = shallow(<Teams />);
  });
});