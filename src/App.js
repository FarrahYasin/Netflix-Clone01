import 'bootstrap/dist/css/bootstrap.min.css';

import './App.css';

import React from 'react';
import Home from './components/Home';
import { Route, Routes } from 'react-router-dom';
import FavList from './components/FavList';
import NavBar from './components/NavBar'

function App() {
  return (
    <div className='App'>
      <NavBar />

    <Routes>
        <Route path='/' element={<Home />}></ Route>
        <Route path='/fav' element={<FavList />}></ Route>

      </Routes>

    </div>
  );
}

export default App;