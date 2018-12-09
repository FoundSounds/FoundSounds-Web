// @flow
import React from "react";
import { shallow } from "enzyme";
import ReactMapboxGl, { Layer, Feature } from "react-mapbox-gl";
import Map from "../Map";
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

  it("should render map when giving longitude and latitude", () => {
    queryMock.mockQuery({
      name: "SoundContainerQuery",
      variables: {
        id: "10",
      },
      data: mockAppQueryData,
    });
    const wrapper = shallow(<Map longitude={30} latitude={30} />);
    expect(wrapper.find(ReactMapboxGl)).toBeTruthy();
    expect(wrapper.find(Feature)).toBeTruthy();
    expect(wrapper.find(Layer)).toBeTruthy();
  });
});
