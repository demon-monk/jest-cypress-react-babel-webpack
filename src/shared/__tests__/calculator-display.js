import React from 'react'
import Calculator from '../calculator-display'
import { renderWithProviders } from '../../../test/calculator-test-utils';

test('renders calculator',  () => {
    const {container} = renderWithProviders(<Calculator value="0"/>)
    expect(container.firstChild).toMatchSnapshot()
})