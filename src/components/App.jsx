import React from 'react';
import { Routes, Route } from 'react-router-dom';
import Homepage from './Homepage/Homepage';
import Movies from './Movies/Movies';
import Navbar from './Navbar/Navbar';
import MoviesDetailPage from './MovieDetailsPage/MovieDetailsPage.js';

export const App = () => {
  return (
    <>
      <Navbar />
      <Routes>
        <Route path="/" element={<Homepage />} />
        <Route path="/movies" element={<Movies />} />
        <Route path="/movies-detail-page" element={<MoviesDetailPage />} />
      </Routes>
    </>
  );
};
