/**
 * @flow
 * @relayHash e4aef8c48e328b95d7cb20edb2622e7f
 */

/* eslint-disable */

'use strict';

/*::
import type { ConcreteRequest } from 'relay-runtime';
export type userQueryVariables = {|
  id: string
|};
export type userQueryResponse = {|
  +user: ?{|
    +id: string
  |},
  +users: ?$ReadOnlyArray<?{|
    +id: string
  |}>,
|};
export type userQuery = {|
  variables: userQueryVariables,
  response: userQueryResponse,
|};
*/


/*
query userQuery(
  $id: ID!
) {
  user(id: $id) {
    id
  }
  users {
    id
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
    "kind": "ScalarField",
    "alias": null,
    "name": "id",
    "args": null,
    "storageKey": null
  }
],
v2 = [
  {
    "kind": "LinkedField",
    "alias": null,
    "name": "user",
    "storageKey": null,
    "args": [
      {
        "kind": "Variable",
        "name": "id",
        "variableName": "id",
        "type": "ID!"
      }
    ],
    "concreteType": "UserType",
    "plural": false,
    "selections": v1
  },
  {
    "kind": "LinkedField",
    "alias": null,
    "name": "users",
    "storageKey": null,
    "args": null,
    "concreteType": "UserType",
    "plural": true,
    "selections": v1
  }
];
return {
  "kind": "Request",
  "operationKind": "query",
  "name": "userQuery",
  "id": null,
  "text": "query userQuery(\n  $id: ID!\n) {\n  user(id: $id) {\n    id\n  }\n  users {\n    id\n  }\n}\n",
  "metadata": {},
  "fragment": {
    "kind": "Fragment",
    "name": "userQuery",
    "type": "Query",
    "metadata": null,
    "argumentDefinitions": v0,
    "selections": v2
  },
  "operation": {
    "kind": "Operation",
    "name": "userQuery",
    "argumentDefinitions": v0,
    "selections": v2
  }
};
})();
// prettier-ignore
(node/*: any*/).hash = '6a7a391eadc2b5b30bfa88cfb9566c08';
module.exports = node;
