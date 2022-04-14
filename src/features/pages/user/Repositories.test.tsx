import ReactDOM from "react-dom/client";
import { act } from "react-dom/test-utils";
import { store } from "../../../app/store";
import { Repositories } from "./Repositories";
import { Provider } from "react-redux";
import { screen } from "@testing-library/dom";
import { afterEachHook, beforeEachHook } from "../../../test/hooks";

import { setupMocks } from "../../github/mocks";
import { setFakeAccessToken } from "../../github/githubSlice";
let root: Element | null = null;
let reactDomRoot: ReactDOM.Root | null = null;

describe("User", () => {
  beforeEach(() => {
    // setup a DOM element as a render target
    root = document.createElement("div");
    document.body.appendChild(root);
  });

  //beforeEach(beforeEachHook(root));
  afterEach(afterEachHook(root, reactDomRoot));
  test("User is rendering the repo list", async () => {
    setupMocks();
    await act(async () => {
      store.dispatch(setFakeAccessToken());
    });
    await act(async () => {
      if (root) {
        reactDomRoot = ReactDOM.createRoot(root);
        reactDomRoot.render(
          <Provider store={store}>
            <Repositories />
          </Provider>
        );
      }
    });
    await act(async () => {
      const bower = await screen.findByText("bower");
    });
  });
});
