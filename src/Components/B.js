//Import Area
import React,{ Component } from "react"
import C from "./C";
//Definition Area
//Lets Create B Components
export class B extends Component {
    //1. Properties

    //2. Constructor

    //3. methods
    //Every class Component Must have render method
    render(){
        return (
                <React.Fragment>
                    <div>{this.props.data3} Jaat</div>
                    <C data4={this.props.data3}></C>
                </React.Fragment>
            );
        };
    }

//Methods
