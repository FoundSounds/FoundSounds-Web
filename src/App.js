// @flow
import React from "react";
import TopAppBar, { TopAppBarFixedAdjust } from "@material/react-top-app-bar";
import MaterialIcon from "@material/react-material-icon";
import Button from "@material/react-button";
import SoundContainer from "./components/container/SoundContainer";
import "./stylesheets/App.scss";

const title = (
  <div>
    <a className="foundsounds-toolbar__title-link" href="/">
      <div className="foundsounds-toolbar__leading-icon" />
      <h1 className="foundsounds-toolbar__title mdc-toolbar__title">
        <span style={{ "fontWeight": 300 }}>Found</span>
        <span style={{ "fontWeight": 400 }}>Sounds</span>
      </h1>
    </a>
  </div>
);

const App = () => (
  <div className="App">
    <TopAppBar
      title={title}
      navigationIcon={(
        <MaterialIcon
          icon="menu"
        />
      )}
      actionItems={[<MaterialIcon key="account" icon="account_circle" />]}
    />
    <TopAppBarFixedAdjust>
      <SoundContainer id="10" />
      <div>
        <Button
          raised
          className="button-alternate"
        >
          Play Sound OMG!
        </Button>
      </div>
    </TopAppBarFixedAdjust>
  </div>
);
export default App;
