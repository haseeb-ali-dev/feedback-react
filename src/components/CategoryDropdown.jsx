import { memo } from 'react'
import { fetchCategories } from '../api/category'
import useSWR from 'swr'
import { FormControl, InputLabel, MenuItem, Select } from '@mui/material'

const CategoryDropdown = ({ category, handleChange }) => {
    const { data, isLoading } = useSWR('/category', fetchCategories)

    return (
        <FormControl sx={{ minWidth: { sm: 200, md: 300 } }} size='small'>
            {isLoading ? (
                <p>Loading...</p>
            ) : (
                <>
                    <InputLabel id='demo-select-small-label'>Category</InputLabel>
                    <Select
                        labelId='demo-select-small-label'
                        id='demo-select-small'
                        value={category}
                        label='Category'
                        name='category_id'
                        onChange={handleChange}
                    >
                        {data?.categories?.map((category, index) => (
                            <MenuItem value={category?.id} key={index}>
                                {category?.title}
                            </MenuItem>
                        ))}
                    </Select>
                </>
            )}
        </FormControl>
    )
}

export default memo(CategoryDropdown)
