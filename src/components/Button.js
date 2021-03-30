import React from "react";
import Button from "@material-ui/core/Button";
import {STypography} from "./Typography";
import "../index.css";

export const SButton = ({type,disabled,text,color,variant,className,textVariant,textClassName,size,click})=>{
    return (
        <Button disabled={disabled} type={type} onClick={click} size={size} variant={variant} color={color} className={className}>
            <STypography className={textClassName} text={text} variant={textVariant} />
        </Button>
    )
}