import React from 'react'
import Enzyme, { shallow } from 'enzyme'
import Adapter from 'enzyme-adapter-react-16'

import NotFound from '../notfound'

Enzyme.configure({ adapter: new Adapter() })

describe('NotFound', () => {
  it('renders without crashing', () => {
    shallow(<NotFound />)
  })
})
