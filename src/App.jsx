import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import LoginPage from './components/login';
import VolunteersPage from './components/VolunteersPage';
import './App.css';

const App = () => {
  return (
    <Router>
      <div>
        <Routes>
          <Route path='/' element={<LoginPage/>}></Route>
          <Route path='/volunteer/homepage' element={<VolunteersPage/>}></Route>
        </Routes>
      </div>
    </Router>
  );
}

export default App;