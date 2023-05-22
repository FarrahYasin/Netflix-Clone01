import 'bootstrap/dist/css/bootstrap.min.css';

import './App.css';

import React from 'react';
import Home from './components/Home';
import { Route, Routes } from 'react-router-dom';


function App() {
  return (
    <div className='App'>
    <Routes>
        <Route path='/' element={<Home />}></ Route>
      </Routes>

    </div>
  );
}

export default App;