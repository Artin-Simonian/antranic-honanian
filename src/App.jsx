// App.jsx
import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import HomePage from './pages/HomePage/HomePage';
import Projects from './pages/Projects/Projects';
import Links from './pages/Links/Links';

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/projects" element={<Projects />} />
        <Route path='/links' element={<Links />} />
      </Routes>
    </Router>
  );
}

export default App;
