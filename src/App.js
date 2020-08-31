import React from "react";
import "./App.css";
import CountryDetailPage from "./page/CountryDetailPage";
import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";
import Home from "./page/Home";
import Header from "./components/Header/Header";

function App() {
  return (
    <Router>
      <Header />
      <Switch>
        <Route
          path="/countries/:countryName"
          component={CountryDetailPage}
        ></Route>
        <Route path="/">
          <Home />
        </Route>
      </Switch>
    </Router>
  );
}

export default App;
