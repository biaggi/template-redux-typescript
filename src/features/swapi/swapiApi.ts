// this is a security issue, should be in the proxy
const CONSTANTS = {
  domains: {
    swapi: "https://swapi-node.now.sh",
  },
  uris: {
    people: "api/people",
    starships: "api/starships",
  },
};

export const getPeople = async (page: number) => {
  const queryParam = page >= 1 ? `?page=${page}` : "";
  return fetch(
    `${CONSTANTS.domains.swapi}/${CONSTANTS.uris.people}${queryParam}`,
    {
      headers: {
        accept: "application/json",
      },
      method: "GET",
      mode: "cors",
    }
  ).then((response) => response.json());
};
