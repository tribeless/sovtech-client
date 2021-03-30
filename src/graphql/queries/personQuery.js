import {gql} from "graphql-request";

const PERSON_QUERY = gql `
    query person($name: String!) {
        person(name: $name) {
            results {
                name
                height
                gender
                mass
                homeworld
                films
                hair_color
                skin_color
                eye_color
                birth_year
            }
        }
    }
`;

export default PERSON_QUERY;