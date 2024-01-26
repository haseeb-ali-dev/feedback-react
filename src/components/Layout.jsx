import * as React from 'react'
import { Box, Grid, Button } from '@mui/material'

import { PageName } from '.'
import { removeAccessToken } from '../utils/helpers'

export default function Layout({ children, name }) {
    const logout = () => {
        removeAccessToken()
        window.location.reload()
    }

    return (
        <Box sx={{ flexGrow: 1 }}>
            <Button sx={{ float: 'right', m: 1 }} variant='outlined' color='info' onClick={logout}>
                Logout
            </Button>
            <Grid container spacing={2} alignItems={'center'}>
                <Grid item xs={12} md={6} lg={4}>
                    <PageName name={name} />
                </Grid>
                <Grid item xs={12} md={6} lg={8}>
                    {children}
                </Grid>
            </Grid>
        </Box>
    )
}
