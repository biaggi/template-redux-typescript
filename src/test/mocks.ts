import { User, AccessToken } from "../features/github/githubTypes";
import { PeopleType } from "../features/swapi/swapiTypes";

import fetchMock from "jest-fetch-mock";

export const setupMocks = () => {
  //authorization server
  fetchMock.mockIf(/.*$/, (req: Request) => {
    if (req.url.indexOf("access_token") > -1) {
      return new Promise<string>((resolve) => {
        resolve(JSON.stringify(accessTokenMock));
      });
    }

    //resource server / repositories
    if (req.url.indexOf("repos") > -1) {
      debugger;
      return new Promise<string>((resolve) => {
        resolve(reposMock());
      });
    }

    if (req.url.indexOf("user") > -1) {
      return new Promise<string>((resolve) => {
        resolve(JSON.stringify(userMock));
      });
    }
    if (req.url.indexOf("people") > -1) {
      return new Promise<string>((resolve) => {
        resolve(JSON.stringify(peopleMock));
      });
    }

    return new Promise<string>((resolve) => resolve("not mocked"));
  });
};

export const accessTokenMock: AccessToken = {
  access_token: "gho_QwhFqX9yR04bpaNiEShTXKexample4XXcDF",
  token_type: "bearer",
  scope: "user",
  error: undefined,
};
export const userMock: User = {
  login: "biaggi",
  id: 18319366,
  node_id: "testMDS6VXNlcjE4MTkzNjY=",
  avatar_url: "https://avatars.githubusercontent.com/u/1819366?v=4",
  gravatar_id: "",
  url: "https://api.github.com/users/biaggi",
  html_url: "https://github.com/biaggi",
  followers_url: "https://api.github.com/users/biaggi/followers",
  following_url: "https://api.github.com/users/biaggi/following{/other_user}",
  gists_url: "https://api.github.com/users/biaggi/gists{/gist_id}",
  starred_url: "https://api.github.com/users/biaggi/starred{/owner}{/repo}",
  subscriptions_url: "https://api.github.com/users/biaggi/subscriptions",
  organizations_url: "https://api.github.com/users/biaggi/orgs",
  repos_url: "https://api.github.com/users/biaggi/repos",
  events_url: "https://api.github.com/users/biaggi/events{/privacy}",
  received_events_url: "https://api.github.com/users/biaggi/received_events",
  type: "User",
  site_admin: false,
  name: "Jose Manuel",
  company: null,
  blog: "",
  location: "Madrid",
  email: "biaggi@gmail.com",
  hireable: null,
  bio: null,
  twitter_username: null,
  public_repos: 13,
  public_gists: 0,
  followers: 0,
  following: 2,
  created_at: "2012-06-05T13:49:14Z",
  updated_at: "2022-04-05T22:41:21Z",
  private_gists: 0,
  total_private_repos: 5,
  owned_private_repos: 5,
  disk_usage: 138437,
  collaborators: 0,
  two_factor_authentication: false,
  plan: {
    name: "free",
    space: 976562499,
    collaborators: 0,
    private_repos: 10000,
  },
};

export const reposMock = () => {
  return JSON.stringify([
    {
      id: 50503745,
      node_id: "aaaMDEwOlJlcG9zaXRvcnk1MDUwMzc0NQ==",
      name: "bower",
      full_name: "biaggi/bower",
      private: false,
      owner: {
        login: "biaggi",
        id: 1819366,
        node_id: "MDQ6VXNlcjE4MTkzNjY=",
        avatar_url: "https://avatars.githubusercontent.com/u/1819366?v=4",
        gravatar_id: "",
        url: "https://api.github.com/users/biaggi",
        html_url: "https://github.com/biaggi",
        followers_url: "https://api.github.com/users/biaggi/followers",
        following_url:
          "https://api.github.com/users/biaggi/following{/other_user}",
        gists_url: "https://api.github.com/users/biaggi/gists{/gist_id}",
        starred_url:
          "https://api.github.com/users/biaggi/starred{/owner}{/repo}",
        subscriptions_url: "https://api.github.com/users/biaggi/subscriptions",
        organizations_url: "https://api.github.com/users/biaggi/orgs",
        repos_url: "https://api.github.com/users/biaggi/repos",
        events_url: "https://api.github.com/users/biaggi/events{/privacy}",
        received_events_url:
          "https://api.github.com/users/biaggi/received_events",
        type: "User",
        site_admin: false,
      },
      html_url: "https://github.com/biaggi/bower",
      description: "A package manager for the web",
      fork: true,
      url: "https://api.github.com/repos/biaggi/bower",
      forks_url: "https://api.github.com/repos/biaggi/bower/forks",
      keys_url: "https://api.github.com/repos/biaggi/bower/keys{/key_id}",
      collaborators_url:
        "https://api.github.com/repos/biaggi/bower/collaborators{/collaborator}",
      teams_url: "https://api.github.com/repos/biaggi/bower/teams",
      hooks_url: "https://api.github.com/repos/biaggi/bower/hooks",
      issue_events_url:
        "https://api.github.com/repos/biaggi/bower/issues/events{/number}",
      events_url: "https://api.github.com/repos/biaggi/bower/events",
      assignees_url:
        "https://api.github.com/repos/biaggi/bower/assignees{/user}",
      branches_url:
        "https://api.github.com/repos/biaggi/bower/branches{/branch}",
      tags_url: "https://api.github.com/repos/biaggi/bower/tags",
      blobs_url: "https://api.github.com/repos/biaggi/bower/git/blobs{/sha}",
      git_tags_url: "https://api.github.com/repos/biaggi/bower/git/tags{/sha}",
      git_refs_url: "https://api.github.com/repos/biaggi/bower/git/refs{/sha}",
      trees_url: "https://api.github.com/repos/biaggi/bower/git/trees{/sha}",
      statuses_url: "https://api.github.com/repos/biaggi/bower/statuses/{sha}",
      languages_url: "https://api.github.com/repos/biaggi/bower/languages",
      stargazers_url: "https://api.github.com/repos/biaggi/bower/stargazers",
      contributors_url:
        "https://api.github.com/repos/biaggi/bower/contributors",
      subscribers_url: "https://api.github.com/repos/biaggi/bower/subscribers",
      subscription_url:
        "https://api.github.com/repos/biaggi/bower/subscription",
      commits_url: "https://api.github.com/repos/biaggi/bower/commits{/sha}",
      git_commits_url:
        "https://api.github.com/repos/biaggi/bower/git/commits{/sha}",
      comments_url:
        "https://api.github.com/repos/biaggi/bower/comments{/number}",
      issue_comment_url:
        "https://api.github.com/repos/biaggi/bower/issues/comments{/number}",
      contents_url:
        "https://api.github.com/repos/biaggi/bower/contents/{+path}",
      compare_url:
        "https://api.github.com/repos/biaggi/bower/compare/{base}...{head}",
      merges_url: "https://api.github.com/repos/biaggi/bower/merges",
      archive_url:
        "https://api.github.com/repos/biaggi/bower/{archive_format}{/ref}",
      downloads_url: "https://api.github.com/repos/biaggi/bower/downloads",
      issues_url: "https://api.github.com/repos/biaggi/bower/issues{/number}",
      pulls_url: "https://api.github.com/repos/biaggi/bower/pulls{/number}",
      milestones_url:
        "https://api.github.com/repos/biaggi/bower/milestones{/number}",
      notifications_url:
        "https://api.github.com/repos/biaggi/bower/notifications{?since,all,participating}",
      labels_url: "https://api.github.com/repos/biaggi/bower/labels{/name}",
      releases_url: "https://api.github.com/repos/biaggi/bower/releases{/id}",
      deployments_url: "https://api.github.com/repos/biaggi/bower/deployments",
      created_at: "2016-01-27T11:46:39Z",
      updated_at: "2016-01-27T11:46:41Z",
      pushed_at: "2016-02-01T10:24:14Z",
      git_url: "git://github.com/biaggi/bower.git",
      ssh_url: "git@github.com:biaggi/bower.git",
      clone_url: "https://github.com/biaggi/bower.git",
      svn_url: "https://github.com/biaggi/bower",
      homepage: "bower.io",
      size: 3716,
      stargazers_count: 0,
      watchers_count: 0,
      language: "JavaScript",
      has_issues: false,
      has_projects: true,
      has_downloads: true,
      has_wiki: true,
      has_pages: false,
      forks_count: 0,
      mirror_url: null,
      archived: false,
      disabled: false,
      open_issues_count: 0,
      license: {
        key: "mit",
        name: "MIT License",
        spdx_id: "MIT",
        url: "https://api.github.com/licenses/mit",
        node_id: "MDc6TGljZW5zZTEz",
      },
      allow_forking: true,
      is_template: false,
      topics: [],
      visibility: "public",
      forks: 0,
      open_issues: 0,
      watchers: 0,
      default_branch: "master",
      permissions: {
        admin: true,
        maintain: true,
        push: true,
        triage: true,
        pull: true,
      },
    },
  ]);
};




export const peopleMock: PeopleType = {
  count: 82,
  pages: 9,
  next: "/api/people?page=2",
  previous: null,
  results: [
    {
      fields: {
        edited: "2014-12-20T21:17:56.891Z",
        name: "Luke Skywalker",
        created: "2014-12-09T13:50:51.644Z",
        gender: "male",
        skin_color: "fair",
        hair_color: "blond",
        height: "172",
        eye_color: "blue",
        mass: "77",
        homeworld: "/api/planets/1",
        birth_year: "19BBY",
        species: [],
        films: [],
        vehicles: ["/api/vehicles/14", "/api/vehicles/30"],
        starships: ["/api/starships/12", "/api/starships/22"],
        url: "/api/people/1",
      },
    }
  ],
};
