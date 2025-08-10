import { Link } from "react-router-dom";

export default function Header() {
  return (
    <header
      style={{
        position: "sticky",
        top: 0,
        backgroundColor: "#282c34",
        padding: "10px 20px",
        display: "flex",
        justifyContent: "space-between",
        alignItems: "center",
        color: "white",
        zIndex: 1000,
      }}
    >
      <h1 style={{ margin: 0, fontSize: "1.5rem" }}>Tennis Buddy</h1>
      <nav>
        <Link to="/" style={{ color: "white", marginRight: "15px", textDecoration: "none" }}>
          Home
        </Link>
        <Link to="/players" style={{ color: "white", textDecoration: "none" }}>
          Players
        </Link>
      </nav>
    </header>
  );
}