import React from "react";
import {
  BrowserRouter as Router,
  Route,
  Redirect,
  Switch
} from "react-router-dom";
import Home from "Routes/Home";
import MovieDetail from "Routes/MovieDetail";
import TVDetail from "Routes/TVDetail";
import TV from "Routes/TV";
import Search from "Routes/Search";
import Header from "Components/Header";

export default () => (
  <Router>
    <>
      <Header />
      <Switch>
        <Route path="/" exact component={Home} />
        <Route path="/tv" component={TV} />
        <Route path="/search" component={Search} />
        <Route path="/movie/:id" component={MovieDetail} />
        <Route path="/tv/:id" component={TVDetail} />
        <Redirect from="*" to="/" />
      </Switch>
    </>
  </Router>
);
