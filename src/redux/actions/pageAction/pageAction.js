import * as actionTypes from "../actionTypes";

const pageAction = (data)=>({
    type:actionTypes.PAGE_ACTION,
    payload:data
});

const increment = ()=>({
    type:actionTypes.INCREMENT
});

const decrement = ()=>({
    type:actionTypes.DECREMENT
});

const incrementFilm = ()=>({
    type:actionTypes.INCREMENT_FILM
});

const decrementFilm = ()=>({
    type:actionTypes.DECREMENT_FILM
});

const clear = ()=>({
    type:actionTypes.CLEAR
});

export {
    decrementFilm,
    incrementFilm,
    pageAction,
    increment,
    decrement,
    clear
};