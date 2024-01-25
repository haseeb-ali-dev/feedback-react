export const saveAccessToken = token => localStorage.setItem('access-token', JSON.stringify(token))

export const getAccessToken = () => JSON.parse(localStorage.getItem('access-token'))

export const removeAccessToken = () => localStorage.removeItem('access-token')
