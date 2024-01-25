import { Divider, Box, Button, Link, TextField, Typography } from '@mui/material'

export default function SignIn() {
    const handleSubmit = event => {
        event.preventDefault()
        const data = new FormData(event.currentTarget)
        console.log({
            email: data.get('email'),
            password: data.get('password'),
        })
    }

    return (
        <Box
            sx={{
                marginTop: 14,
                display: 'flex',
                flexDirection: 'column',
                alignItems: 'center',
                border: '1px solid lightgray',
                padding: '20px',
            }}
        >
            <Typography component='h1' variant='h5' color={'primary'}>
                Feedback App
            </Typography>
            <Divider variant='fullWidth' />
            <Box component='form' onSubmit={handleSubmit} noValidate sx={{ mt: 1 }}>
                <TextField
                    variant='standard'
                    margin='normal'
                    required
                    fullWidth
                    id='email'
                    label='Email Address'
                    name='email'
                    autoComplete='email'
                    autoFocus
                />
                <TextField
                    variant='standard'
                    margin='normal'
                    required
                    fullWidth
                    name='password'
                    label='Password'
                    type='password'
                    id='password'
                    autoComplete='current-password'
                />
                <Button type='submit' fullWidth variant='outlined' sx={{ mt: 3, mb: 2 }}>
                    Log In
                </Button>
                <Link href='#' variant='body2' sx={{ textAlign: 'center', display: 'block' }}>
                    {"Don't have an account? Sign Up"}
                </Link>
            </Box>
        </Box>
    )
}
