import React from 'react'
import Container from '@mui/material/Container'
import CssBaseline from '@mui/material/CssBaseline'
import { createTheme, ThemeProvider } from '@mui/material/styles'
import ReactDOM from 'react-dom/client'
import { RouterProvider } from 'react-router-dom'


import App from './App.jsx'
import './index.css'
import router from './router'

const defaultTheme = createTheme()

ReactDOM.createRoot(document.getElementById('root')).render(
    <React.StrictMode>
        <ThemeProvider theme={defaultTheme}>
            <Container component='main' maxWidth='xs'>
                <CssBaseline />
                <RouterProvider router={router}>
                    <App />
                </RouterProvider>
            </Container>
        </ThemeProvider>
    </React.StrictMode>
)
