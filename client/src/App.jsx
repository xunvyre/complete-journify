import {React, useContext} from 'react';
import Home from './pages/Home';
import LoginPage from './pages/LoginPage';
import Single from './pages/Single';
import {BrowserRouter as Router, Routes, Route, Navigate} from 'react-router-dom';
import { AuthContext } from './context/AuthContext';


const App = () =>
{

  const {user} = useContext(AuthContext)
  return (
    <Router>
      <Routes>

        <Route path="/" element={user ? <Home/> : <LoginPage/>} />
        <Route path="/login" element={user ? <Navigate to ='/' /> : <LoginPage/>} />
        <Route path="/journals/:id" element={<Single/>} />

      </Routes>
    </Router>
  )
};

export default App;