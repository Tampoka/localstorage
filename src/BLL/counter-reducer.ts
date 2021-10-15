const initialState={
    value:1000
}

type InitialStateType=typeof initialState

export const counterReducer=(state:InitialStateType=initialState,action:IncValuesActionType):InitialStateType=>{
    switch (action.type) {
        case "INC-VALUE":
            return {
                ...state,value: state.value+1
            }
        default:
            return state
    }
}

export const incValueAC=()=>({type:'INC-VALUE'}as const)
export type IncValuesActionType=ReturnType<typeof incValueAC>