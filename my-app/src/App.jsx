import React from 'react';
import { useState } from 'react';
import Conditional from './components/conditional.jsx';
import Home from './components/Home.jsx';
import About from './components/About.jsx';
const App = () => {

return (
    <div>
        <Conditional />
        <Home />
        <About /> 
    </div>
);
}
export default App;