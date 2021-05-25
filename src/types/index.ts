export enum Constants {
    ADD_TODO = 'ADD_TODO',
    TOGGLE_TODO = 'TOGGLE_TODO',
    REMOVE_TODO = 'REMOVE_TODO'
}
export interface ITodo {
    id: number
    text: string
    completed: boolean
}
export interface TodosState {
    todos: ITodo[]
}
