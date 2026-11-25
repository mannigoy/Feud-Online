import { BrowserRouter, Routes, Route, Navigate } from "react-router-dom";
import Lobby from "./pages/Lobby";
import WaitingRoom from "./pages/WaitingRoom";
import GameBoard from "./pages/GameBoard";
import Results from "./pages/Results";
import Leaderboard from "./pages/Leaderboard";

export default function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Lobby />} />
        <Route path="/room/:code" element={<WaitingRoom />} />
        <Route path="/game/:code" element={<GameBoard />} />
        <Route path="/results/:code" element={<Results />} />
        <Route path="/leaderboard" element={<Leaderboard />} />
        <Route path="*" element={<Navigate to="/" replace />} />
      </Routes>
    </BrowserRouter>
  );
}