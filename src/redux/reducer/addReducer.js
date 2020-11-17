import { ADD_TODO, DEL_TODO } from '../constant'

const initialState = {
    addTodo: []
}

const addTodoReducer = (state = initialState, action) => {
    switch (action.type) {
        case ADD_TODO:
            return {
                ...state,
                addTodo: state.addTodo.concat({
                    key: Math.random(),
                    data: action.data
                })
            }
            break;

        case DEL_TODO:
            return {
                ...state,
                addTodo: state.addTodo.filter((item) => (
                    item.key !== action.key)
                )
            }
            break;

        default:
            return state;
    }

}

export default addTodoReducer