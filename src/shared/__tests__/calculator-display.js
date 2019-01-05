import React from 'react'
import { render } from 'calculator-test-utils';
import Calculator from '../calculator-display'

test('renders calculator',  () => {
    const {container} = render(<Calculator value="0"/>)
    expect(container.firstChild).toMatchSnapshot()
})