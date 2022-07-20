import React from 'react';
import { Routes, Route } from 'react-router-dom';
import Homepage from './Homepage/Homepage';
import Movies from './Movies/Movies';
import Navbar from './Navbar/Navbar';
import MoviesDetailPage from './MovieDetailsPage/MovieDetailsPage.js';
import Cast from './Cast/Cast';
import Reviews from './Reviews/Reviews';
import noImage from '../images/notFound.png';

export const App = () => {
  return (
    <>
      <Navbar />
      <Routes>
        <Route path="/" element={<Homepage />} />
        <Route path="/movies" element={<Movies />} />
        <Route path="/movie/:movieId" element={<MoviesDetailPage />}>
          <Route path="cast" element={<Cast />} />
          <Route path="reviews" element={<Reviews />} />
        </Route>
      </Routes>
    </>
  );
};
