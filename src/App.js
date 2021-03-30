import React from "react";
import {useSelector,useDispatch} from "react-redux";
import {AppHeader} from "./containers/Header/Header";
import client from "./apollo/client";
import PAGE_QUERY from "./graphql/queries/pageQuery";
import {pageAction} from "./redux/actions/pageAction/pageAction";
import Main from "./containers/Main/MainLayout";

const App = ()=>{
    const currentPage = useSelector(state=>state.pageReducer.current);
    const dispatch = useDispatch();
    React.useEffect(()=>{
        const variables = {
            page:currentPage
        }
        async function fetchPage(){
            try{
            const response = await client.request(PAGE_QUERY, variables);
            if (response) {
                dispatch(pageAction(response.page.results))
            }
            }catch(e){
                console.log(e);
            }
        }
        fetchPage()
    },[currentPage]);
    return (
        <>
            <AppHeader />
            <Main />
        </>
    )
}

export default App;