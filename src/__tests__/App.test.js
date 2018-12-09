// @flow
import React from "react";
import ReactDOM from "react-dom";
import App from "../App";
import queryMock from "../__testUtils__/queryMock";

describe("App", () => {
  let mockAppQueryData;

  beforeEach(async () => {
    queryMock.setup(process.env.GRAPHQL_URL || "");
    mockAppQueryData = {
      sound: {
        id: "10",
        description: "Really great sound!",
        latitude: -39,
        longitude: 39,
        user: {
          id: "11",
        },
      },
    };
  }, 500);

  describe("First screen", () => {
    it("renders without crashing", () => {
      queryMock.mockQuery({
        name: "SoundContainerQuery",
        variables: {
          id: "10",
        },
        data: mockAppQueryData,
      });
      const div = document.createElement("div");
      ReactDOM.render(<App />, div);
      ReactDOM.unmountComponentAtNode(div);
    });
  });
});
