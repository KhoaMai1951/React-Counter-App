import React, { Component } from "react";
import { throwStatement } from "@babel/types";

class Counter extends Component {
  //Store any data that a component needs
  state = {
    //Set "count" property equal to "value" property in counters.jsx
    value: this.props.value,
    imgeUrl: "https://picsum.photos/200"
  };

  styles = {
    fontSize: "2rem",
    fontWeight: "bold"
  };

  //Handle button click
  handleIncrement = () => {
    //check clicked on console
    console.log("Increment clicked", this);
    //Increase the count in state by one
    this.setState({ value: this.state.value + 1 });
  };

  render() {
    //output in console screen the properties values
    console.log("props", this.props);
    return (
      <div>
        {/* Area for children properties */}
        {this.props.children}
        {/* Number */}
        <span style={this.styles} className={this.getBadgeClasses()}>
          {this.formatCount()}
        </span>
        {/* Button Add */}
        <button
          onClick={this.handleIncrement}
          className="btn btn-secondary btn-sm"
        >
          Increment
        </button>
        {/* Button Delete */}
        <button
          onClick={this.handleIncrement}
          className="btn btn-danger btn-sm"
        >
          Delete
        </button>
      </div>
    );
  }

  //method to get class = badge
  getBadgeClasses() {
    let classes = "badge m-2 badge-";
    classes += this.state.value === 0 ? "warning" : "primary";
    return classes;
  }

  //method to count
  formatCount() {
    const { value } = this.state;
    return value === 0 ? "Zero" : value;
  }
}

export default Counter;
