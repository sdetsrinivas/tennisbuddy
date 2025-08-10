import { useEffect, useState } from "react";
import { getPlayers, Player } from "../api/players";

export default function PlayersPage() {
  const [players, setPlayers] = useState<Player[]>([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    getPlayers()
      .then((data) => setPlayers(data))
      .catch((err) => console.error(err))
      .finally(() => setLoading(false));
  }, []);

  if (loading) return <p>Loading players...</p>;

  return (
    <div>
      <h1>Players</h1>
      <ul>
        {players.map((p) => (
          <li key={p.id}>
            {p.name} — Rating: {p.rating}
          </li>
        ))}
      </ul>
    </div>
  );
}
