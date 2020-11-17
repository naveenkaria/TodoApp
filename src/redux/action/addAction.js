import { ADD_TODO, DEL_TODO, REM_TODO } from '../constant'


export const addTodoAction = (addTodo) => {
    return {
        type: ADD_TODO,
        data: addTodo
    }
}

export const delTodoAction = (key) => {
    return {
        type: DEL_TODO,
        key: key
    }
}


