// @flow
import React from "react";
import { graphql, QueryRenderer } from "react-relay";
import Card, {
  CardPrimaryContent,
  CardMedia,
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
          const img = `https://foundsounds.me/uploads/images/${props.sound.photos[0].file_name}`;
          return (
            <Card className="sound-card">
              <CardMedia square imageUrl={img} />
              <h2>{props.sound.user.name}</h2>
              <subtitle>
                {props.sound.description}
              </subtitle>
              <div className="collapsible collapsedcollapsible">
          Lorem ipsum dolor sit amet, consectetur adipisicing elit. Optio itaque ea, nostrum odio. Dolores, sed accusantium quasi non, voluptas eius illo quas, saepe voluptate pariatur in deleniti minus sint. Excepturi.
                {props.sound.latitude}
                {props.sound.longitude}
              </div>
            </Card>
          );
        }}
      />
    );
  }
}

export function toggleClass(element, className) {
  if (classList.contains(className)) {
    classList.remove(className);
    return;
  }
  classList.add(className);
}

export default SoundContainer;
