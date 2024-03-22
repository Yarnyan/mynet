import { createSlice } from "@reduxjs/toolkit";

const toolkitSlice = createSlice({
    name: 'slice',
    initialState: {
        count: 0,
        todos: ['nikita', 'oleg', 'sonya']
    },
    reducers: {
        
    }
})

export default toolkitSlice.reducer
export const { } = toolkitSlice.actions