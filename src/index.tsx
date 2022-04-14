import React from "react";
import "./index.css";
import App from "./App";
import { User } from "./features/github/pages/user/User";
import { store } from "./app/store";
import { Provider } from "react-redux";
import * as serviceWorker from "./serviceWorker";
import { createRoot } from "react-dom/client";

import * as ReactDom from "react-dom";
import { Routes, Route, BrowserRouter } from "react-router-dom";

const root = document.getElementById("root");
if (root) {
  createRoot(root).render(
    <React.StrictMode>
      <Provider store={store}>
        <BrowserRouter>
          <Routes>
            <Route path="/" element={<App />} />
            <Route path="/user" element={<User />} />
          </Routes>
        </BrowserRouter>
      </Provider>
    </React.StrictMode>
  );
}
// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
