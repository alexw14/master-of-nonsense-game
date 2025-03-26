import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import LandingPage from "./pages/LandingPage";
import GamePage from "./pages/GamePage";
import "./App.css";

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/master-of-nonsense" element={<LandingPage />} />
        <Route path="/master-of-nonsense/game" element={<GamePage />} />
      </Routes>
    </Router>
  );
}

export default App;
