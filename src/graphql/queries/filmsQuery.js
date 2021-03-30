import {gql} from "graphql-request";

const FILMS_QUERY = gql `
    query films($url: String!) {
        films(url: $url) {
            title
            producer
            director
            release_date
        }
    }
`;

export default FILMS_QUERY;