// src/components/Navbar.jsx
import { Link, NavLink } from "react-router-dom";
import ThemeToggle from "./ThemeToggle";

export default function Navbar() {
  return (
    <header className="border-b border-zinc-200 dark:border-zinc-800">
      <div className="container py-4 flex items-center justify-between">
        <Link to="/" className="text-xl font-semibold">Book Manager</Link>
        <nav className="flex items-center gap-3">
          <NavLink to="/" className="btn border-zinc-300 dark:border-zinc-700">Home</NavLink>
          <NavLink to="/favorites" className="btn border-zinc-300 dark:border-zinc-700">Favorites</NavLink>
          <ThemeToggle />
        </nav>
      </div>
    </header>
  );
}
