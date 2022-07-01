import React from 'react';
import ReactDOM from 'react-dom';
import Homepage from './Homepage/Homepage';
import Movies from './Movies/Movies';
import Navbar from './Navbar/Navbar';

export const App = () => {
  return (
    <>
      <Navbar />
      <Homepage />
      <Movies />
    </>
  );
};
