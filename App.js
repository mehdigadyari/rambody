/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow strict-local
 */

import React from 'react'
import { StatusBar } from 'react-native'
import { ThemeProvider } from 'styled-components'
import Navigation from './src/navigation'
import theme from './src/theme/theme'

const App = () => {
  return (
    <ThemeProvider theme={theme}>
      <StatusBar backgroundColor="#131a21" />
      <Navigation />
    </ThemeProvider>
  )
}

export default App
