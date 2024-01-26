import { memo } from 'react'
import { ListItem, ListItemAvatar, Typography, Avatar, Divider, Box, Grid, ListItemText } from '@mui/material'

const FeedbackItem = ({ row }) => {
    return (
        <ListItem alignItems='flex-start'>
            <ListItemAvatar>
                <Avatar alt={row?.user?.name} />
            </ListItemAvatar>
            <ListItemText
                primary={
                    <Box sx={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', mt: 0.5 }}>
                        <Typography variant='body2'>{row?.user?.name}</Typography>
                        <Typography variant='subtitle2' color={'gray'}>
                            {row?.created_at}
                        </Typography>
                    </Box>
                }
                secondary={row?.content}
            />
        </ListItem>
    )
}

export default memo(FeedbackItem)
