//1. Import Area
import K from "./K";
//2. function Definition Area
//let Create J Component
let J=(props)=>{
    // Every Function Should Return Something
        return(
            <>
            <div> J {props.data11}</div>
            <K data12={props.data11}></K>
            </>
        )
    
    }


//3. Export Area
//3.1 Default Export
export default J;
//3.2 Named Export