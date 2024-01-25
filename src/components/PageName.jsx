import { Box, Typography } from '@mui/material'

export default function PageName({ name }) {
    return (
        <Box sx={{ width: '100%' }}>
            <Typography
                color={'primary'}
                fontSize={{
                    lg: 100,
                    md: 85,
                    sm: 60,
                    xs: 60,
                }}
                ml={4}
                fontWeight={'light'}
                letterSpacing={{ sm: 10, md: 3, lg: 8 }}
            >
                {name}
            </Typography>
        </Box>
    )
}
