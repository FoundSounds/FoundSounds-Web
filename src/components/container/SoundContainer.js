// @flow
import React from "react";
import type { Node } from "react";
import { graphql, QueryRenderer } from "react-relay";
import Card, {
  CardMedia,
} from "@material/react-card";
import MaterialIcon from "@material/react-material-icon";
import Button from "@material/react-button";
import ReactCSSTransitionGroup from "react-addons-css-transition-group";
import environment from "../../environment";
import Map from "../presentational/Map";

type Props = {
  id: string,
};

type GeoData = {
  longitude: ?number,
  latitude: ?number,
  description: ?string,
};
type State = {
  geoData: GeoData,
  map: ?Node,
};

class SoundContainer extends React.Component<Props, State> {
  constructor(props: Props) {
    super(props);
    this.state = {
      geoData: {
        longitude: null,
        latitude: null,
        description: null,
      },
      map: null,
    };
  }

  render() {
    const { id } = this.props;
    return (
      <QueryRenderer
        environment={environment}
        query={graphql`
          query SoundContainerQuery($id: ID!) {
            sound(id: $id) {
              id
              description
              latitude
              longitude
              file_name
              user {
                name
              }
              photos {
                file_name
              }
            }
          }
        `}
        variables={{ id }}
        render={({ error, props }) => {
          if (error) {
            return <div>Error!</div>;
          }
          if (!props) {
            return <div>Loading...</div>;
          }
          const imgPrefix = "https://foundsounds.me/uploads/images/";
          const img = props.sound.photos ? `${imgPrefix}${props.sound.photos[0].file_name}` : "";
          const geoButton = (
            <MaterialIcon icon="room" hasRipple />
          );

          const { geoData, map } = this.state;
          const soundMap = (
            <Map latitude={props.sound.latitude} longitude={props.sound.longitude} />
          );

          const soundGeoData = {
            ...geoData,
            longitude: props.sound.longitude,
            latitude: props.sound.latitude,
          };

          const toggleGeoData = () => {
            if (map === null) {
              this.setState({ geoData: soundGeoData, map: soundMap });
            } else {
              this.setState({ map: null });
            }
          };

          return (
            <Card className="sound-card">
              <CardMedia square imageUrl={img} />
              <h2>{props.sound.user.name}</h2>
              <div className="mdc-typography--subtitle2">
                {props.sound.description}
              </div>
              <Button className="geoButton" icon={geoButton} onClick={toggleGeoData} />
              <ReactCSSTransitionGroup
                transitionName="fade"
                transitionEnterTimeout={500}
                transitionLeaveTimeout={300}
              >
                <div>
                  <div>
                    {map}
                  </div>
                </div>
              </ReactCSSTransitionGroup>
            </Card>
          );
        }}
      />
    );
  }
}

export default SoundContainer;
