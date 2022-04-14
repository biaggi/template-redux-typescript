import { useAppDispatch } from "../../../app/hooks";
import { getRepositoriesAsync } from "../../github/githubRepositoriesSlice";

import { RootState } from "../../../app/store";
import { useEffect } from "react";
import { useSelector } from "react-redux";
import "./Repositories.css";

export function Repo(props: { name: string }) {
  return (
    <div>
      <section className="repo"> Repo name: {props.name} </section>
    </div>
  );
}

export function Repositories() {
  const { repos, status, userName } = useSelector((state: RootState) => {
    return {
      ...state.repos,
      userName: state.github.user?.name,
    };
  });
  const dispatch = useAppDispatch();

  useEffect(() => {
    if (status === "idle" && !repos) dispatch(getRepositoriesAsync());
  });

  return (
    <div>
      <h1>User repository list</h1>
      <h2>Hello {userName} </h2>
      <section className="repos">
        <ul>
          {repos ? (
            repos.map((repo, i) => (
              <li className="Repo" key={i}>
                <a href={repo.html_url} target="_blank" rel="noreferrer">
                  {repo.name}
                </a>
              </li>
            ))
          ) : (
            <li>"No repos found"</li>
          )}
        </ul>
      </section>
    </div>
  );
}
