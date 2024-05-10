import { createSlice } from "@reduxjs/toolkit";

const toolkitSlice = createSlice({
    name: 'slice',
    initialState: {
        count: 0,
        todos: ['nikita', 'oleg', 'sonya']
    },
    reducers: {
        increment(state) {
            state.count += 1;
        },
        decrement(state) {
            state.count -= 1;
        },
        addTodos(state, action) {
            state.todos.push(action)
        },
        removeLastTodo(state) {
            state.todos.pop()
        }
    }
})

export default toolkitSlice.reducer
export const {increment, decrement, addTodos, removeLastTodo} = toolkitSlice.actions