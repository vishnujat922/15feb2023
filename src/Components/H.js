//1. Import Area

import { Component } from "react";
import { I } from "./I"
//2. Definition Area
//lets create H class Component
export class H extends Component{
    //2.1 properties 

    //2.2 Constructor

    //2.3methods
    //Every class Component Must Have render methods
    render(){
        return(
            <>
            <div>H {this.props.data9}</div>
            <I data10={this.props.data9}></I>
            </>
        )
    }
}

//3. Export Area
//3.1 default Export
//3.2 Named Export