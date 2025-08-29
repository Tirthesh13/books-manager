export default function Pagination({ page, total, onPage }) {
  if (total <= 1) return null;
  const pages = Array.from({ length: total }, (_, i) => i + 1);
  return (
    <div className="flex flex-wrap gap-2 justify-center mt-6">
      <button className="btn border-zinc-300 dark:border-zinc-700" disabled={page===1} onClick={() => onPage(page-1)}>Prev</button>
      {pages.map(p => (
        <button key={p}
          className={`btn border-zinc-300 dark:border-zinc-700 ${p===page ? 'font-semibold' : ''}`}
          onClick={() => onPage(p)}>{p}</button>
      ))}
      <button className="btn border-zinc-300 dark:border-zinc-700" disabled={page===total} onClick={() => onPage(page+1)}>Next</button>
    </div>
  );
}