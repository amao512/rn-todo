import { ADD_TODO, REMOVE_TODO, CHANGE_TODO } from "./constants"

export const todoReducer = (state, action) => {
    switch(action.type){
        case ADD_TODO:
            return {
                ...state,
                todos: [...state.todos, action.todo]
            }
        case REMOVE_TODO:
            return {
                ...state,
                todos: state.todos.filter(todo => todo.id !== action.id)
            }
        case CHANGE_TODO:
            return {
                ...state,
                todos: state.todos.map(todo => {
                    if(todo.id === action.id){
                        todo.title = action.title
                    }
                    
                    return todo
                })
            }
        default:
            return state
    }
}