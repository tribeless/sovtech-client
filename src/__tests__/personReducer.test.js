import * as actionTypes from "../redux/actions/actionTypes";
import {personReducer} from "../redux/reducers/personReducer/personReducer";

describe("person reducer",()=>{
    it("should return initial state",()=>{
        expect(personReducer(undefined,{})).toEqual({
            personReducer:{},
            viewTraits:{},
            clickIndex:0
        });
    });

    it("should return personal traits",()=>{
        expect(personReducer({
            viewTraits:{}
        },{
            type:actionTypes.VIEW_TRAITS,
            payload:{
                name: "Anakin Skywalker",
                height: 188,
                gender: "male",
                mass : "84",
                films:[],
                homeworld : "http://swapi.dev/api/planets/1/",
                hair_color : "blond",
                skin_color : "fair",
                eye_color : "blue",
                birth_year : "41.9BBY"
            }
        })).toEqual({
            viewTraits:{
                name: "Anakin Skywalker",
                height: 188,
                gender: "male",
                mass : "84",
                films:[],
                homeworld : "http://swapi.dev/api/planets/1/",
                hair_color : "blond",
                skin_color : "fair",
                eye_color : "blue",
                birth_year : "41.9BBY"
            }
        });
    });
});