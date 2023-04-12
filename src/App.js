import React from 'react';
import {Routes, Route} from "react-router-dom";
import Home from "./pages/Home";
import Ryul from './pages/Ryul';
import Lee from './pages/Lee';
import Hang from './pages/Hang';
import RyulTheme1 from './pages/Ryultheme1';
import RyulTheme2 from './pages/Ryultheme2';
import RyulTheme3 from './pages/Ryultheme3';
import LeeTheme1 from './pages/Leetheme1';
import LeeTheme2 from './pages/Leetheme2';
import LeeTheme3 from './pages/Leetheme3';
import HangTheme1 from './pages/Hangtheme1';
import HangTheme2 from './pages/Hangtheme2';
import HangTheme3 from './pages/Hangtheme3';

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
        <Route path="/lee/theme1" element={<LeeTheme1/>} />
        <Route path="/lee/theme2" element={<LeeTheme2/>} />
        <Route path="/lee/theme3" element={<LeeTheme3/>} />
        <Route path="/hang/theme1" element={<HangTheme1/>} />
        <Route path="/hang/theme2" element={<HangTheme2/>} />
        <Route path="/hang/theme3" element={<HangTheme3/>} />
      </Routes>
    </div>
  );
}

export default App;
