// @flow
import React from "react";
import ReactDOM from "react-dom";
import { render, wait } from "react-testing-library";
import fetch from "node-fetch";
import App from "../App";
import queryMock from "../__testUtils__/queryMock";

it("renders without crashing", () => {
  const div = document.createElement("div");
  ReactDOM.render(<App />, div);
  ReactDOM.unmountComponentAtNode(div);
});

describe("App", () => {
  let mockAppQueryData;

  beforeEach(() => {
    // Make sure mock data is always fresh for each test run
    global.fetch = fetch;
    queryMock.setup("http://localhost:3000/graphql");
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
  });

  describe("First screen", () => {
    it("should render content when given a successful response", async () => {
    /**
     * App fetches the query AppQuery. Here we mock it, telling it to return our mock
     * data declared above.
     */
      queryMock.mockQuery({
        name: "SoundContainerQuery",
        data: mockAppQueryData,
      });

      /**
       * We mount the app and wait for our element that displays the app's content
       * to be visible.
       */

      const r = render(<App />);

      // The ProfileDisplayer displays the name, so we wait for that to appear
      await wait(() => r.getByText("Really great sound!"));
    });

    it("should render an error screen when request fails", async () => {
      /**
        * Here we instead want to make sure that we show an error screen when requests fail,
      * so we tell graphql-query-test-mock to fail the request and return a status 500,
      * and then wait for our error screen to appear.
      */

      queryMock.mockQuery({
        name: "AppQuery",
        data: {},
        status: 500,
      });

      const r = render(<App />);
      await wait(() => r.getByText(/Error!/));
    });
  });
});
