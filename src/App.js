// @flow
import React from "react";
import Button from "@material/react-button";
import SoundContainer from "./components/container/SoundContainer";
import "./stylesheets/App.scss";

const App = () => (
  <div className="App">
    <header className="App-header">
      <p>
          Hi
      </p>
    </header>
    <SoundContainer id="15" />
    <div>
      <Button
        raised
        className="button-alternate"
        onClick={() => console.warn("clicked!")}
      >
        Click Me!
      </Button>
    </div>
  </div>
);
export default App;
