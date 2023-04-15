import React from "react";
import Tooltip from "./Tooltip";

class App extends React.Component {
  constructor() {
    super();

    this.state = {
      hoverText: null,
    };
  }
  render() {
    let { hoverText } = this.state;
    const place = "top";
    const text = (message) => {
      return (hoverText = message);
    };
    return (
      <div className="App">
        <Tooltip position={place} text={text("Hovering message")} />
      </div>
    );
  }
}

export default App;
