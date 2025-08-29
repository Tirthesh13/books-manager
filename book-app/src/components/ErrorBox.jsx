export default function ErrorBox({ message }) {
  return (
    <div className="card border border-red-300 text-red-700 dark:text-red-400">
      {message || "Something went wrong."}
    </div>
  );
}