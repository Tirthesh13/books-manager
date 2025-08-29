export const API_URL =
  "https://my-json-server.typicode.com/pranayBaynineventures/assignment-get_all_books/books";

export async function fetchBooks() {
  const res = await fetch(API_URL);
  if (!res.ok) throw new Error("Failed to load books");
  // console.log(res.json());
  return res.json();
}

export async function fetchBookById(id) {
  const res = await fetch(`${API_URL}/${id}`);
  if (!res.ok) throw new Error("Failed to load book");
  // console.log(res.json());
  return res.json();
}
