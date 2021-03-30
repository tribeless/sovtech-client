import React from "react";
import Grid from "@material-ui/core/Grid";
import PersonalTraits from "./PersonalTraits";
import MoviesSection from "./Movies";
import "../../../index.css";

const View = ()=>{
    return (
        <>
            <Grid
                container
                justify="space-between"
                alignItems="flex-start"
                direction="column"
                wrap="nowrap"
            >
                <p style={{fontSize:"1.2rem"}}>Personal Traits</p>
                <PersonalTraits />
                <p style={{marginTop:"30px",fontSize:"1.2rem"}}>Movies Featured</p>
                <MoviesSection />
            </Grid>
        </>
    )
}

export default View;