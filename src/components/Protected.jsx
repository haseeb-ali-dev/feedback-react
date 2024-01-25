/* eslint-disable react/prop-types */
import { Navigate } from 'react-router-dom'

import { getAccessToken } from '../utils/helpers'

const Protected = ({ children }) => {
    const token = getAccessToken()

    return token ? children : <Navigate to='/log-in' />
}

export default Protected
