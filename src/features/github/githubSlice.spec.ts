import githubReducer, {
  getLoginUrlAsync,
  GithubState,
  initialState,
  getAuthSecondStepAsync,
} from "./githubSlice";

import { store } from "../../app/store";

import { userMock, accessTokenMock } from "./mocks";

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
  it("should handle login url", () => {
    store.dispatch(getLoginUrlAsync("test")).then(() => {
      const state = store.getState();
      expect(state.github.loginUrl).toBeDefined;
    });
  });

  it("should handle a code to get an access_token", (done) => {
    jest.spyOn(global, "fetch").mockImplementation(setupFetchStub(accessTokenMock));

    store
      .dispatch(
        getAuthSecondStepAsync({
          code: "4b5931d22872d112dca6",
          state: "67394578",
        })
      )
      .then(() => {
        const state = store.getState();
        console.log("state", state);
        done();
      });
  });
});
