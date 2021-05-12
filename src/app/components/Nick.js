import React, { Component, useState } from "react";
import CallBackPractice from "./CallBackPractice";

class Nick extends Component {

    constructor(props, context) {
        super(props)

        this.state = {
            username: this.props.personObj.name,
            color: "Blue"
            
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
            color: event.target.value
        })
    }

    render(){

        const name = this.props.personObj.name;
        const age = this.props.personObj.age;
        const address = this.props.personObj.address;

        return (

            <div>
                <h1> Begin Nick Component </h1>
                <h3> Name is: {name} </h3>
                <h3> Age is: {age} </h3>
                <h3> Address is: {address} </h3>

                <input type="text" onChange={this.onChangeEvent} value={this.state.color} />
                <h3>username {this.state.username}</h3>

                <CallBackPractice callBackFunc={this.callBackFromChild} />
                
                <div>{this.state.username}</div>

            </div>
        )
    }
}

export default Nick;