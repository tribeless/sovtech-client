import * as actionTypes from "../../actions/actionTypes";

const initialState = {
    current:1,
    pageReducer:{}
}

export const pageReducer = (state=initialState,action)=>{
    switch(action.type){
        case actionTypes.PAGE_ACTION:
            return {
                ...state,
                pageReducer:action.payload
            }
        
        case actionTypes.INCREMENT:
            return {
                ...state,
                current:state.current+1
            }

        case actionTypes.DECREMENT:
            return {
                ...state,
                current:state.current-1
            }

        default:
            return state;
    }
}