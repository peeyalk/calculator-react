import React from "react";
import Display from "./Display";
import ButtonPanel from "./ButtonPanel";
import calculate from "../logic/calculate";
import "./App.css";
import KeyboardEventHandler from "react-keyboard-event-handler";

export default class App extends React.Component {
  state = {
    total: null,
    next: null,
    operation: null,
  };

  handleClick = buttonName => {
    this.setState(calculate(this.state, buttonName));
  };

  handleKeyPress = (key, event) => {
    //console.log(event.key);

    const validKey = [
      "c",
      "+",
      "+/-",
      "%",
      "/",
      "x",
      "*",
      "-",
      "=",
      "1",
      "2",
      "3",
      "4",
      "5",
      "6",
      "7",
      "8",
      "9",
      "0",
      ".",
      "=",
      "Enter",
    ];

    try {
      if (validKey.indexOf(event.key) !== -1) {
        if (event.key === "c") {
          this.handleClick("AC");
        } else if (event.key === "/") {
          this.handleClick("÷");
        } else if (event.key === "*") {
          this.handleClick("x");
        } else if (event.key === "Enter") {
          this.handleClick("=");
        } else {
          this.handleClick(event.key);
        }
      }
    } catch (error) {}
  };

  render() {
    return (
      <React.Fragment>
        <div className="component-app">
          <Display value={this.state.next || this.state.total || "0"} />
          <KeyboardEventHandler
            handleKeys={["all"]}
            onKeyEvent={this.handleKeyPress}
          />
          <ButtonPanel clickHandler={this.handleClick} />
          <a
            className="github-fork-ribbon left-top"
            href="https://github.com/ahfarmer/calculator"
            title="Fork me on GitHub"
          >
            Fork me on GitHub
          </a>
        </div>
      </React.Fragment>
    );
  }
}
