//1. Import Area
import { Component } from "react"
import E from "./E";

//2. Definition Area
// Let Create D Components
export class D extends Component {
    //2.1 Properties

    //2.2 Constructor

    //2.3 methods
    //class Component Must have Render Method

    render() {
        return (
            <>
                <div>D {this.props.data5}</div>
                <E data6={this.props.data5}></E>
            </>
        )
    }
}
//3. Export Area
//3.1  Default Export Area
//3.2 Named Export Area