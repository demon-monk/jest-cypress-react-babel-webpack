import React from 'react'
import { render } from 'react-testing-library'
import Calculator from '../calculator-display'

expect.addSnapshotSerializer(createSerializer(emotion))

test('renders calculator',  () => {
    const {container} = render(<Calculator value="0" />)
    expect(container.firstChild).toMatchSnapshot()
})