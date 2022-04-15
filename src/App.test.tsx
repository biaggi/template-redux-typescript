import ReactDOM from "react-dom/client";
import { act } from "react-dom/test-utils";
import { store } from "./app/store";
import App from "./App";
import { Provider } from "react-redux";
import { screen } from "@testing-library/dom";

// let container: Element | null = null;
let root: Element | null = null;
let reactDomRoot: ReactDOM.Root | null = null;
import { setupMocks } from "./test/mocks";
describe("App", () => {
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
  test("renders learn react link", async () => {
    setupMocks();
    await act(async () => {
      if (root) {
        reactDomRoot = ReactDOM.createRoot(root);
        reactDomRoot.render(
          <Provider store={store}>
            <App />
          </Provider>
        );
      }
    });

    expect(screen.getByAltText("logo")).toBeDefined();
  });
});
