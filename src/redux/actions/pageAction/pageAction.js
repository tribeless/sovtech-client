import * as actionTypes from "../actionTypes";

const pageAction = (data)=>({
    type:actionTypes.PAGE_ACTION,
    payload:data
});

const increment = ()=>({
    type:actionTypes.INCREMENT
});

const decrement = ()=>({
    type:actionTypes.decrement
});

export {pageAction,increment,decrement};