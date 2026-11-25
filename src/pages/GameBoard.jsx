import { useParams } from "react-router-dom";

function GameBoard() {
  const { code } = useParams();

  return (
    <main>
      <h1>Game Board</h1>
      <p>Active Room: <strong>{code}</strong></p>
    </main>
  );
}
export default GameBoard