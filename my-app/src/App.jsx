import React from 'react';
import { useState } from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Conditional from './components/conditional.jsx';
import Home from './components/Home.jsx';
import About from './components/About.jsx';
import Navbar from './components/Navbar.jsx';
import Reducer from './components/Reducer.jsx';
const App = () => {

return (
    <div>
      <Reducer />
    </div>
);
}
export default App;