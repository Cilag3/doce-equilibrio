import * as React from 'react'
import { createTheme, CssBaseline } from '@mui/material'
import { ThemeProvider } from '@mui/system'
import { Home } from './Pages/Home/Home'

const customTheme = createTheme()

export function App() {
  return (
    <ThemeProvider theme={customTheme}>
      <CssBaseline />
      <Home />
    </ThemeProvider>
  )
}
