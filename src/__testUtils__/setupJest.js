// @flow
import fetch from "node-fetch";

global.fetch = fetch;
global.console = { error: jest.fn() };
