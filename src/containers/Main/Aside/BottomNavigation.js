import React from "react";
import {useSelector,useDispatch} from "react-redux";
import {SButton} from "../../../components/Button";
import {decrement,increment} from "../../../redux/actions/pageAction/pageAction";

const Navigation = ({classes})=>{
    const dispatch = useDispatch();
    const current = useSelector(state => state.pageReducer.current);

    const handleClick = (stateValue="none") => {
        stateValue==="increment" ? dispatch(increment()) : dispatch(decrement());
    }
    return (
        <div className={classes.btn}>
            <SButton 
                type="submit"
                text="Prev"
                disabled={current===1}
                click={()=>handleClick("decrement")}
                color="primary"
                variant="outlined"
            />
            <SButton 
                type="submit"
                text="Next"
                click={()=>handleClick("increment")}
                color="primary"
                variant="outlined"
            />
        </div>
    )
}

export default Navigation;