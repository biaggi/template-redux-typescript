import { useAppSelector } from "../../../app/hooks";
import { selectGithub } from "../../github/githubSlice";

export function User() {
  const { user } = useAppSelector(selectGithub);
    console.log(user)
  return (
    <div>
      <h1>User page</h1>
      <section className="personal-data"> {user?.name}</section>
    </div>
  );
}
