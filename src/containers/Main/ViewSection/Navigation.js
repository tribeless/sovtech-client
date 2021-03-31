import React from "react";
import {useDispatch,useSelector} from "react-redux";
import {SButton} from "../../../components/Button";
import {decrementFilm,incrementFilm} from "../../../redux/actions/pageAction/pageAction";

const Navigation = ({classes})=>{
    const dispatch = useDispatch();
    const current = useSelector(state=>state.pageReducer.currentFilm);
    const data = useSelector(state=>state.personReducer.viewTraits);

    const handleClick=(stateValue="none")=>{
        if(stateValue==="increment"){
            dispatch(incrementFilm());
        }
        else{
            dispatch(decrementFilm());
        }
        
    }
    return (
            <div className={classes.child}>
                <SButton 
                    type="submit"
                    text="Prev"
                    disabled={current===0}
                    click={()=>handleClick("decrement")}
                    variant="outlined"
                    color="primary"
                />
                <SButton 
                    type="submit"
                    text="Next"
                    disabled={(current+1)>=data.films.length}
                    click={()=>handleClick("increment")}
                    variant="outlined"
                    className={classes.bottombtn}
                    color="primary"
                />
            </div>
    )
}

export default Navigation;