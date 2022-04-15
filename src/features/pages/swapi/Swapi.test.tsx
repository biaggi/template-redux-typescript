import ReactDOM from "react-dom/client";
import { act } from "react-dom/test-utils";
import { store } from "../../../app/store";
import { Swapi } from "./Swapi";
import { Provider } from "react-redux";
import { screen } from "@testing-library/dom";
import { afterEachHook, beforeEachHook } from "../../../test/hooks";

import { setupMocks } from "../../../test/mocks";
let root: Element | null = null;
let reactDomRoot: ReactDOM.Root | null = null;

describe("Swapi", () => {
  beforeEach(() => {
    // setup a DOM element as a render target
    root = document.createElement("div");
    document.body.appendChild(root);
  });

  //beforeEach(beforeEachHook(root));
  afterEach(afterEachHook(root, reactDomRoot));
  test("swapi renders a people list", async () => {
    setupMocks();
    await act(async () => {
      if (root) {
        reactDomRoot = ReactDOM.createRoot(root);
        reactDomRoot.render(
          <Provider store={store}>
            <Swapi />
          </Provider>
        );
      }
    });
    await act(async () => {
      const bower = await screen.findByText("Luke Skywalker");
    });
  });
});
