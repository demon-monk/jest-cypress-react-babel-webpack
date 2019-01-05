import React from 'react'
import {render} from 'react-testing-library'
import loadable from 'react-loadable'
import Calculator from '../calculator'

test('renders calculator', async () => {
    await loadable.preloadAll()
    const {container, debug} = render(<Calculator/>)
    expect(container.firstChild).toMatchSnapshot()
})