import Link from "next/link";
import BookCard from "./BookCard";
import NewArrivals from "./NewArrivals";
import { Button } from "@heroui/react";

const TopGenerations = async () => {
  const res = await fetch("https://book-borrowing.vercel.app/data.json");
  const books = await res.json();
  const topBooks = books.slice(0, 4);

  return (
    <div className="max-w-7xl mx-auto">
      <h1 className="text-2xl font-bold my-5">Featured Books</h1>

      <NewArrivals books={books} />
      <div className="flex flex-col gap-5 items-center ">
        <div className="grid md:grid-cols-4 gap-5">
          {topBooks.map((book) => (
            <BookCard key={book.id} book={book} />
          ))}
        </div>
        <div>
          <Link href={"/all-books"}>
            <Button className="bg-linear-to-r from-[#34A853]  bg-[#215f36] mt-6 p-5 text-[16px]">
              View all...
            </Button>
          </Link>
        </div>
      </div>
    </div>
  );
};

export default TopGenerations;
