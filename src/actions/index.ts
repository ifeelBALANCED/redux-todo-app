import {Constants, ITodo} from "../types";

export const addTodo = (text: string) => ({type: Constants.ADD_TODO, text})
export const toggleTodo = (idx: number) => ({type: Constants.TOGGLE_TODO, idx})
export const removeTodo = (todo: ITodo) => ({type: Constants.REMOVE_TODO, todo})
