const initialState = {
    value: 1000
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

export type ActionType = IncValueActionType | SetValueFromLocalStorageActionType