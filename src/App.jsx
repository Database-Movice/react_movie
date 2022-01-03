import React, { Component }  from 'react';
import { BrowserRouter, Route, Switch } from "react-router-dom";
import "./App.css";
import Header from "./components/Header/Header";
import SimpleBottomNavigation from "./components/MainNav";
import Movies from "./Pages/Movies/Movies";
import Series from "./Pages/Series/Series";
import Trending from "./Pages/Trending/Trending";
import DirectorSearch from "./Pages/Director/DirectorSearch";
import ActorSearch from "./Pages/Actor/ActorSearch";
import Search from "./Pages/Search/Search";
import MovieInfo from "./Pages/MovieInfo/MovieInfo.jsx";
import { Container } from "@material-ui/core";

function App() {
  return (
    <BrowserRouter>
      <Header />
      <div className="app">
        <Container>
          <Switch>
            <Route path="/" component={Trending} exact />
            <Route path="/movies" component={Movies} />
            <Route path="/movie/:id" component={MovieInfo} />
            <Route path="/series" component={Series} />
            <Route path="/search/:text" component={Search} />
            <Route path="/director/:name" component={DirectorSearch} />
            <Route path="/actor/:name" component={ActorSearch} />
          </Switch>
        </Container>
      </div>
      <SimpleBottomNavigation />
    </BrowserRouter>
  );
}

export default App;
