import { createContext, useContext, useMemo } from "react";
import useLocalStorage from "../hooks/useLocalStorage";

const FavoritesContext = createContext();

export function FavoritesProvider({ children }) {
  const [favorites, setFavorites] = useLocalStorage("favorites", []);

  const add = (book) =>
    setFavorites((prev) => (prev.some(b => b.id === book.id) ? prev : [...prev, book]));
  const remove = (id) =>
    setFavorites((prev) => prev.filter((b) => b.id !== id));
  const isFav = (id) => favorites.some((b) => b.id === id);

  const value = useMemo(() => ({ favorites, add, remove, isFav }), [favorites]);
  return <FavoritesContext.Provider value={value}>{children}</FavoritesContext.Provider>;
}

// eslint-disable-next-line react-refresh/only-export-components
export const useFavorites = () => useContext(FavoritesContext);