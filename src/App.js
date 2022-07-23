import React from "react";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import { Home } from "./Pages/Home";
import { Team } from "./Pages/Team";
import { Projects } from "./Pages/Projects";
import { Documents } from "./Pages/Documents"
import { Calendar } from "./Pages/Calendar";
import { Navbar } from "./Components/Navbar";

const App = () => {
  return (
    <>
      <Router>
        <Navbar />
        <Switch>
          <Route exact path="/" component={Home}>
            <Home />
          </Route>
          <Route path="/team" component={Team}>
            <Team />
          </Route>
          <Route path="/projects" component={Projects}>
            <Projects />
          </Route>
          <Route path="/calendar" component={Calendar}>
            <Calendar />
          </Route>
          <Route path="/documents" component={Documents}>
            <Documents />
          </Route>
        </Switch>
      </Router>
    </>
  );
};

export default App;
