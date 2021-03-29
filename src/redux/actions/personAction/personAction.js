import * as actionTypes from "../actionTypes";

const personAction = data=>({
    type:actionTypes.PERSON_ACTION,
    payload:data
});

export default personAction;