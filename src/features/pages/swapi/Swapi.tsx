import { useAppDispatch } from "../../../app/hooks";
import { getPeopleAsync, deletePerson } from "../../swapi/swapiSlice";
import { PersonType, PeopleType } from "../../swapi/swapiTypes";

import { RootState } from "../../../app/store";
import { useEffect, useState } from "react";
import { useSelector } from "react-redux";
import "./Swapi.css";

export function Person(props: { name: string }) {
  return (
    <div>
      <section className="repo"> Repo name: {props.name} </section>
    </div>
  );
}

export function Swapi() {
  const [page, setPage] = useState(1);
  const { people, userName, status } = useSelector((state: RootState) => {
    return {
      ...state.swapi,
      userName: state.github.user?.name,
    };
  });
  const dispatch = useAppDispatch();

  useEffect(() => {
    if (status === "idle" && !people) dispatch(getPeopleAsync(page));
  });

  return (
    <div>
      <h1>Swapi example</h1>
      <h2>Hello {userName} </h2>
      <section className="people">
        <ul>
          {people ? (
            people?.results?.map((person: PersonType, i: number) => (
              <li className="People" key={i}>
                <span>{person.fields.name}</span>
                <button onClick={() => dispatch(deletePerson(i))}>
                  Delete
                </button>
              </li>
            ))
          ) : (
            <li>"No people found"</li>
          )}
        </ul>
      </section>
    </div>
  );
}
