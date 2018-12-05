// @flow
import React from "react";
import ReactMapboxGl, { Layer, Feature } from "react-mapbox-gl";

type propTypes = {
  latitude: ?number,
  longitude: ?number,
};

const MapBox = ReactMapboxGl({
  accessToken: "pk.eyJ1IjoiZm91bmRzb3VuZHMiLCJhIjoiY2pwYWFxdGJqMDJ3ejNyb2ZjOHhybXVsMCJ9.G-tXq9RqJoyH4dS0ppj-HQ",
});

const Map = ({
  latitude, longitude,
}: propTypes) => (
  <MapBox
    style="mapbox://styles/mapbox/streets-v9" // eslint-disable-line react/style-prop-object
    containerStyle={{
      height: "100vh",
      width: "45vw",
    }}
  >
    <Layer
      type="symbol"
      id="marker"
      layout={{ "icon-image": "marker-15" }}
    >
      <Feature coordinates={[latitude, longitude]} />
    </Layer>
  </MapBox>
);
export default Map;
