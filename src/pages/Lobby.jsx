import { Link } from "react-router-dom";

function Lobby() {
  return (
    <main>
      <h1>Feud Online - Lobby</h1>
      <p>Create or join a room here.</p>
      <nav>
        <Link to="/leaderboard">View Leaderboard</Link>
      </nav>
    </main>
  );
}
export default Lobby