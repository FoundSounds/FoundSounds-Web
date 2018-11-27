// @flow
import React from "react";
import { graphql, QueryRenderer } from "react-relay";
import Card, {
  CardPrimaryContent,
} from "@material/react-card";
import environment from "../../environment";

type Props = {
  id: string,
};

class SoundContainer extends React.PureComponent<Props> {
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
          return (
            <Card className="sound-card">
              <CardPrimaryContent>
                {props.sound.description}
              </CardPrimaryContent>
              {props.sound.latitude}
              {props.sound.longitude}
            </Card>
          );
        }}
      />
    );
  }
}

export default SoundContainer;
