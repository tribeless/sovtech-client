import React,{lazy,Suspense} from "react";
import { makeStyles } from '@material-ui/core/styles';
import {useSelector} from "react-redux";
import View from "./ViewSection/View";;
const AsideSection = lazy(() => import('./Aside/AsideSection'));

const useStyles = makeStyles((theme) => ({
    root:{
        flex:1,
        position:'relative',
        display:'flex',
        justifyContent:'flex-start',
        alignItems:'baseline',
        top:'50px',
        backgroundColor:'#eee',
        width:"100%"
    },
    sec:{
        float:'left',
        position:'relative',
        height:'100vh',
        overflow:'auto',
        overflowX:'hidden',
        width:'30%',
        borderRight:'1px solid #b6b1b1'
    },
    view:{
        marginLeft:theme.spacing(4),
        paddingTop:'20px',
        width:'70%'
    },
    issues:{
        padding:'.8rem'
    }
}));


const Main = ()=>{
    const classes = useStyles();
    const data = useSelector(state=>state.personReducer.viewTraits);
    return (
        <div className={classes.root}>
            <section className={classes.sec}>
                <aside className={classes.issues}>
                    <Suspense fallback={<p>Loading...</p>}>
                        <AsideSection />
                    </Suspense>
                </aside>
            </section>
            <section className={classes.view}>
                {
                    Object.keys(data).length === 0 ? (
                        <p>Click on an actor to view</p>
                    ):
                    (
                        <View />
                    )
                }
            </section>
        </div>
    )
}
export default Main;