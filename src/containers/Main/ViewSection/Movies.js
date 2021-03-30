import React from "react";
import {
    makeStyles
} from "@material-ui/core/styles";
import {useSelector} from "react-redux";
import Redo from "../../../components/RecurringTraits";
import FILMS_QUERY from "../../../graphql/queries/filmsQuery";
import client from "../../../apollo/client";
import Navigation from "./Navigation";

const useStyles = makeStyles((theme) => ({
    initial: {
        color: "#234FDE",
        fontSize: "14px"
    },
    next: {
        color: "#707070",
        fontSize: "14px"
    },
    parent: {
        display: "flex",
        flexDirection: "row",
        justifyContent: "space-between",
        alignItems: "center",
        flexWrap: "nowrap",
        width: "90%",
        backgroundColor: "white",
        padding: "1.5rem",
        borderRadius: '7px',
        boxShadow: '0 2px 5px #ccc',
        marginTop: '20px',
    },
    child: {
        display: "flex",
        flexDirection: "column",
        justifyContent: "flex-start",
        alignItems: "flex-start",
        flexWrap: "nowrap",
        backgroundColor: "white",
        padding: ".7rem",
        borderRadius: '7px',
        boxShadow: '0 2px 5px #ccc',
    },
    bottombtn:{
        marginTop:theme.spacing(1)
    }
}))

const Movies = ()=>{
    const classes = useStyles();
    const current = useSelector(state=>state.pageReducer.currentFilm);
    const data = useSelector(state=>state.personReducer.viewTraits);
    const [films,setFilms] = React.useState({})
    
    React.useEffect(()=>{
        const variables = {
            url:data.films[current]
        }
        async function fetchFilms(){
            const response = await client.request(FILMS_QUERY,variables);
            if(response){
                setFilms(response.films);
            }
        }
        fetchFilms();
    },[data])//react-hooks/exhaustive-deps
    
    return (
        <div className={classes.parent}>
            <div className={classes.child}>
                <Redo classes={classes} textOne="Title:" textTwo={films.title} />
                <Redo classes={classes} textOne="Producer:" textTwo={films.producer} />
                <Redo classes={classes} textOne="Director:" textTwo={films.director} />
                <Redo classes={classes} textOne="Release Date:" textTwo={films.release_date} />
            </div>
            <Navigation classes={classes} />
        </div>
    )
}

export default Movies;