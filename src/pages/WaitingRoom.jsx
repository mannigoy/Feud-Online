import { useParams, Link } from "react-router-dom";

function WaitingRoom() {
  const { code } = useParams();

  return (
    <main>
      <h1>Waiting Room</h1>
      <p>Room Code: <strong>{code}</strong></p>
      <Link to="/">Back to Lobby</Link>
    </main>
  );
}
export default WaitingRoom