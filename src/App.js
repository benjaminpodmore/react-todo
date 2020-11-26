import React from "react";
import "./App.css";
import { Route, BrowserRouter as Router, Link, Switch } from "react-router-dom";

import TaskList from "./TaskList";

function App() {

  return (
    <Router>
      <nav>
        <ul>
          <li>
            <Link to="/todo">Todos</Link>
          </li>
          <li>
            <Link to="/completed">Completed</Link>
          </li>
        </ul>
      </nav>
      <Switch>
        <Route path="/todo" component={() => <TaskList type="todo" />} />
        <Route path="/completed" component={() => <TaskList type="completed" />} />
      </Switch>
    </Router>
  );
}

export default App;
