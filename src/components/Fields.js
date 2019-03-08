import React, { Component } from "react";
import Input from "./Input";
import { FIELDS } from "../constants";
import { connect } from "react-redux";

function mapStateToProps(state) {
  return {};
}

class Fields extends Component {
  render() {
    const fieldsArr = Object.entries(FIELDS);
    return (
      <div className="questionContainer">
        <h3>About Me</h3>
        {fieldsArr.map((field, i) => (
          <Input text={field[1]} name={field[0]} key={i} />
        ))}
      </div>
    );
  }
}

export default connect(mapStateToProps)(Fields);
