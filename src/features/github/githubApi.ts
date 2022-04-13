export const CONSTANTS = {
  secrets: {
    client_id: "1283deb25830a5416402",
    client_secret: "d30439d48ee48df60e651f0e6a490c0cd94e7500",
    redirect_uri: "http://localhost:3000/user",
    scope: "user",
  },
  domains: {
    github: "https://www.github.com",
    proxy: "http://localhost:5050",
  },
  uris: {
    access_token: "login/oauth/access_token",
    authorize: "login/oauth/authorize",
    user: "user",
  },
};

const authSecondStep = (code: string) => {
  const data = `code=${code}&client_id=${CONSTANTS.secrets.client_id}&client_secret=${CONSTANTS.secrets.client_secret}`;
  return fetch(`${CONSTANTS.domains.proxy}/${CONSTANTS.uris.access_token}`, {
    headers: {
      accept: "application/json",
    },
    method: "POST",
    body: new URLSearchParams(data),
    mode: "cors",
  });
};

const getUser = (token: string) => {
  //  return fetch(`${CONSTANTS.uris.proxy}/user`, {
  return fetch(`${CONSTANTS.domains.proxy}/${CONSTANTS.uris.user}`, {
    headers: {
      accept: "application/json",
      Authorization: `token ${token}`,
    },
    method: "GET",
    mode: "cors",
  });
};

const getLoginUrl = (state: string) => {
    const params = {
      ...CONSTANTS.secrets,
      state,
    };

    const parts = [];
    for (let key in params) {
      parts.push(`${key}=${params[key as keyof typeof params]}`);
    }

    const queryParameters = `?${parts.join("&")}`;
      return `${CONSTANTS.domains.github}/${CONSTANTS.uris.authorize}${queryParameters}`
};

export { authSecondStep, getUser, getLoginUrl };