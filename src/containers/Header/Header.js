import React from "react";
import {useDispatch} from "react-redux";
import {Formik,Form as FormikForm} from "formik";
import Grid from "@material-ui/core/Grid";
import AppBar from "@material-ui/core/AppBar";
import Toolbar from "@material-ui/core/Toolbar";
import { makeStyles } from '@material-ui/core/styles';
import {SButton} from "../../components/Button";
import {STypography} from "../../components/Typography";
import {Input} from "../../components/Input";
import PERSON_QUERY from "../../graphql/queries/personQuery";
import client from "../../apollo/client";
import {viewTraitsAction} from "../../redux/actions/personAction/personAction";
import {clear,errors} from "../../redux/actions/pageAction/pageAction";
import "../../index.css";
import graphQlErrors from "../../components/errors";

const useStyles = makeStyles((theme) => ({
    root: {
        flexGrow: 1,
    },
    logo: {
        marginRight: theme.spacing(2),
    },
    btntext: {
        fontSize:'.8rem'
    },
    spread:{
        display:'flex',
        justifyContent:'space-between',
        alignItems:'center',
        width:'100vw',
        direction:"row"
    }
}));

export const AppHeader = ()=>{
    const classes = useStyles();
    const dispatch = useDispatch();

    return (
        <div className={classes.root}>
            <AppBar position="fixed">
                <Toolbar>
                    <div className={classes.spread}>
                        <STypography 
                            text="Star Wars"
                            variant="body1"
                            className="header-text"
                        />
                        <Grid 
                            container
                            justify="flex-end"
                            alignItems="center"
                            direction="row"
                            wrap="nowrap"
                        >
                            <Formik
                                initialValues={{
                                    actor:""
                                }}

                                onSubmit={async (values)=>{
                                    const variables = {
                                        name:values.actor
                                    }
                                    try{
                                        const response = await client.request(PERSON_QUERY,variables);
                                        if(response){
                                            dispatch(clear());
                                            dispatch(viewTraitsAction(response.person.results[0]));
                                        }
                                    }
                                    catch(e){
                                        dispatch(errors(graphQlErrors(e),true));
                                    }
                                }}
                            >
                                {({setFieldValue,values})=>(
                                    <FormikForm>
                                        <Input 
                                            placeholder="search for actors"
                                            fieldName="actor"
                                            type="text"
                                            value={values.actor}
                                            change={(e)=>{
                                                setFieldValue("actor",e.target.value,"false")
                                            }}
                                        />

                                        <button
                                            className="top-btn"
                                            type="submit"
                                        >Submit</button>
                                    </FormikForm>
                                )}
                            </Formik>
                        </Grid>
                    </div>
                </Toolbar>
            </AppBar>
        </div>
    )
}