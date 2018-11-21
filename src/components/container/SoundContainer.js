// @flow
import React from "react";
import { graphql, QueryRenderer } from "react-relay";
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
              user {
                id
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
            <div>
              <div>
                {props.sound.user.id}
              </div>
              {props.sound.id}
              {props.sound.description}
              {props.sound.latitude}
              {props.sound.longitude}
            </div>
          );
        }}
      />
    );
  }
}

export default SoundContainer;
