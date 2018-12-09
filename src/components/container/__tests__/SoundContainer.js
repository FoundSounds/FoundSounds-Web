// @flow
import React from "react";
import { render, waitForElement } from "react-testing-library";
import SoundContainer from "../SoundContainer";
import queryMock from "../../../__testUtils__/queryMock";

describe("Map", () => {
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

  describe("SoundContainer", () => {
    it("should render content when given a successful response", async () => {
      queryMock.mockQuery({
        name: "SoundContainerQuery",
        variables: {
          id: "10",
        },
        data: mockAppQueryData,
      });
      const { getByText } = render(<SoundContainer id="10" />);
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

      const { getByText } = render(<SoundContainer id="10" />);
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
      const { getByText } = render(<SoundContainer id="10" />);
      expect(getByText("Loading...")).toBeTruthy();
      await waitForElement(() => getByText("Error!"));
      expect(getByText("Error!")).toBeTruthy();
      jest.spyOn(global.console, "error");
      expect(console.error).toBeCalled();
    }, 500);
  });
});
