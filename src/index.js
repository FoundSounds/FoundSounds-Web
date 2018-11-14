// @flow
import React from "react";
import { graphql, QueryRenderer } from "react-relay";
import environment from "./api";


export default class App extends React.Component {
  render() {
    return (
      <QueryRenderer
        environment={environment}
        query={graphql`
          query userQuery($id: ID!) {
            id
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
          return (
            <div>
              User ID: { props.viewer.id }
            </div>
          );
        }}
      />
    );
  }
}
