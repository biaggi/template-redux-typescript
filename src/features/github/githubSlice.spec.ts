import githubReducer, {
  getLoginUrlAsync,
  GithubState,
  initialState,
} from "./githubSlice";

import { store } from "../../app/store";
import { assert } from "console";

describe("counter reducer", () => {
  it("should handle initial state", () => {
    expect(githubReducer(undefined, { type: "unknown" })).toEqual(initialState);
  });

  it("should handle login url", () => {
    store.dispatch(getLoginUrlAsync("test")).then(() => {
      const state = store.getState();
      expect(state.github.loginUrl).toBeDefined;
    });
  });
});
