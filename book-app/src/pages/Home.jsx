import { useEffect, useMemo, useState } from "react";
import { fetchBooks } from "../utils/api";
import Loader from "../components/Loader";
import ErrorBox from "../components/ErrorBox";
import SearchBar from "../components/SearchBar";
import BookCard from "../components/BookCard";
import Pagination from "../components/Pagination";

const PAGE_SIZE = 12;

export default function Home() {
  const [books, setBooks] = useState([]);
  const [q, setQ] = useState("");
  const [loading, setLoading] = useState(true);
  const [err, setErr] = useState("");
  const [page, setPage] = useState(1);

  useEffect(() => {
    let on = true;
    (async () => {
      try {
        setLoading(true);
        const data = await fetchBooks();
        if (on) setBooks(data || []);
      } catch (e) {
        setErr(e.message || "Failed to load");
      } finally {
        setLoading(false);
      }
    })();
    return () => { on = false; };
  }, []);

  // filter client-side (title/author)
  const filtered = useMemo(() => {
    if (!q.trim()) return books;
    const term = q.toLowerCase();
    return books.filter(b => {
      const title = (b.title || "").toLowerCase();
      const authors = Array.isArray(b.authors) ? b.authors.join(" ").toLowerCase() : (b.author || "").toLowerCase();
      return title.includes(term) || authors.includes(term);
    });
  }, [books, q]);

  const totalPages = Math.max(1, Math.ceil(filtered.length / PAGE_SIZE));
  const pageItems = filtered.slice((page-1)*PAGE_SIZE, page*PAGE_SIZE);

  useEffect(() => { setPage(1); }, [q]); 
  if (loading) return <Loader />;
  if (err) return <ErrorBox message={err} />;

  return (
    <section className="space-y-4">
      <SearchBar value={q} onChange={setQ} placeholder="Search by title or author..." />
      <div className="grid gap-4 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4">
        {pageItems.map(b => <BookCard key={b.id} book={b} />)}
      </div>
      <Pagination page={page} total={totalPages} onPage={setPage} />
    </section>
  );
}