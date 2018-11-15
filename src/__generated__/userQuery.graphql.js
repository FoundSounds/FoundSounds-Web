/**
 * @flow
 * @relayHash 6b2ce2c15bd72d309df1fb42840431f5
 */

/* eslint-disable */

'use strict';

/*::
import type { ConcreteRequest } from 'relay-runtime';
export type userQueryVariables = {||};
export type userQueryResponse = {|
  +users: ?$ReadOnlyArray<?{|
    +id: string
  |}>
|};
export type userQuery = {|
  variables: userQueryVariables,
  response: userQueryResponse,
|};
*/


/*
query userQuery {
  users {
    id
  }
}
*/

const node/*: ConcreteRequest*/ = (function(){
var v0 = [
  {
    "kind": "LinkedField",
    "alias": null,
    "name": "users",
    "storageKey": null,
    "args": null,
    "concreteType": "UserType",
    "plural": true,
    "selections": [
      {
        "kind": "ScalarField",
        "alias": null,
        "name": "id",
        "args": null,
        "storageKey": null
      }
    ]
  }
];
return {
  "kind": "Request",
  "operationKind": "query",
  "name": "userQuery",
  "id": null,
  "text": "query userQuery {\n  users {\n    id\n  }\n}\n",
  "metadata": {},
  "fragment": {
    "kind": "Fragment",
    "name": "userQuery",
    "type": "Query",
    "metadata": null,
    "argumentDefinitions": [],
    "selections": v0
  },
  "operation": {
    "kind": "Operation",
    "name": "userQuery",
    "argumentDefinitions": [],
    "selections": v0
  }
};
})();
// prettier-ignore
(node/*: any*/).hash = 'f8d98dcff3a901541c3f1e9a57b63e1b';
module.exports = node;
