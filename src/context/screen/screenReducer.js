import { SET_TODO_ID } from "../types"

const handlers = {
    [SET_TODO_ID]: (state, { id }) => ({
        ...state,
        todoId: id
    }),
    DEFAULT: state => state
}

export const screenReducer = (state, action) => {
    const handler = handlers[action.type] || handlers.DEFAULT

    return handler(state, action)
}