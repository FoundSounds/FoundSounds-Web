// @flow
import React from "react";
import { graphql, QueryRenderer } from "react-relay";
import Card, {
  CardMedia,
} from "@material/react-card";
import ReactCSSTransitionGroup from 'react-addons-css-transition-group';
import environment from "../../environment";

type Props = {
  id: string,
};

type State = {
  geoData: ReactComponent
}

class SoundContainer extends React.PureComponent<Props, State> {
  constructor(props: Props) {
    super(props);
    this.state = { geoData: null, blah: null };
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
          const img = props.sound.photos ? `https://foundsounds.me/uploads/images/${props.sound.photos[0].file_name}` : "";

          const geoData = (
            <div>
              Hi David!
              {props.sound.longitude}
            </div>
          );

          function toggleGeoData() {
            this.setState({blah: geoData});
          }

          return (
            <Card className="sound-card">
              <CardMedia square imageUrl={img} />
              <h2>{props.sound.user.name}</h2>
              <div className="subtitle">
                <a onClick={toggleGeoData}>Show GeoData{this.state.blah}</a>
              </div>
              <ReactCSSTransitionGroup
                transitionName="fade"
                transitionEnterTimeout={500}
                transitionLeaveTimeout={300}
              >
                {this.state.geoData}
              </ReactCSSTransitionGroup>
            </Card>
          );
        }}
      />
    );
  }
}

export default SoundContainer;
