import React from "react";
import {
  HashRouter as Router,
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
import styled from "styled-components";

const Container = styled.div`
  padding: 1rem;
`;

export default () => (
  <Router>
    <>
      <Header />
      <Switch>
        <Route path="/movie/:id" component={MovieDetail} />
        <Route path="/tv/:id" component={TVDetail} />
        <Container>
          <Route path="/" exact component={Home} />
          <Route path="/tv" exact component={TV} />
          <Route path="/search" component={Search} />
        </Container>
        <Redirect from="*" to="/" />
      </Switch>
    </>
  </Router>
);
