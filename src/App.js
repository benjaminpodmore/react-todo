import React from "react";
import "./App.css";
import {
  Route,
  BrowserRouter as Router,
  Link,
  Switch,
  Redirect,
} from "react-router-dom";

import TaskList from "./TaskList";

function App() {
  return (
    <Router>
      <nav>
        <ul>
          <li>
            <Link className="Link" to="/todo">
              Todos
            </Link>
          </li>
          <li>
            <Link className="Link" to="/completed">
              Completed
            </Link>
          </li>
        </ul>
      </nav>
      <Switch>
        <Route path="/todo" component={() => <TaskList type="todo" />} />
        <Route
          path="/completed"
          component={() => <TaskList type="completed" />}
        />
        <Route path="/">
          <Redirect to="/todo" />
        </Route>
      </Switch>
    </Router>
  );
}

export default App;
