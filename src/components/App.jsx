import React from 'react';
import { Routes, Route } from 'react-router-dom';
import Homepage from './Homepage/Homepage';
import Movies from './Movies/Movies';
import Navbar from './Navbar/Navbar';

export const App = () => {
  return (
    <>
      <Routes>
        <Route path="/" element={<Navbar />} />
        <Route path="/movies" element={<Movies />} />
      </Routes>
    </>
  );
};
