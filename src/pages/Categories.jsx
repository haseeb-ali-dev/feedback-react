import { Box, Divider, List } from '@mui/material'
import useSWR from 'swr'

import { Layout, Switcher, CategoryForm } from '../components'
import { fetchCategories } from '../api/category'

export default function Categories() {
    const { data, isLoading } = useSWR('/category', fetchCategories)

    return (
        <Layout name={'Categories'}>
            <Box
                sx={{
                    backgroundColor: '#ebebeb8c',
                    borderColor: 'grey',
                    height: '85vh',
                    mt: { sm: 0, md: 2 },
                    mr: { sm: 0, md: 4 },
                    px: 2,
                    borderRadius: 4,
                }}
            >
                <Switcher />
                <List
                    sx={{
                        width: '100%',
                        bgcolor: 'background.paper',
                        overflowY: 'auto',
                        maxHeight: '64vh',
                        p: 2,
                        '&::-webkit-scrollbar': {
                            width: '0.5em',
                        },
                        '&::-webkit-scrollbar-track': {
                            boxShadow: 'inset 0 0 6px rgba(0,0,0,0.00)',
                            webkitBoxShadow: 'inset 0 0 6px rgba(0,0,0,0.00)',
                        },
                        '&::-webkit-scrollbar-thumb': {
                            backgroundColor: 'rgba(0,0,0,.1)',
                        },
                    }}
                >
                    {isLoading && <p>Loading...</p>}
                    {data?.categories?.map((row, index) => (
                        <Box
                            key={index}
                            sx={{
                                display: 'inline-flex',
                                px: 4,
                                py: 0.5,
                                m: 1,
                                border: 1,
                                borderColor: 'lightslategray',
                                borderRadius: 2,
                            }}
                        >
                            {row?.title}
                        </Box>
                    ))}
                    <Divider variant='fullWidth' sx={{ my: 2 }} />
                    <CategoryForm />
                </List>
            </Box>
        </Layout>
    )
}
