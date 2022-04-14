import { User, AccessToken } from "./githubTypes";
import fetchMock from "jest-fetch-mock";

export const getAuthServerMocks = () => {
  //authorization server
  fetchMock.mockIf(/^http?:\/\/localhost:5050.*$/, (req: Request) => {
    return new Promise<string>((resolve) => {
      resolve(JSON.stringify(accessTokenMock));
    });
  });
};

export const getResourceServerMocks = () => {
  //authorization server
  fetchMock.mockIf(/^http?:\/\/localhost:5051.*$/, (req: Request) => {
    return new Promise<string>((resolve) => {
      if (req.url.endsWith("/user")) {
        console.log(req.url);
        resolve(JSON.stringify(userMock));
      }
    });
  });
};

export const accessTokenMock: AccessToken = {
  access_token: "gho_QwhFqX9yR04bpaNiEShTXKexample4XXcDF",
  token_type: "bearer",
  scope: "user",
};
export const userMock: User = {
  login: "biaggi",
  id: 18319366,
  node_id: "MDS6VXNlcjE4MTkzNjY=",
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
