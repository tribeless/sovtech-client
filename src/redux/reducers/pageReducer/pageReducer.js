import * as actionTypes from "../../actions/actionTypes";

const initialState = {
    current:1,
    currentFilm:0,
    pageReducer:[],
    message:"",
    open:false
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

        case actionTypes.INCREMENT_FILM:
            return {
                ...state,
                currentFilm:state.currentFilm + 1
            }

        case actionTypes.DECREMENT_FILM:
            return {
                ...state,
                currentFilm:state.currentFilm -1
            }
        
        case actionTypes.CLEAR:
            return {
                ...state,
                currentFilm:0
            }

        case actionTypes.ERRORS:
            return {
                ...state,
                message:action.message,
                open:action.open
            }

        default:
            return state;
    }
}