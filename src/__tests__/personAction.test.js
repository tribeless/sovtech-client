import * as actionTypes from "../redux/actions/actionTypes";
import {viewTraitsAction} from "../redux/actions/personAction/personAction";

describe("person action",()=>{
    it("should return view traits object",()=>{
        expect(viewTraitsAction({})).toEqual({
            type:actionTypes.VIEW_TRAITS,
            payload:{}
        });
    });
});