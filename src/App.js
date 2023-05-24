
import React from 'react';
import { Route, Routes } from 'react-router-dom';
import Navbar from './components/Navbar';
import Home from './components/Home';
import FavList from './components/FavList';

function App() {
  return (
    <div className="App">
      <Navbar />
      <div className="container mt-4">
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/fav" element={<FavList />} />
        </Routes>
      </div>
    </div>
  );
}

export default App;