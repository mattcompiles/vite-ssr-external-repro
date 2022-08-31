import ReactDOMServer from 'react-dom/server'
import React from 'react'
import apacTheme from 'braid-design-system/apacTheme'
import { BraidProvider, Box } from 'braid-design-system'

console.log(
  ReactDOMServer.renderToString(
    <BraidProvider theme={apacTheme}>
      <Box />
    </BraidProvider>
  )
)