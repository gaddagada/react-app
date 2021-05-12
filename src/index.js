import React from "react";
import {render} from "react-dom";
import App from "./app/app";

render(
    <App />, //picking up the application that would be built in react
    document.getElementById("root") //boot strapping the application on root container

)