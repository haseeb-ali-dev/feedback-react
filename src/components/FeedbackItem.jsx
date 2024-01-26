import { memo } from 'react'
import { ListItem, ListItemAvatar, Typography, Avatar, Divider, Box, Grid } from '@mui/material'

const FeedbackItem = ({ row, divider = true }) => {
    return (
        <>
            <ListItem alignItems='flex-start'>
                <ListItemAvatar>
                    <Avatar alt={row?.user?.name} />
                </ListItemAvatar>
                <Grid container spacing={2} alignItems={'flex-start'}>
                    <Grid item xs={12} sm={12} md={4} lg={2}>
                        <Box sx={{ display: 'flex', justifyContent: 'space-between', flexDirection: 'column', pt: 1 }}>
                            <Typography variant='body2'>{row?.user?.name}</Typography>
                            <Typography variant='caption' color={'gray'} fontStyle={'italic'}>
                                {new Date(row?.created_at).toDateString()}
                            </Typography>
                        </Box>
                    </Grid>
                    <Grid item xs={12} sm={12} md={8} lg={10}>
                        <Box sx={{ display: 'flex', justifyContent: 'space-between', flexDirection: 'column' }}>
                            <Typography variant='span'>
                                {row?.title}
                                <Typography
                                    color={'GrayText'}
                                    display={'inline'}
                                >{` - ${row?.category?.title}`}</Typography>
                            </Typography>
                            <Typography variant='subtitle2' color={'slategray'}>
                                {row?.description ?? '--'}
                            </Typography>
                        </Box>
                    </Grid>
                </Grid>
            </ListItem>
            {divider && <Divider variant='middle' />}
        </>
    )
}

export default memo(FeedbackItem)
