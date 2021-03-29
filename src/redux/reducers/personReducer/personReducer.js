import * as actionTypes from "../../actions/actionTypes";

const initialState = {
    personReducer:{}
}

export const personReducer = (state=initialState,action)=>{
    switch(action.type){
        case actionTypes.PERSON_ACTION:
            return {
                ...state,
                personReducer:action.payload
            }
        
        default:
            return state;
    }
}