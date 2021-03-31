import React from "react";
import shortid from "shortid";
import Grid from "@material-ui/core/Grid";
import {useSelector,useDispatch} from "react-redux";
import {makeStyles} from "@material-ui/core/styles";
import {viewTraitsAction,clickIndex} from "../../../redux/actions/personAction/personAction";
import {clear} from "../../../redux/actions/pageAction/pageAction";
import Navigation from "./BottomNavigation";

const useStyles = makeStyles((theme)=>({
    root:{
        flex:1,
    },
    bottomContent:{
        display:'flex',
        justifyContent:'space-between',
        alignItems:'center',
        marginTop:theme.spacing(2)
    },
    btn:{
        width:"100%",
        display:'flex',
        justifyContent:'space-between',
        alignItems:'center',
        flexDirection:"row",
        marginTop:"20px"
    },
    content:{
        backgroundColor:'#fff',
        borderRadius:'7px',
        boxShadow:'0 2px 5px #ccc',
        marginTop:'20px',
        width:'100%'
    },
    para:{
        margin:'0px',
        fontSize:"15px",
        fontWeight:"600"
    },
    para2:{
        color: "#707070",
        fontSize:"12px"
    },
    span:{
        color:"#234FDE",
        fontSize:"12px"
    }
}));

 const AsideSection = ()=>{
    const data = useSelector(state=>state.pageReducer.pageReducer);
    const page = useSelector(state=>state.pageReducer.current);
    const classes = useStyles();
    const dispatch = useDispatch();
    const handleClick = (data,index) =>{
        dispatch(clear());
        dispatch(viewTraitsAction(data));
        dispatch(clickIndex(index));
    }
    const convertMass=data=>{
        return data.length > 0 && ( data.indexOf(".") !== -1 ? parseFloat(data): parseInt(data, 10));
    }

    return (
        <div className="classes.root" >
            <Grid 
                container 
                spacing={2} 
                direction="column"
                justify="space-between"
                alignItems="flex-start"
                >
                    <p style={{fontSize:"1.2rem"}}>{`Page ${page}`}</p>
                {
                    (data && data != null) && data.map((item,index)=>(
                        <Grid onClick={()=>handleClick(item,index)} key={shortid.generate()} item xs={12} className={classes.content} >
                            <div className={classes.bottomContent}>
                                <span className={classes.para}>{item.name.toUpperCase()}</span>
                                <span className={classes.para2}>{item.gender}</span>
                            </div>
                            <div style={{marginBottom:"16px"}} className={classes.bottomContent}>
                            <span className={classes.span}>{`Height:${item.height}meters`}</span>
                            <span className={classes.span}>{`Mass:${convertMass(item.mass)}kg`}</span>
                            </div>
                        </Grid>
                    ))
                }
                <Navigation classes={classes} />        
            </Grid>
        </div>
     )
    }

export default AsideSection;