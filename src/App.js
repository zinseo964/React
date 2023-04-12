import React from 'react';
import {Routes, Route} from "react-router-dom";
import Home from "./pages/Home";
import Ryul from './pages/Ryul';
import Lee from './pages/Lee';
import Hang from './pages/Hang';
import RyulTheme1 from './pages/Ryultheme1';
import RyulTheme2 from './pages/Ryultheme2';
import RyulTheme3 from './pages/Ryultheme3';

function App() {
  return (
    <div className="App">
      <Routes>
        <Route path="/" element={<Home/>} />
        <Route path="/ryul" element={<Ryul/>} />
        <Route path="/lee" element={<Lee/>} />
        <Route path="/hang" element={<Hang/>} />
        <Route path="/ryul/theme1" element={<RyulTheme1/>} />
        <Route path="/ryul/theme2" element={<RyulTheme2/>} />
        <Route path="/ryul/theme3" element={<RyulTheme3/>} />
      </Routes>
    </div>
  );
}

export default App;
