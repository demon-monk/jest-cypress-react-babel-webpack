import React from 'react'
import Calculator from '../calculator-display'
import { render } from 'calculator-test-utils';

test('renders calculator',  () => {
    const {container} = render(<Calculator value="0"/>)
    expect(container.firstChild).toMatchSnapshot()
})