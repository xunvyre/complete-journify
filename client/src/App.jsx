import React from 'react';
import Home from './pages/Home';
import LoginPage from './pages/LoginPage';
import Single from './pages/Single';
import {BrowserRouter as Router, Routes, Route} from 'react-router-dom';


const App = () =>
{
  return (
    <Router>
      <Routes>

        <Route path="/" element={<Home/>} />
        <Route path="/login" element={<LoginPage/>} />
        <Route path="/journals/:id" element={<Single/>} />

      </Routes>
    </Router>
  )
};

export default App;