import React from "react";
import Fields from "./Fields";
import Essay from "./Essay";

import PropTypes from "prop-types";

require("../styles/App.scss");

const App = () => (
  <div className="matchArea">
    <div className="inner">
      <Fields />
      <Essay />
    </div>
  </div>
);

App.propTypes = {};

export default App;
