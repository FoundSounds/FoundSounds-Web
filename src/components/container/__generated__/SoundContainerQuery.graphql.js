/**
 * @flow
 * @relayHash 76bb686067846e85fc17caf18da28aa7
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
    +user: {|
      +id: string
    |},
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
    user {
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
v1 = {
  "kind": "ScalarField",
  "alias": null,
  "name": "id",
  "args": null,
  "storageKey": null
},
v2 = [
  {
    "kind": "LinkedField",
    "alias": null,
    "name": "sound",
    "storageKey": null,
    "args": [
      {
        "kind": "Variable",
        "name": "id",
        "variableName": "id",
        "type": "ID!"
      }
    ],
    "concreteType": "SoundType",
    "plural": false,
    "selections": [
      v1,
      {
        "kind": "ScalarField",
        "alias": null,
        "name": "description",
        "args": null,
        "storageKey": null
      },
      {
        "kind": "ScalarField",
        "alias": null,
        "name": "latitude",
        "args": null,
        "storageKey": null
      },
      {
        "kind": "ScalarField",
        "alias": null,
        "name": "longitude",
        "args": null,
        "storageKey": null
      },
      {
        "kind": "LinkedField",
        "alias": null,
        "name": "user",
        "storageKey": null,
        "args": null,
        "concreteType": "UserType",
        "plural": false,
        "selections": [
          v1
        ]
      }
    ]
  }
];
return {
  "kind": "Request",
  "operationKind": "query",
  "name": "SoundContainerQuery",
  "id": null,
  "text": "query SoundContainerQuery(\n  $id: ID!\n) {\n  sound(id: $id) {\n    id\n    description\n    latitude\n    longitude\n    user {\n      id\n    }\n  }\n}\n",
  "metadata": {},
  "fragment": {
    "kind": "Fragment",
    "name": "SoundContainerQuery",
    "type": "Query",
    "metadata": null,
    "argumentDefinitions": v0,
    "selections": v2
  },
  "operation": {
    "kind": "Operation",
    "name": "SoundContainerQuery",
    "argumentDefinitions": v0,
    "selections": v2
  }
};
})();
// prettier-ignore
(node/*: any*/).hash = 'f90a145680d6c13283ba9e6b498d5a7f';
module.exports = node;
