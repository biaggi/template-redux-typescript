import ReactDOM from "react-dom/client";
import { act } from "react-dom/test-utils";
import { store } from "../../app/store";
import { Home } from "./Home";
import { Provider } from "react-redux";
import { screen } from "@testing-library/dom";
import { setupMocks } from "../../test/mocks";
import { getAuthSecondStepAsync } from "../github/githubSlice";

let root: Element | null = null;
let reactDomRoot: ReactDOM.Root | null = null;

describe("Home", () => {
  beforeEach(() => {
    // setup a DOM element as a render target
    root = document.createElement("div");
    document.body.appendChild(root);
  });
  afterEach(() => {
    // cleanup on exiting
    act(() => {
      if (reactDomRoot) reactDomRoot.unmount();
    });
    if (root) root.remove();
    root = null;
    fetchMock.mockRestore();
  });
  test("renders user name on login", async () => {
    setupMocks();
    await act(async () => {
      if (root) {
        reactDomRoot = ReactDOM.createRoot(root);
        reactDomRoot.render(
          <Provider store={store}>
            <Home />
          </Provider>
        );
      }
    });
    await act(async () => {
      await store.dispatch(
        getAuthSecondStepAsync({ code: "sdf", state: "sdf" })
      );
    });
    await act(async () => {
      const paragraph = await screen.findByText("Welcome Jose Manuel");
    });
  });
});
