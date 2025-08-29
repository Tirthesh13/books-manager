import { Routes, Route, Navigate } from "react-router-dom";
import Navbar from "./components/Navbar.jsx";
import Home from "./pages/Home.jsx";
import Details from "./pages/Details.jsx";
import Favorites from "./pages/Favorites.jsx";

export default function App() {
  return (
    <div className="min-h-screen bg-zinc-50 text-zinc-900 dark:bg-zinc-900 dark:text-zinc-100">
      <Navbar />
      <main className="container py-6">
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/book/:id" element={<Details />} />
          <Route path="/favorites" element={<Favorites />} />
          <Route path="*" element={<Navigate to="/" replace />} />
        </Routes>
      </main>
    </div>
  );
}
