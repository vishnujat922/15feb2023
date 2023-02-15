//1. Import Area 
import { Component } from "react";
import G from "./G";

//2. Definition Area
export class F extends Component {
    //2.1 Properties

    //2.2 Constructor

    //2.3 method
    //Every class Component Must have render Method
    render() {
        return (
            <>
            <div>F {this.props.data7}</div>
            <G data8={this.props.data7}></G>
            </>
        )
    }
}

//3. Export Area