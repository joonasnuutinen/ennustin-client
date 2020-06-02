import React from "react";
import renderer from "react-test-renderer";
import Index from "../pages/index";
import Profile from "../pages/profiili";

it("renders homepage unchanged", () => {
  const tree = renderer.create(<Index />).toJSON();
  expect(tree).toMatchSnapshot();
});

it("renders profile page unchanged", () => {
  const profile = renderer.create(<Profile />).toJSON();
  expect(profile).toMatchSnapshot();
});
