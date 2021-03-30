import React from "react";
import Typography from "@material-ui/core/Typography";
import "../index.css";

export const STypography = ({text,variant,className})=>{
    return (
        <Typography variant={variant} className={className}>
            {text}
        </Typography>
    )
}