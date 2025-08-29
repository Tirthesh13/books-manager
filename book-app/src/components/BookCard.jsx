import { Link } from "react-router-dom";
import { useFavorites } from "../context/FavoritesContext";


export default function BookCard({ book }) {
  const { add, remove, isFav } = useFavorites();
  const fav = isFav(book.id);

  return (
    <div className="card flex flex-col gap-3">
      <Link to={`/book/${book.id}`} className="block">
          <img src={book.coverImage} alt={book.title} className="w-full h-48 object-cover rounded-xl" />
      </Link>

      <div className="flex-1">
        <h3 className="font-semibold line-clamp-2">{book.title}</h3>
        <p className="text-sm text-zinc-600 dark:text-zinc-400">
          {Array.isArray(book.authors) ? book.authors.join(", ") : "Unknown"}
        </p>
        <p className="text-xs mt-1">{book.publishedYear}</p>
      </div>

      <div className="flex gap-2">
        <Link to={`/book/${book.id}`} className="btn border-zinc-300 dark:border-zinc-700">Details</Link>
        {fav ? (
          <button onClick={() => remove(book.id)} className="btn border-zinc-300 dark:border-zinc-700">Remove ★</button>
        ) : (
          <button onClick={() => add(book)} className="btn border-zinc-300 dark:border-zinc-700">Add to Favorites ☆</button>
        )}
      </div>
    </div>
  );
}