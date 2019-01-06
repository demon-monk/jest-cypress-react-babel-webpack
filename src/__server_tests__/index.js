import React from 'react'
import ReactDOMServer from 'react-dom/server'
import loadable from 'react-loadable'
import Calculator from '../calculator'

test('renders calculator', async () => {
    await loadable.preloadAll()
    ReactDOMServer.renderToString(<Calculator/>)
    // expect(container.firstChild).toMatchSnapshot()
})