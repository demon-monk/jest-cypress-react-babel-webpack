import React from 'react'
import {render} from 'react-testing-library'
import Calculator from '../calculator'

test('renders calculator', () => {
    const {container} = render(<Calculator/>)
    expect(container.firstChild).toMatchSnapshot()
})