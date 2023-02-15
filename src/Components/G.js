//1. Import Area
import {H} from "./H"
//2. Definition Area
let G=(props)=>{
    // Every Function Should Return Something
        return(
            <>
            <div> G {props.data8}</div>
            <H data9={props.data8}></H>
            </>
        )
    
    }

//3. Export
//3.1 Default Export
export default G;
//3.2 Named Export