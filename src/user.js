// @flow
import React from "react";
import { graphql, QueryRenderer } from "react-relay";
import environment from "./environment";


export default class User extends React.Component {
  render() {
    return (
      <QueryRenderer
        environment={environment}
        query={graphql`
          query userQuery {
            users {
              id
            }
          }
        `}
        variables={{}}
        render={({ error, props }) => {
          if (error) {
            return <div>Error!</div>;
          }
          if (!props) {
            return <div>Loading...</div>;
          }
          const userIDS = props.users.map((user) =>
            <div>User ID: {user.id}</div>
          )
          return (
            <div>
              {userIDS}
            </div>
          );
        }}
      />
    );
  }
}
