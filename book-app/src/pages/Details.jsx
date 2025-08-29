import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { fetchBookById } from "../utils/api";
import Loader from "../components/Loader";
import ErrorBox from "../components/ErrorBox";
import { useFavorites } from "../context/FavoritesContext";

export default function Details() {
  const { id } = useParams();
  const [book, setBook] = useState(null);
  const [loading, setLoading] = useState(true);
  const [err, setErr] = useState("");
  const { add, remove, isFav } = useFavorites();

  useEffect(() => {
    (async () => {
      try {
        setLoading(true);
        const data = await fetchBookById(id);
        setBook(data);
      } catch (e) {
        setErr(e.message || "Failed to load");
      } finally {
        setLoading(false);
      }
    })();
  }, [id]);

  if (loading) return <Loader />;
  if (err) return <ErrorBox message={err} />;
  if (!book) return null;

  const authors = Array.isArray(book.authors) ? book.authors.join(", ") : ("Unknown");
  const year = book.publishedYear || "—";
  const desc = book.description || "No description available.";
  const cover = book.coverImage || null;

  const fav = isFav(book.id);

  return (
    <article className="card">
      <div className="grid md:grid-cols-3 gap-6">
        <div>
          {cover ? (
            <img src={cover} alt={book.title} className="w-full rounded-xl object-cover" />
          ) : (
            <div className="w-full aspect-[3/4] grid place-items-center bg-zinc-100 dark:bg-zinc-700 rounded-xl text-6xl">📘</div>
          )}
        </div>
        <div className="md:col-span-2 space-y-3">
          <h1 className="text-2xl font-semibold">{book.title}</h1>
          <p className="text-zinc-600 dark:text-zinc-400"><b>Author(s):</b> {authors}</p>
          <p className="text-zinc-600 dark:text-zinc-400"><b>First Published:</b> {year}</p>
          <p className="mt-2 leading-relaxed">{desc}</p>
          <div className="pt-3">
            {fav ? (
              <button className="btn border-zinc-300 dark:border-zinc-700" onClick={() => remove(book.id)}>Remove from Favorites ★</button>
            ) : (
              <button className="btn border-zinc-300 dark:border-zinc-700" onClick={() => add(book)}>Add to Favorites ☆</button>
            )}
          </div>
        </div>
      </div>
    </article>
  );
}