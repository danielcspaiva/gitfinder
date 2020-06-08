import React from "react";
import { mount, shallow } from "enzyme";
import RepoCard from "../components/RepoCard";
import { BrowserRouter as Router } from "react-router-dom";

const repo = {
  owner: {
    login: "danielcspaiva",
    avatar_url: "https://avatars1.githubusercontent.com/u/57114531?v=4"
  },
  name: "Bomberman-Clone",
  description: "Bomberman Clone",
  language: "HTML",
  stargazers_count: 2,
  forks: 0,
  html_url: "https://github.com/danielcspaiva/Bomberman-Clone"
};

describe("Repo Card", () => {
  const wrapper = mount(
    <Router>
      <RepoCard repo={repo} />
    </Router>
  );

  it("Should have a container", () => {
    expect(wrapper.exists(".card-container")).toBe(true);
  });

  it("Should have an image with correct src", () => {
    expect(wrapper.find("img").prop("src")).toEqual(repo.owner.avatar_url);
  });

  it("Should have card info", () => {
    expect(wrapper.exists(".card-info")).toBe(true);
  });
});
