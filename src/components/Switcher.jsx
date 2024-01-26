import { Box, Button } from '@mui/material'
import { memo } from 'react'
import { NavLink, useLocation } from 'react-router-dom'

const Switcher = () => {
    const location = useLocation()

    return (
        <Box sx={{ display: 'flex', gap: 2, py: 2 }}>
            <NavLink to={'/'}>
                <Button
                    size='large'
                    color='primary'
                    variant={location.pathname === '/' ? 'contained' : 'outlined'}
                    sx={{ borderRadius: 10, px: { md: 5 } }}
                >
                    Listings
                </Button>
            </NavLink>
            <NavLink to={'/category'}>
                <Button
                    size='large'
                    color='primary'
                    variant={location.pathname === '/category' ? 'contained' : 'outlined'}
                    sx={{ borderRadius: 10, px: { md: 5 } }}
                >
                    Categories
                </Button>
            </NavLink>
        </Box>
    )
}

export default memo(Switcher)
