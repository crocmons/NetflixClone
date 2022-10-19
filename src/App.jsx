import React from "react";
import {BrowserRouter, Routes, Route} from "react-router-dom";
import "./App.css";
import Login from "./pages/Login";
import Movies from "./pages/Movies";
import Netflix from "./pages/Netflix";
import Player from "./pages/Player";
import Signup from "./pages/Signup";
import TvShows from "./pages/TvShows";
import UserLiked from "./pages/UserLiked";

const App = () => {
  return (
    <BrowserRouter>
    <Routes>
      <Route exact path="/login" element={<Login />}/>
      <Route exact path="/signup" element={<Signup />}/>
      <Route exact path="/player" element={<Player />}/>
      <Route exact path="/movies" element={<Movies />}/>
      <Route exact path="/tv" element={<TvShows />}/>
      <Route exact path="/mylist" element={<UserLiked />}/>
      <Route exact path="/" element={<Netflix />}/>
    </Routes>
    </BrowserRouter>
  )
}

export default App