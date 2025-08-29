export default function SearchBar({ value, onChange, placeholder="Search books..." }) {
  return (
    <input
      value={value}
      onChange={(e) => onChange(e.target.value)}
      placeholder={placeholder}
      className="w-full border rounded-xl px-4 py-2 bg-white dark:bg-zinc-800 border-zinc-300 dark:border-zinc-700"
    />
  );
}