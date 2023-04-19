import React from "react";
import Tooltip from "./Tooltip";
import './Tooltip.css';

class App extends React.Component {

  render() {
    return (
      <div className="App">
        <Tooltip position="left" text="Thanks for Hovering! I'm a tooltip" />
      </div>
    );
  }
}

export default App;
