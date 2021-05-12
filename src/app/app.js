import React, { Component } from "react";
import ChildrenPropsPractice from "./components/ChildrenPropsPractice";
import Nick from "./components/Nick";

export default class App extends Component{
    
    constructor(props, context) {
        super(props)
   
    }

    render(){

        let personObj = {
            name: "Nick",
            age: "24",
            address: "Main"
        }

        return(
            <div>
                
                <Nick personObj={personObj} />

                <ChildrenPropsPractice />
                    {/* the child component will handle the display of these components using {props.children} */}
                    <h3> Hello from children props of Dummy</h3>
                    <h3> Hello from children props of Dummy</h3>
                    <h3> Hello from children props of Dummy</h3>
                <ChildrenPropsPractice />
            
            </div>    
        )
    }
}