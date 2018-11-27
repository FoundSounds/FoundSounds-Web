/**
 * @flow
 * @relayHash 2c18d4c8e33b7ea00fa5ae2dc84ecc7b
 */

/* eslint-disable */

'use strict';

/*::
import type { ConcreteRequest } from 'relay-runtime';
export type SoundContainerQueryVariables = {|
  id: string
|};
export type SoundContainerQueryResponse = {|
  +sound: ?{|
    +id: string,
    +description: ?string,
    +latitude: number,
    +longitude: number,
    +file_name: string,
    +user: {|
      +name: ?string
    |},
    +photos: ?$ReadOnlyArray<?{|
      +file_name: string
    |}>,
  |}
|};
export type SoundContainerQuery = {|
  variables: SoundContainerQueryVariables,
  response: SoundContainerQueryResponse,
|};
*/


/*
query SoundContainerQuery(
  $id: ID!
) {
  sound(id: $id) {
    id
    description
    latitude
    longitude
    file_name
    user {
      name
      id
    }
    photos {
      file_name
      id
    }
  }
}
*/

const node/*: ConcreteRequest*/ = (function(){
var v0 = [
  {
    "kind": "LocalArgument",
    "name": "id",
    "type": "ID!",
    "defaultValue": null
  }
],
v1 = [
  {
    "kind": "Variable",
    "name": "id",
    "variableName": "id",
    "type": "ID!"
  }
],
v2 = {
  "kind": "ScalarField",
  "alias": null,
  "name": "id",
  "args": null,
  "storageKey": null
},
v3 = {
  "kind": "ScalarField",
  "alias": null,
  "name": "description",
  "args": null,
  "storageKey": null
},
v4 = {
  "kind": "ScalarField",
  "alias": null,
  "name": "latitude",
  "args": null,
  "storageKey": null
},
v5 = {
  "kind": "ScalarField",
  "alias": null,
  "name": "longitude",
  "args": null,
  "storageKey": null
},
v6 = {
  "kind": "ScalarField",
  "alias": null,
  "name": "file_name",
  "args": null,
  "storageKey": null
},
v7 = {
  "kind": "ScalarField",
  "alias": null,
  "name": "name",
  "args": null,
  "storageKey": null
};
return {
  "kind": "Request",
  "operationKind": "query",
  "name": "SoundContainerQuery",
  "id": null,
  "text": "query SoundContainerQuery(\n  $id: ID!\n) {\n  sound(id: $id) {\n    id\n    description\n    latitude\n    longitude\n    file_name\n    user {\n      name\n      id\n    }\n    photos {\n      file_name\n      id\n    }\n  }\n}\n",
  "metadata": {},
  "fragment": {
    "kind": "Fragment",
    "name": "SoundContainerQuery",
    "type": "Query",
    "metadata": null,
    "argumentDefinitions": v0,
    "selections": [
      {
        "kind": "LinkedField",
        "alias": null,
        "name": "sound",
        "storageKey": null,
        "args": v1,
        "concreteType": "SoundType",
        "plural": false,
        "selections": [
          v2,
          v3,
          v4,
          v5,
          v6,
          {
            "kind": "LinkedField",
            "alias": null,
            "name": "user",
            "storageKey": null,
            "args": null,
            "concreteType": "UserType",
            "plural": false,
            "selections": [
              v7
            ]
          },
          {
            "kind": "LinkedField",
            "alias": null,
            "name": "photos",
            "storageKey": null,
            "args": null,
            "concreteType": "PhotoType",
            "plural": true,
            "selections": [
              v6
            ]
          }
        ]
      }
    ]
  },
  "operation": {
    "kind": "Operation",
    "name": "SoundContainerQuery",
    "argumentDefinitions": v0,
    "selections": [
      {
        "kind": "LinkedField",
        "alias": null,
        "name": "sound",
        "storageKey": null,
        "args": v1,
        "concreteType": "SoundType",
        "plural": false,
        "selections": [
          v2,
          v3,
          v4,
          v5,
          v6,
          {
            "kind": "LinkedField",
            "alias": null,
            "name": "user",
            "storageKey": null,
            "args": null,
            "concreteType": "UserType",
            "plural": false,
            "selections": [
              v7,
              v2
            ]
          },
          {
            "kind": "LinkedField",
            "alias": null,
            "name": "photos",
            "storageKey": null,
            "args": null,
            "concreteType": "PhotoType",
            "plural": true,
            "selections": [
              v6,
              v2
            ]
          }
        ]
      }
    ]
  }
};
})();
// prettier-ignore
(node/*: any*/).hash = '280d74d1eed75ec113ee4a4df84e4252';
module.exports = node;
