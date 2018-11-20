// @flow
import React from "react";
import { graphql, QueryRenderer } from "react-relay";
import environment from "./environment";

type Props = {
  id: string,
};

type State = {
  totalUsers: number,
}

export default class User extends React.Component<Props, State> {
  constructor(props: Props) {
    super(props);
    this.state = { totalUsers: 0 };
  }

  render() {
    const { id } = this.props;
    const { totalUsers } = this.state;

    return (
      <QueryRenderer
        environment={environment}
        query={graphql`
          query userQuery($id: ID!) {
            user(id: $id) {
              id
            },
            users {
              id
            },
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

          this.setState({ totalUsers: props.users.count });
          const userIDS = props.users.map(user => (
            <div key={user.id}>
              User ID:
              {user.id}
            </div>
          ));

          const user = (
            <div>
              User:
              props.user.id
            </div>
          );
          return (
            <div>
              {user}
              {userIDS}
              Total Users
              {totalUsers}
            </div>
          );
        }}
      />
    );
  }
}
