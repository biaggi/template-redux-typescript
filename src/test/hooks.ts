import ReactDOM from "react-dom/client";
import { act } from "react-dom/test-utils";

export const beforeEachHook = (root: Element | null) => () => {
  // setup a DOM element as a render target
  root = document.createElement("div");
  document.body.appendChild(root);
};

export const afterEachHook =
  (root: Element | null, reactDomRoot: ReactDOM.Root | null) => () => {
    // cleanup on exiting
    act(() => {
      if (reactDomRoot) reactDomRoot.unmount();
    });
    if (root) root.remove();
    root = null;
    fetchMock.mockRestore();
  };
