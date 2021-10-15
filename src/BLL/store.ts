import {applyMiddleware, combineReducers, createStore} from "redux";
import {counterReducer} from "./counter-reducer";
import thunk from "redux-thunk";

const rootReducer = combineReducers({
    counter: counterReducer
})

let preloadedState;
const valueAsString = localStorage.getItem('app-state')
if (valueAsString) {
    preloadedState = JSON.parse(valueAsString)
}

export const store = createStore(rootReducer, preloadedState,applyMiddleware(thunk))

store.subscribe(() => {
    localStorage.setItem('app-state', JSON.stringify(store.getState()))
    localStorage.setItem('counterValue', JSON.stringify(store.getState().counter.value))
})

// type AppStoreType = typeof store
export type AppStateType = ReturnType<typeof rootReducer>



