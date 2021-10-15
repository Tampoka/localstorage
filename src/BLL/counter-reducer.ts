const initialState={
    value:1000
}

type InitialStateType=typeof initialState

export const counterReducer=(state:InitialStateType=initialState,action:any):InitialStateType=>{
    return state
}

export const incValueAC=()=>({type:'INC-VALUE'}as const)
export type IncValuesActionType=ReturnType<typeof incValueAC>