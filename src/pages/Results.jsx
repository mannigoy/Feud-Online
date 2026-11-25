import { useParams, Link } from "react-router-dom";

export default function Results() {
  const { code } = useParams();

  return (
    <main>
      <h1>Game Results</h1>
      <p>Room: <strong>{code}</strong></p>
      <Link to="/">Home</Link>
    </main>
  );
}