import * as React from 'react'
import Box from '@mui/material/Box'
import Grid from '@mui/material/Grid'

import { PageName } from '.'

export default function Layout({ children, name }) {
    return (
        <Box sx={{ flexGrow: 1 }}>
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
