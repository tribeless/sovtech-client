import {gql} from "graphql-request";

const PAGE_QUERY = gql `
    query page($page: Int!) {
        page(page: $page) {
            next
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

export default PAGE_QUERY;