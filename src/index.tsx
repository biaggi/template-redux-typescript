import React from "react";
import "./index.css";
import App from "./App";
import { User } from "./features/github/pages/user/User";
import { store } from "./app/store";
import { Provider } from "react-redux";
import * as serviceWorker from "./serviceWorker";
import { createRoot } from "react-dom/client";
import { selectGithubUser } from "./features/github/githubSlice";
import { Link, Routes, Route, BrowserRouter, Navigate } from "react-router-dom";
import { useAppSelector } from "./app/hooks";
import { Dashboard } from "./features/github/pages/dashboard/Dashboard";
const root = document.getElementById("root");

const ProtectedRoute = ({ children }: { children: any }) => {
  const user = useAppSelector(selectGithubUser);

  if (!user) {
    return <Navigate to="/" replace />;
  }

  return children;
};

if (root) {
  createRoot(root).render(
    <React.StrictMode>
      <Provider store={store}>
        <BrowserRouter>
          <nav>
            <Link to="/">Home</Link>
            <Link to="/user">User</Link>
            <Link to="/dashboard">Dashboard</Link>
          </nav>
          <Routes>
            <Route path="/" element={<App />} />
            <Route
              path="/user"
              element={
                <ProtectedRoute>
                  <User />
                </ProtectedRoute>
              }
            />
            <Route
              path="/dashboard"
              element={
                <ProtectedRoute>
                  <Dashboard />
                </ProtectedRoute>
              }
            />
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
