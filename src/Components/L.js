//1. Import Area

import  React, { Component } from "react";
import { M } from "./M"

//2. Definition Area
//let create class Component
export class L extends Component {
    //2.1 Properties

    //2.2 Constructor

    //2.3 Method
    //Every Class Component Must Have Rander method
    render() {
        return (
            <React.Fragment>
                <div> L {this.props.data13}</div>
                <M data14={this.props.data13}></M>
            </React.Fragment>
        );
    };
}

//3. Export Area
//3.1 Default Export Area
//3.2 Named Export Area