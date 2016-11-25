import * as React from "react";
import * as ReactDOM from "react-dom";

import {HelloComponent} from "./components/Hello";

ReactDOM.render(
    <HelloComponent compiler="TypeScript" freamwork="React"/>,
    document.getElementById('example')
)