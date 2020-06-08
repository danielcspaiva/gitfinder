import React from "react";
import { mount, shallow } from "enzyme";
import UserCard from "../components/UserCard";
import { BrowserRouter as Router } from "react-router-dom";

const user = {
  login: "danielcspaiva",
  avatar_url: "https://avatars1.githubusercontent.com/u/57114531?v=4",
};

describe("User Card", () => {
  const wrapper = mount(
    <Router>
      <UserCard user={user} />
    </Router>
  );

  it("Should have a container", () => {
    expect(wrapper.exists(".card-container")).toBe(true);
  });

  it("Should have an image with correct src", () => {
    expect(wrapper.find("img").prop("src")).toEqual(user.avatar_url);
  });

  it("Should have card info", () => {
    expect(wrapper.exists(".card-info")).toBe(true);
  });
});
