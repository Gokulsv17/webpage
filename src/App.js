import logo from './logo.svg';
import './App.css';
import Layout from './Layout/Layout';
import Login from './pages/login/Login';
import Home from './pages/home/Home';
import { useState } from 'react';
import Router from './app.router';


function App() {
  return (
    <div className="bg-info" >
     <Router/>
    
    </div>
  );
}

export default App;
