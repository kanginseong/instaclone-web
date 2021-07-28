import { useReactiveVar } from "@apollo/client";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import { ThemeProvider } from "styled-components";
import { darkModeVar, isLoggedInVar } from "./apollo";
import Home from "./screens/Home";
import Login from "./screens/Login";
import NotFound from "./screens/NotFound";
import routes from "./routes";
import SignUp from "./screens/SignUp";
import { darkTheme, GlobalStyles, lightTheme } from "./styles";
import { HelmetProvider } from "react-helmet-async";

function App() {
  // You can change isLoggedInVar anywhere, and that will be the starting point for re-renders.
  const isLoggedIn = useReactiveVar(isLoggedInVar);
  const darkMode = useReactiveVar(darkModeVar);
  return (
    <HelmetProvider>
      <ThemeProvider theme={darkMode ? darkTheme : lightTheme}>
        <GlobalStyles />
        <Router>
          <Switch>
            <Route path={routes.home} exact>
              {isLoggedIn ? <Home /> : <Login />}
            </Route>
            {!isLoggedIn ? (
              <Route path={routes.signUp}>
                <SignUp />
              </Route>
            ) : null}
            <Route>
              {/* <Redirect to="/" /> */}
              <NotFound />
            </Route>
          </Switch>
        </Router>
      </ThemeProvider>
    </HelmetProvider>
  );
}

export default App;
