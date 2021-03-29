import {gql} from "raphql-request";

const PERSON_QUERY = gql `
    query person($name: String!) {
        person(name: $name) {
            results {
                name
                height
                gender
                mass
                homeworld
            }
        }
    }

`;

export default PERSON_QUERY;