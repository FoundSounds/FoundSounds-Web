// @flow
import React from "react";
import ReactDOM from "react-dom";
import { render, waitForElement } from "react-testing-library";
import App from "../App";
import SoundContainer from "../components/container/SoundContainer";
import queryMock from "../__testUtils__/queryMock";

describe("App", () => {
  let mockAppQueryData;

  beforeEach(async () => {
    // Make sure mock data is always fresh for each test run
    queryMock.setup(process.env.GRAPHQL_URL || "");
    mockAppQueryData = {
      sound: {
        id: "1",
        description: "Really great sound!",
        latitude: -39,
        longitude: 39,
        user: {
          id: "1",
        },
      },
    };
  }, 500);
  describe("First screen", () => {
    it("renders without crashing", () => {
      queryMock.mockQuery({
        name: "SoundContainerQuery",
        data: mockAppQueryData,
      });
      const div = document.createElement("div");
      ReactDOM.render(<App />, div);
      ReactDOM.unmountComponentAtNode(div);
    });

    it("should render content when given a successful response", async () => {
      queryMock.mockQuery({
        name: "SoundContainerQuery",
        data: mockAppQueryData,
      });
      const { getByText } = render(<SoundContainer id="15" />);
      expect(getByText("Loading...")).toBeTruthy();
      await waitForElement(() => getByText("Really great sound!"));
      expect(getByText("Really great sound!")).toBeTruthy();
    }, 500);

    it("should render an error screen when request fails", async () => {
      queryMock.mockQuery({
        name: "SoundContainerQuery",
        data: {},
        status: 500,
      });

      const { getByText } = render(<App />);
      expect(getByText("Loading...")).toBeTruthy();
      await waitForElement(() => getByText("Error!"));
      expect(getByText("Error!")).toBeTruthy();
    }, 500);

    it("should error out if not valid json", async () => {
      queryMock.mockQuery({
        name: "SoundContainerQuery",
        data: { "blah": "blah" },
        error: { error: "Blah" },
        status: 401,
      });
      const { getByText } = render(<App />);
      expect(getByText("Loading...")).toBeTruthy();
      await waitForElement(() => getByText("Error!"));
      expect(getByText("Error!")).toBeTruthy();
      jest.spyOn(global.console, "error");
      expect(console.error).toBeCalled();
    }, 500);
  });
});
