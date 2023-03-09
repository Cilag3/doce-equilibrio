import { CssVarsProvider } from '@mui/joy/styles'
import CssBaseline from '@mui/joy/CssBaseline'
import { Home } from './Pages/Home/Home'

export function App() {
  return (
    <CssVarsProvider>
      <CssBaseline />
      <Home />
    </CssVarsProvider>
  )
}
