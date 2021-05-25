import {AnyAction} from "redux";
import {Constants, TodosState} from "../types";

const initialState: TodosState = {
    todos: []
}

export const todosReducer = (state = initialState, action: AnyAction) => {
    switch (action.type) {
        case Constants.ADD_TODO:
            return {
                todos: [...state.todos, {text: action.text, completed: false}]
            }
        case Constants.TOGGLE_TODO:
            return {
                todos: state.todos.map((t, idx) =>
                    idx === action.idx ? {...t, completed: !t.completed} : t
                )
            }
        case Constants.REMOVE_TODO:
            return {...state, todos:  [...state.todos.filter(todo => todo !== action.todo)]}
        default:
            return state
    }
}
