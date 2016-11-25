import * as React from "react";
import * as ReactDOM from "react-dom";

export class HelloComponent extends React.Component<any, any> {
    render(){
        return <h2>Hello from {this.props.compiler} and {this.props.freamwork}</h2>
    }
}