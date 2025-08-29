import { useEffect, useState } from "react";

export default function ThemeToggle() {
  const [dark, setDark] = useState(
    () => localStorage.getItem("theme") === "dark"
  );

  useEffect(() => {
    const root = document.documentElement;
    if (dark) {
      root.classList.add("dark");
      localStorage.setItem("theme", "dark");
    } else {
      root.classList.remove("dark");
      localStorage.setItem("theme", "light");
    }
  }, [dark]);

  return (
    <button className="btn border-zinc-300 dark:border-zinc-700"
      onClick={() => setDark(d => !d)}>
      {dark ? "🌙 Dark" : "☀️ Light"}
    </button>
  );
}