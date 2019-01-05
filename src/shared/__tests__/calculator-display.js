import React from 'react'
import { render } from 'react-testing-library'
import Calculator from '../calculator-display'
import {ThemeProvider} from 'emotion-theming'
import {dark} from '../../themes'

test('renders calculator',  () => {
    const {container} = render(
        <ThemeProvider theme={dark}>
            <Calculator value="0" />
        </ThemeProvider>
    )
    expect(container.firstChild).toMatchSnapshot()
})