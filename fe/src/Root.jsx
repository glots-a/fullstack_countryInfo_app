import React from 'react'
import {BrowserRouter as Router} from 'react-router-dom'
import {Routes, Route} from 'react-router-dom'
import {HomePage, InfoPage, ListPage, NotFound} from './pages'
import {extendTheme, ChakraProvider} from '@chakra-ui/react'

import App from './App'

const theme = extendTheme({
  styles: {
    global: {
      body: {
        backgroundColor: '#f7fafc', // Apply background color here
        margin: 0,
        fontFamily:
          '-apple-system, BlinkMacSystemFont, "Segoe UI", "Roboto", "Oxygen", "Ubuntu", "Cantarell", "Fira Sans", "Droid Sans", "Helvetica Neue", sans-serif',
        WebkitFontSmoothing: 'antialiased',
        MozOsxFontSmoothing: 'grayscale',
      },
    },
  },
})

export const Root = () => (
  <React.StrictMode>
    <Router>
      <ChakraProvider theme={theme}>
        <Routes>
          <Route path='/' element={<App />}>
            <Route index element={<HomePage />} />
            <Route path='countries'>
              <Route index element={<ListPage />} />
              <Route path=':countryCode' element={<InfoPage />} />
            </Route>
            <Route path='*' element={<NotFound />} />
          </Route>
        </Routes>
      </ChakraProvider>
    </Router>
  </React.StrictMode>
)
