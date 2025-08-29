import { useFavorites } from "../context/FavoritesContext";
import BookCard from "../components/BookCard";

export default function Favorites() {
  const { favorites } = useFavorites();
  return (
    <section>
      <h2 className="text-xl font-semibold mb-4">Your Favorites</h2>
      {favorites.length === 0 ? (
        <p className="text-zinc-600 dark:text-zinc-400">No favorites yet. Add some from the Home page.</p>
      ) : (
        <div className="grid gap-4 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4">
          {favorites.map(b => <BookCard key={b.id} book={b} />)}
        </div>
      )}
    </section>
  );
}