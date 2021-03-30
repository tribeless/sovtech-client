import * as actionTypes from "../../actions/actionTypes";

const initialState = {
    personReducer:{},
    viewTraits:{},
    clickIndex:0
}

export const personReducer = (state=initialState,action)=>{
    switch(action.type){
        case actionTypes.PERSON_ACTION:
            return {
                ...state,
                personReducer:action.payload
            }

        case actionTypes.VIEW_TRAITS:
            return {
                ...state,
                viewTraits:action.payload
            }
        
        case actionTypes.CLICK_INDEX:
            return {
                ...state,
                clickIndex:action.payload
            }

        default:
            return state;
    }
}