import React from 'react';
import { BrowserRouter as Router, Routes, Route, Link } from 'react-router-dom';
import './App.css';

import Home from './pages/Home';
import Java from './pages/Java';
import JavaScript from './pages/JavaScript';
import NodeJS from './pages/NodeJS';
import ReactJS from './pages/ReactJS';

function App() {
  return (
    <Router>
      <div className="App">
        <nav className="menu">
          <ul>
            <li><Link to="/Home">Home</Link></li>
            <li><Link to="/java">Java</Link></li>
            <li><Link to="/javascript">JavaScript</Link></li>
            <li><Link to="/nodejs">NodeJS</Link></li>
            <li><Link to="/reactjs">ReactJS</Link></li>
          </ul>
        </nav>
        <header>
          <h1>개발 블로그 페이지</h1>
        </header>
        <Routes>
          <Route path="/Home" element={<Home />} />
          <Route path="/java" element={<Java />} />
          <Route path="/javascript" element={<JavaScript />} />
          <Route path="/nodejs" element={<NodeJS />} />
          <Route path="/reactjs" element={<ReactJS />} />
        </Routes>
      </div>
    </Router>
  );
}

export default App;