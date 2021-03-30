import * as actionTypes from "../actionTypes";

const personAction = data=>({
    type:actionTypes.PERSON_ACTION,
    payload:data
});

export const viewTraitsAction = data=>({
    type:actionTypes.VIEW_TRAITS,
    payload:data
});

export const clickIndex = data => ({
    type:actionTypes.CLICK_INDEX,
    payload:data
});
export default personAction;