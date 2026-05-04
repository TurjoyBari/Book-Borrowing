import BooksClient from "@/component/BooksClient";


const AllBooksPages = async () => {
  const bookRes = await fetch("https://book-borrowing.vercel.app/data.json", {
    cache: "no-store",
  });
  const books = await bookRes.json();

  const catRes = await fetch("https://book-borrowing.vercel.app/category.json", {
    cache: "no-store",
  });
  const categories = await catRes.json();

  return (
    <div className="max-w-7xl mx-auto mt-10 px-4">
      <BooksClient books={books} categories={categories} />
    </div>
  );
};

export default AllBooksPages;