//1. Import Area
import { L } from "./L";
//2. Definition Area
let K = (props) => {
    //Every Function Should Return Something
    return (
        <>
            <div> K {props.data12}</div>
            <L data13={props.data12}></L>
        </>
    )
}
//3. Export Area
//3.1 Default Export Area
export default K;
//3.2 Named Export Area