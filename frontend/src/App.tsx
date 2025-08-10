import { BrowserRouter, Routes, Route, Link } from "react-router-dom";
import PlayersPage from "./pages/PlayersPage";

export default function App() {
  return (
    <BrowserRouter>
      <nav>
        <Link to="/">Home</Link> | <Link to="/players">Players</Link>
      </nav>
      <Routes>
        <Route path="/" element={<h1>Welcome to Tennis Buddy</h1>} />
        <Route path="/players" element={<PlayersPage />} />
      </Routes>
    </BrowserRouter>
  );
}