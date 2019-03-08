import React, { Component } from "react";
import { getTextTemplate } from "../constants";

class Input extends Component {
  handleBlur = (name, e) => {
    console.log(e.target.value);
    console.log(getTextTemplate(name));
  };
  render() {
    const { text, name } = this.props;
    return (
      <div className="inputWrap">
        <label htmlFor={name}>{text}</label>
        <input
          type="text"
          name={name}
          onBlur={(e) => this.handleBlur(name, e)}
        />
      </div>
    );
  }
}

export default Input;
