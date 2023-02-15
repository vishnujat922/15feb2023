//1. Import Area 
//2. Definition Area

import { Component } from "react";
import N from "./N";
//lets create H class Component
export class M extends Component{
    //2.1 properties 

    //2.2 Constructor

    //2.3methods
    //Every class Component Must Have render methods
    render(){
        return(
            <>
            <div>M {this.props.data14}</div>
            <N data15={this.props.data14}></N>
            </>
        )
    }
}
//3. Export Area