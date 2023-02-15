//Import Area
import { B } from './B';

//Functional Deinition Area
//Lets Create A Components
let A = props => {
    let data1='data1';
    console.log(props);
    return (<>
        <div>{data1} {props.Children} {props.name}</div>
        <B data3={props.name}></B>
    </>)
}

//3. Export Area
//3.1 Default Export
export default A;
//3.2 Named Export

