import {createStore} from "redux";
import throttle from 'lodash.throttle';
import {rootReducer} from "../reducers/rootReducer";
import {loadState, saveState} from "../localStorage";

const persistedState = loadState();
export const store = createStore(
    rootReducer,
    persistedState,
);

store.subscribe(throttle(() => {
    saveState({
        todos: store.getState().todos
    });
}, 1000));

