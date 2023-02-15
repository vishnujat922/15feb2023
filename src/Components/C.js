//1. Import Area
import React from "react";
import { D } from "./D";

//2. Function Definition Area
//Every Function Should Return Something
 let C=(props)=>{
    return (
        <>
        <div>C {props.data4}</div>
        <D data5={props.data4}></D>
        </>
    )
}


//3. Method
//Export Area
export default C;