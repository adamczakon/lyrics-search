import React, { Component } from "react";
import AppNavbar from "./component/layout/AppNavbar";
import Home from "./component/tracks/Home";
import LyricsPage from "./component/tracks/LyricsPage";
import ResultsPage from "./component/tracks/ResultsPage";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import { Provider } from "react-redux";
import store from "./store";
import "./App.css";

class App extends Component {
  render() {
    return (
      <Provider store={store}>
        <Router>
          <React.Fragment>
            <AppNavbar />
            <Switch>
              <Route exact path="/" component={Home} />
              <Route exact path="/lyrics/:id" component={LyricsPage} />
              <Route exact path="/:title" component={ResultsPage} />
            </Switch>
          </React.Fragment>
        </Router>
      </Provider>
    );
  }
}

export default App;
