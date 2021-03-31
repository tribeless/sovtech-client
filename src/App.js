import React from "react";
import {useSelector,useDispatch} from "react-redux";
import Snackbar from '@material-ui/core/Snackbar';
import MuiAlert from '@material-ui/lab/Alert';
import {AppHeader} from "./containers/Header/Header";
import client from "./apollo/client";
import PAGE_QUERY from "./graphql/queries/pageQuery";
import {pageAction,errors} from "./redux/actions/pageAction/pageAction";
import Main from "./containers/Main/MainLayout";
import graphQlErrors from "./components/errors";
import "./index.css";

function Alert(props) {
  return <MuiAlert elevation={6} variant="filled" {...props} />;
}

const App = ()=>{
    const currentPage = useSelector(state=>state.pageReducer.current);
    const data = useSelector(state=>state.pageReducer);
    const {message,open} = data;
    const dispatch = useDispatch();
    React.useEffect(()=>{
        const variables = {
            page:currentPage
        }
        async function fetchPage(){
            try{
            const response = await client.request(PAGE_QUERY, variables);
            if (response) {
                dispatch(pageAction(response.page.results));
            }
            }catch(e){
                dispatch(errors(graphQlErrors(e),true));
            }
        }
        fetchPage()
    },[currentPage]);

    const handleClose = () => {
        dispatch(errors("",false));
    };
    return (
        <>
            <AppHeader />
            <Snackbar open={open} autoHideDuration={6000} onClose={handleClose}>
                <Alert onClose={handleClose} severity="error">
                    {message}
                </Alert>
            </Snackbar>
            <Main />
        </>
    )
}

export default App;