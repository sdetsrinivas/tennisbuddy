import React from "react";
import { BrowserRouter as Router, Routes, Route, Link } from "react-router-dom";
import Home from "./pages/Home";
import Players from "./pages/Players";

const App: React.FC = () => {
  return (
    <Router>
      <header style={{ background: "#f8f8f8", padding: "10px" }}>
        <nav>
          <Link to="/" style={{ marginRight: "15px" }}>Home</Link>
          <Link to="/players">Players</Link>
        </nav>
      </header>
      <main>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/players" element={<Players />} />
        </Routes>
      </main>
    </Router>
  );
};

export default App;