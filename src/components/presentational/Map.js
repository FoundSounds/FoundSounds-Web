// @flow
import React from "react";
import ReactMapboxGl, { Layer, Feature } from "react-mapbox-gl";

type Props = {
  latitude: ?number,
  longitude: ?number,
};

const MapBox = ReactMapboxGl({
  accessToken: "pk.eyJ1IjoiZm91bmRzb3VuZHMiLCJhIjoiY2pwYWFxdGJqMDJ3ejNyb2ZjOHhybXVsMCJ9.G-tXq9RqJoyH4dS0ppj-HQ",
});

class Map extends React.PureComponent<Props> {
  render() {
    const { latitude, longitude } = this.props;
    return (
      <MapBox
        style="mapbox://styles/mapbox/streets-v9" // eslint-disable-line react/style-prop-object
        containerStyle={{
          height: "300px",
          width: "400px",
        }}
        center={[latitude, longitude]}
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
  }
}
export default Map;
