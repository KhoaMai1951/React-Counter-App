import React, { Component } from "react";
import { throwStatement } from "@babel/types";

class Counter extends Component {
  //Store any data that a component needs
  state = {
    count: 0,
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
    this.setState({ count: this.state.count + 1 });
  };

  render() {
    return (
      <div>
        <span style={this.styles} className={this.getBadgeClasses()}>
          {this.formatCount()}
        </span>
        <button
          onClick={this.handleIncrement}
          className="btn btn-secondary btn-sm"
        >
          Increment
        </button>
      </div>
    );
  }

  //method to get class = badge
  getBadgeClasses() {
    let classes = "badge m-2 badge-";
    classes += this.state.count === 0 ? "warning" : "primary";
    return classes;
  }

  //method
  formatCount() {
    const { count } = this.state;
    return count === 0 ? "Zero" : count;
  }
}

export default Counter;
