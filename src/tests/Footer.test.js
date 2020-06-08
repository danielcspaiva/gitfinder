import React from "react";
import { mount, shallow } from "enzyme";
import Footer from "../components/Footer";

describe("Footer", () => {
  const wrapper = mount(<Footer />);

  it("Should have a <footer>", () => {
    expect(wrapper.exists('footer')).toBe(true);
  });

  it("Should have a h1 with the text: Desenvolvido por Daniel Paiva", () => {
    expect(wrapper.find("h1").text()).toContain("Desenvolvido por Daniel Paiva");
  });

  it("Should have two links to social media", () => {
    expect(wrapper.find("a")).toHaveLength(2);
  });
});
