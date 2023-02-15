//1. Import Area

import { Component } from "react";
import J from "./J";

//2. Definition Area
//lets create H class Component
export class I extends Component{
    //2.1 properties 

    //2.2 Constructor

    //2.3methods
    //Every class Component Must Have render methods
    render(){
        return(
            <>
            <div>I {this.props.data10}</div>
            <J data11={this.props.data10}></J>
            </>
        )
    }
}

//3. Export Area
//3.1 default Export
//3.2 Named Export