import {GraphQLClient} from "graphql-request";

const client = new GraphQLClient(process.env.REACT_APP_BACKEND_URL, {
    headers: {}
});

export default client;