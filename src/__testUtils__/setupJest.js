// @flow
import fetch from "node-fetch";
import Enzyme, { shallow, render, mount } from "enzyme";
import Adapter from "enzyme-adapter-react-16";

Enzyme.configure({ adapter: new Adapter() });
global.fetch = fetch;
global.shallow = shallow;
global.render = render;
global.mount = mount;
// global.console = { error: jest.fn() };

jest.mock("mapbox-gl/dist/mapbox-gl", () => ({
  Map: () => ({
    on: () => ({}),
  }),
}));
