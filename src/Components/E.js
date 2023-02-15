//1. Import Area 
import { F } from "./F"

//2. function Defination Area
//Let Create E Component
let E=(props)=>{
// Every Function Should Return Something
    return(
        <>
        <div> E {props.data6}</div>
        <F data7= {props.data6}>F</F>
        </>
    )

}
//3. Export Area
//3.1 Default Export
export default E;
//3.2 Named Export