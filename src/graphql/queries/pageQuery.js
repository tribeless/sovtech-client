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
            }
        }
    }
`;

export default PAGE_QUERY;