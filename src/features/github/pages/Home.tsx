import React, { useState } from "react";

import { useAppSelector, useAppDispatch } from "../../../app/hooks";
import { getLoginUrlAsync, selectGithubLoginUrl } from "../githubSlice";
import styles from "./Home.module.css";

export function Home() {
  const loginUrl = useAppSelector(selectGithubLoginUrl);
  const dispatch = useAppDispatch();
  //  const [incrementAmount, setIncrementAmount] = useState('2');
  // github needs a state parameter
  const state = Math.ceil(Math.random() * new Date().getTime()).toString();
  dispatch(getLoginUrlAsync(state));

  return (
    <div>
        <h1>Login page</h1>
        <p>Welcome anonymous</p>

        <section className="login">
            <a href={loginUrl}>Please click here to login with github!</a>
        </section>
    </div>
  );
}
