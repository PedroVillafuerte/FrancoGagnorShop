import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import App from './App.tsx'
import { CssBaseline } from '@mui/material'
import { ThemeProvider } from '@emotion/react'
import theme from './theme.ts'
import { createBrowserRouter, RouterProvider } from 'react-router-dom'
import Home from './pages/Home/Home.tsx'
import Shop from './pages/Shop/Shop.tsx'
import ErrorPage from './pages/ErrorPage/ErrorPage.tsx'
import About from './pages/About/About.tsx'

const router = createBrowserRouter([
  {
    path: '/',
    element: <App />,
    errorElement: <ErrorPage />,
    children: [
      {
        path: '/',
        element: <Home />,
      },
      {
        path: '/shop',
        element: <Shop />,
      },
      {
        path: '/about',
        element: <About />,
      }
    ]
  },
])

createRoot(document.getElementById('root')!).render(
  <StrictMode>
    <ThemeProvider theme={theme}>
      <CssBaseline />
      <RouterProvider router={router} />
    </ThemeProvider>
  </StrictMode>,
)
