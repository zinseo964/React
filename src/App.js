import React from 'react';
import {Routes, Route} from "react-router-dom";
import Home from "./pages/Home";
import Ryul from './pages/Ryul';
import Lee from './pages/Lee';
import Hang from './pages/Hang';
import RyulTheme1 from './pages/Ryultheme1';

function App() {
  return (
    <div className="App">
      <Routes>
        <Route path="/" element={<Home/>} />
        <Route path="/ryul" element={<Ryul/>} />
        <Route path="/lee" element={<Lee/>} />
        <Route path="/hang" element={<Hang/>} />
        <Route path="/ryul/theme1" element={<RyulTheme1/>} />
      </Routes>
    </div>
  );
}

export default App;
