import React from 'react'
import CssBaseline from '@mui/material/CssBaseline'
import { createTheme, ThemeProvider } from '@mui/material/styles'
import ReactDOM from 'react-dom/client'
import { RouterProvider } from 'react-router-dom'
import { Toaster } from 'react-hot-toast'

import App from './App.jsx'
import './index.css'
import router from './router'
import { TOASTR_CONFIG } from './utils/constants.js'

const defaultTheme = createTheme()

ReactDOM.createRoot(document.getElementById('root')).render(
    <React.StrictMode>
        <Toaster toastOptions={TOASTR_CONFIG} />
        <ThemeProvider theme={defaultTheme}>
            <CssBaseline />
            <RouterProvider router={router}>
                <App />
            </RouterProvider>
        </ThemeProvider>
    </React.StrictMode>
)
