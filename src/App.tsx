import { BrowserRouter as Router, Switch, Route } from "react-router-dom"
import { BooksProvider } from "./contexts/BooksContext";
import { Detail } from "./pages/Detail"
import { Home } from "./pages/Home"
import "./styles/global.scss"

export function App() {
  return (
    <Router>
      <BooksProvider>
        <Switch>
          <Route path="/detail">
            <Detail />
          </Route>
          <Route path="/">
            <Home />
          </Route>
        </Switch>
      </BooksProvider>
    </Router>
  );
}