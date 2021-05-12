import React from "react";

let CallBackPractice = (props) => {

    return(

        <div>

            <h1> Begin CallBackPractice </h1>
            <button onClick={ ()=> props.callBackFunc("User name is now YYY") }> Send back to parent! </button>

        </div>

    )
}

export default CallBackPractice;