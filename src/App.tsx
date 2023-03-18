import React from 'react';
import { Navigate, Route, Routes } from 'react-router-dom';
import './App.css';
import Footer from './components/Footer';
import Header from './components/Header';
import Home from './pages/Home/Home';
import Project from './pages/Project/Project';

function App() {
  return (
    <div className='App'>
      <Header />

      <Routes>
        <Route path='/' element={<Home />} />
        <Route path='/:project' element={<Project />} />
        <Route path='*' element={<Navigate to='/' replace />} />
      </Routes>

      <Footer />
    </div>
  );
}

export default App;
