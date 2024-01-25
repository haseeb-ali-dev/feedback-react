import { Navigate } from 'react-router-dom'
import { createBrowserRouter } from 'react-router-dom'

import { Protected } from './components'

import { Login } from './pages'
import App from './App'

import { getAccessToken } from './utils/helpers'

export const routes = [
    {
        path: '/',
        component: <App />,
        protect: true,
    },
]

export const authRoutes = [
    {
        path: 'login',
        element: getAccessToken() ? <Navigate to='/' /> : <Login />,
    },
    {
        path: '*',
        element: <Navigate to='/' />,
    },
]

const browserRoutes = routes.map(({ path, protect, component }) => ({
    path,
    element: protect ? <Protected>{component}</Protected> : { component },
}))

const router = createBrowserRouter([...browserRoutes, ...authRoutes])

export default router
