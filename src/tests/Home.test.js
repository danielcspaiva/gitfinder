import React from "react";
import { BrowserRouter as Router } from "react-router-dom";
import { mount, shallow } from "enzyme";
import Home from "../components/views/Home";

describe("Home", () => {
  const wrapper = mount(
    <Router>
      <Home />
    </Router>
  );

  it("Should have a <nav>", () => {
    expect(wrapper.exists("nav")).toBe(true);
  });

  it("Should have 2 buttons", () => {
    expect(wrapper.find("button")).toHaveLength(2);
  });

  it("Should have a search bar", () => {
    expect(wrapper.exists("input")).toBe(true);
  });

  it("Should interact with search bar", () => {
    const searchBar = wrapper.find("input").instance().value = 'danielcspaiva';
    expect(searchBar).toBe("danielcspaiva");
  });
});
