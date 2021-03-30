import React from "react";
import Grid from "@material-ui/core/Grid";
import {STypography} from "./Typography";

const Redo = ({textOne,textTwo,classes})=>{
    return (
        <Grid 
            container
            direction='row'
            justify="flex-start"
            alignItems="flex-start"
        >
            <Grid item>
                <STypography className={classes.initial} text={textOne} variant="subtitle1" />
            </Grid>
            <Grid item>
                <STypography className={classes.next} text={textTwo} variant="subtitle1" />
            </Grid>
        </Grid>
    )
}

export default Redo;