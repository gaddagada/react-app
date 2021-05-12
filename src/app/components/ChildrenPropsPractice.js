import React from "react";

let ChildrenPropsPractice = (props) => {
    
    return(
        <div>
            <h1> Begin ChildrenPropsPractice </h1>
            {props.children} {/* this will handle anything passed inbetween parent component closures  */}
        </div>
    )
}

export default ChildrenPropsPractice;