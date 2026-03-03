import React from 'react';
import { useState } from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Conditional from './components/conditional.jsx';
import Home from './components/Home.jsx';
import About from './components/About.jsx';
const App = () => {

return (
    <div>
      <Router>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route path="/conditional" element={<Conditional />} />
      </Routes>
      </Router>
    </div>
);
}
export default App;