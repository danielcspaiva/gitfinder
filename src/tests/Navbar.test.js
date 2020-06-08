import React from "react";
import { BrowserRouter as Router } from "react-router-dom";
import { mount, shallow } from "enzyme";
import Navbar from "../components/Navbar";

describe("Navbar", () => {
  const wrapper = mount(
    <Router>
      <Navbar />
    </Router>
  );

  it("Should have a <nav>", () => {
    expect(wrapper.exists("nav")).toBe(true);
  });

  it("Should have a h1 with the text: GitFinder", () => {
    expect(wrapper.find("h1").text()).toContain("GitFinder");
  });

  it("Should have a GitHub icon", () => {
    expect(wrapper.exists("FiGithub")).toBe(true);
  });
});
