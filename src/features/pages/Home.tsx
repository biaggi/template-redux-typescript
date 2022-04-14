import { useAppSelector, useAppDispatch } from "../../app/hooks";
import {
  getLoginUrlAsync,
  selectGithub,
  getAuthSecondStepAsync,
  getUserAsync,
  logout,
} from "../github/githubSlice";
import logo from "./logo.svg";

import "./Home.css";

export function Home(props: {}) {
  const { loginUrl, status, accessToken, user } = useAppSelector(selectGithub);
  const dispatch = useAppDispatch();
  // to check on callback
  let state = sessionStorage.getItem("state");

  // private "method"
  const dispatchToLogin = () => {
    // github needs a state parameter
    state = Math.ceil(Math.random() * new Date().getTime()).toString();
    sessionStorage.setItem("state", state);
    dispatch(getLoginUrlAsync(state));
  };

  const getQueryParams = () => {
    // extract params as an array of [{key, value}, ...] pairs
    const bareParams = window.document.location.search
      .slice(1)
      .split("&")
      .map((item) => {
        let key, value;
        [key, value] = item.split("=");
        return { key: key, value: value };
      });

    const getItem = (item: string) => {
      const param = bareParams.find((param) => param.key === item);
      return param ? param.value : undefined;
    };
    const code = getItem("code");
    const state = getItem("state");
    return code && state ? { code, state } : undefined;
  };

  const dispatchToAccessToken = (parameters: {
    code: string;
    state: string;
  }) => {
    dispatch(getAuthSecondStepAsync(parameters));
  };

  let navigateHome = false;
  // login sequence, could be a thunk...
  if (status === "idle") {
    if (!loginUrl || (accessToken && accessToken.error)) {
      dispatchToLogin();
      navigateHome = true;
    } else if (!accessToken) {
      const parameters = getQueryParams();
      if (parameters) {
        dispatchToAccessToken(parameters);
      }
    } else {
      if (!user) {
        // github api is not jwt, so im emulating it this way
        // in a jwt api here we would be decoding the received token
        // to get the claims
        dispatch(getUserAsync());
      }
    }
  }

  return navigateHome ? (
    <div></div>
  ) : (
    <div className="Home">
      <header className="Home-header">
        <a href="/">
          <img src={logo} className="Home-logo" alt="logo" />
        </a>
        <div>
          <h1>Login page</h1>
          <p>Welcome {user && user.name ? user.name : "anonymous"}</p>

          <section className="login">
            {loginUrl && !user ? (
              <a className="Home-link" href={loginUrl}>Please click here to login with github!</a>
            ) : (
              <button
                onClick={(event) => {
                  event?.preventDefault();
                  dispatch(logout());
                }}
              >
                Logout
              </button>
            )}
          </section>
        </div>
      </header>
    </div>
  );
}
