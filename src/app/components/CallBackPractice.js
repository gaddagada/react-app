import React from "react";

let CallBackPractice = (props) => {

    return(

        <div>

            <h1> Begin CallBackPractice </h1>

            {/* on button click we will call function 'callBackFunc={this.callBackFromChild}' which is present in Nick component */}
            {/* this is one way that we can CHANGE the state of parent FROM a child call */}
            <button onClick={ ()=> props.callBackFunc("User name is now YYY") }> Send back to parent! </button>
            
        </div>
    )
}

export default CallBackPractice;