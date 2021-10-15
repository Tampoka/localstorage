import {Dispatch} from "redux";
import {AppStateType} from "./store";

const initialState = {
    value: 0
}

type InitialStateType = typeof initialState

export const counterReducer = (state: InitialStateType = initialState, action: ActionType): InitialStateType => {
    switch (action.type) {
        case "INC-VALUE":
            return {
                ...state, value: state.value + 1
            }
        case "SET-VALUE-LOCAL-STORAGE":
            return {
                ...state, value: action.value
            }

        default:
            return state
    }
}

export const incValueAC = () => ({type: 'INC-VALUE'} as const)
export type IncValueActionType = ReturnType<typeof incValueAC>

export const setValueFromLocalStorageAC = (value: number) => ({type: 'SET-VALUE-LOCAL-STORAGE', value} as const)
export type SetValueFromLocalStorageActionType = ReturnType<typeof setValueFromLocalStorageAC>


//THUNK
export const incValueTC = () => (dispatch: Dispatch,getState:()=>AppStateType) => {
    let currentValue=getState().counter.value
    localStorage.setItem('counterValue', JSON.stringify(currentValue+1))
    dispatch(incValueAC())
}

export const setValueFromLocalStorageTC = () => (dispatch: Dispatch) => {
    let valueAsString=localStorage.getItem('counterValue')
    if(valueAsString) {
        let newValue = JSON.parse(valueAsString)
        dispatch(setValueFromLocalStorageAC(newValue))
    }
}

export type ActionType = IncValueActionType | SetValueFromLocalStorageActionType