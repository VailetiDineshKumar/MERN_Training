import React from 'react';
import { useState } from 'react';
import Conditional from './components/conditional.jsx';
import Home from './components/Home.jsx';
import About from './components/About.jsx';
const App = () => {

return (
    <div>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About />} />
      </Routes>
        <Conditional />
        <Home />
    </div>
);
}
export default App;