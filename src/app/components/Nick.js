import React, { Component, useState } from "react";
import CallBackPractice from "./CallBackPractice";

class Nick extends Component {

    constructor(props, context) {
        super(props)

        this.state = {
            username: this.props.personObj.name, //sets state to our props (personObj) that we got from parent (app.js)
            userinput: "Some text"
            
        }
    }

    // this sets state of username to the input value. we pass this as props to the child component CallBackPractice component
    callBackFromChild = (input) => {
        this.setState({
            username: input
        })
    }

    // tracks user input by input keystroke(tracked by onChange property) 
    // the value of the input box is the state: color which gets changed dynamically
    onChangeEvent = (event) => {
        this.setState({
            userinput: event.target.value
        })
    }

    render(){
        
        // use object destructuring to create local variables for personObj properties that was passed down from parent app.js
        const {name, age, address} = this.props.personObj

        return (

            <div>

                <h1> Begin Nick Component </h1>
                <h3> Name is: {name} </h3>
                <h3> Age is: {age} </h3>
                <h3> Address is: {address} </h3>

                {/* onChange is tracking our keystrokes and value is dynamically updating state  */}
                <input type="text" onChange={this.onChangeEvent} value={this.state.userinput} />
                <h3>username {this.state.username}</h3>

                {/* pass property 'callBackFunc' to child so that it can be called FROM child to change state of parent  */}
                <CallBackPractice callBackFunc={this.callBackFromChild} />
                
                <div>{this.state.username}</div>

            </div>
        )
    }
}

export default Nick;