import React from 'react';
import Enzyme, { shallow } from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';

import TeamContainer from '../team-container';

Enzyme.configure({ adapter: new Adapter() });

describe('TeamContainer', () => {
  it('Team renders without crashing', () => {
    const welcome = shallow(<TeamContainer />);
  });
});
