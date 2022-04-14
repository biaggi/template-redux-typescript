import { access } from "fs";
import React, { useState } from "react";
import { createBuilderStatusReporter } from "typescript";

import { useAppSelector, useAppDispatch } from "../../../app/hooks";
import {
  getLoginUrlAsync,
  selectGithub,
  getAuthSecondStepAsync,
  getUserAsync,
} from "../githubSlice";
import styles from "./Home.module.css";

export function Home() {
  const { loginUrl, status, accessToken } = useAppSelector(selectGithub);
  const dispatch = useAppDispatch();
  //  const [incrementAmount, setIncrementAmount] = useState('2');
  let state = sessionStorage.getItem("state");
  // this parameter controls if we are already trying to login

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
      const param = bareParams.find((param) => param.key == item);
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
  

  if (status == "idle") {
    if (!loginUrl) {
      dispatchToLogin();
    } else if (!accessToken) {
      const parameters = getQueryParams();
      if (parameters) {
        dispatchToAccessToken(parameters);
      }
    } else {
      dispatch(getUserAsync())

    }
  }

  return (
    <div>
      <h1>Login page</h1>
      <p>Welcome anonymous</p>

      <section className="login">
        {loginUrl ? (
          <a href={loginUrl}>Please click here to login with github!</a>
        ) : (
          ""
        )}
      </section>
    </div>
  );
}
