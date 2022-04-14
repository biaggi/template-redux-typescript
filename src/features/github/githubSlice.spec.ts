import githubReducer, {
  getLoginUrlAsync,
  GithubState,
  initialState,
  getAuthSecondStepAsync,
  getUserAsync,
} from "./githubSlice";

import { store } from "../../app/store";

import { accessTokenMock, userMock, setupMocks } from "./mocks";

function setupFetchStub(data: any) {
  return function fetchStub(
    input: RequestInfo,
    init?: RequestInit | undefined
  ) {
    return new Promise<Response>((resolve) => {
      resolve(new Response(data));
    });
  };
}

describe("github reducer", () => {
  afterAll(() => {
    fetchMock.resetMocks();
  })
  it("should handle login url", () => {
    store.dispatch(getLoginUrlAsync("test")).then(() => {
      const state = store.getState();
      expect(state.github.loginUrl).toBeDefined;
    });
  });

  it("should handle a code to get an access_token", (done) => {
    setupMocks();
    store
      .dispatch(
        getAuthSecondStepAsync({
          code: "4b5931d22872d112dca6",
          state: "67394578",
        })
      )
      .then(() => {
        const state = store.getState();
        expect(JSON.stringify(state.github.accessToken)).toBe(JSON.stringify(accessTokenMock))
        done();
      });
  });
  it("should handle an access_token to get a user", (done) => {
    setupMocks();
    store
      .dispatch(
        getUserAsync()
      )
      .then(() => {
        const state = store.getState();
        expect(JSON.stringify(state.github.user)).toBe(JSON.stringify(userMock))
        done();
      });
  });
});
