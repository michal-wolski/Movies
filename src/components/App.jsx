import React from 'react';
import { Routes, Route } from 'react-router-dom';
import Homepage from './Homepage/Homepage';
import Movies from './Movies/Movies';
import Navbar from './Navbar/Navbar';
import MoviesDetailPage from './MovieDetailsPage/MovieDetailsPage.js';
import Cast from './Cast/Cast';
import Reviews from './Reviews/Reviews';

export const App = () => {
  return (
    <>
      <Navbar />
      <Routes>
        <Route path="/Movies/" element={<Homepage />} />
        <Route path="/Movies/movies" element={<Movies />} />
        <Route path="/Movies/movie/:movieId" element={<MoviesDetailPage />}>
          <Route path="cast" element={<Cast />} />
          <Route path="reviews" element={<Reviews />} />
        </Route>
      </Routes>
    </>
  );
};
