import { Home } from "./features/pages/Home";
import "./App.css";
import { Repositories } from "./features/pages/user/Repositories";
import { RootState, store } from "./app/store";
import { Provider } from "react-redux";
import { Link, Routes, Route, BrowserRouter, Navigate } from "react-router-dom";
import { Dashboard } from "./features/pages/dashboard/Dashboard";
import { selectGithubUser } from "./features/github/githubSlice";
import { useAppSelector } from "./app/hooks";
import { useSelector } from "react-redux";

function Hello() {
  let userName: string | undefined;
  userName = useSelector((state: RootState) => {
    return state.github.user?.name;
  });
  return <h1>Hello {userName ? userName : "anonymous"}!</h1>;
}

const ProtectedRoute = ({ children }: { children: any }) => {
  const user = useAppSelector(selectGithubUser);

  if (!user) {
    return <Navigate to="/" replace />;
  }

  return children;
};

function App() {
  return (
    <Provider store={store}>
      <BrowserRouter>
        <Hello></Hello>
        <nav className="App-navigation">
          <Link className="App-link" to="/">Home</Link>
          <Link className="App-link" to="/repositories">Repositories</Link>
          <Link className="App-link" to="/dashboard">Dashboard</Link>
        </nav>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route
            path="/repositories"
            element={
              <ProtectedRoute>
                <Repositories />
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
  );
}

export default App;
