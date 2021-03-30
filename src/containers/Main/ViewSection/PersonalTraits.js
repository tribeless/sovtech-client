import React from "react";
import {useSelector} from "react-redux";
import {makeStyles} from "@material-ui/core/styles";
import Redo from "../../../components/RecurringTraits"

const useStyles = makeStyles((theme)=>({
    initial:{
        color:"#234FDE",
        fontSize:"14px"
    },
    next:{
        color:"#707070",
        fontSize:"14px"
    },
    parent:{
        display:"flex",
        flexDirection:"row",
        justifyContent:"space-between",
        alignItems:"center",
        flexWrap:"nowrap",
        width:"90%",
        backgroundColor:"white",
        padding:"1.5rem",
        borderRadius:'7px',
        boxShadow:'0 2px 5px #ccc',
        marginTop:'20px',
    },
    child:{
        display:"flex",
        flexDirection:"column",
        justifyContent:"flex-start",
        alignItems:"flex-start",
        flexWrap:"nowrap"
    }
}))

const Traits = ()=>{
    const classes = useStyles();
    const data = useSelector(state=>state.personReducer.viewTraits);
    return (
        <div 
           className={classes.parent}
        >
            <div
                className={classes.child}
            >
                <Redo classes={classes} textOne="Actor Name:" textTwo={data.name} />
                <Redo classes={classes} textOne="Gender:" textTwo={data.gender} />
                <Redo classes={classes} textOne="Height:" textTwo={`${data.height} meters`} />
                <Redo classes={classes} textOne="Birth Year:" textTwo={data.birth_year} />

            </div>

            <div
                className={classes.child}
            >
                <Redo classes={classes} textOne="Mass:" textTwo={`${data.mass}kg`} />
                <Redo classes={classes} textOne="Hair Color:" textTwo={data.hair_color} />
                <Redo classes={classes} textOne="Skin Color:" textTwo={data.skin_color} />
                <Redo classes={classes} textOne="Eye Color:" textTwo={data.eye_color} />
            </div>
        </div>
    )
}

export default Traits;