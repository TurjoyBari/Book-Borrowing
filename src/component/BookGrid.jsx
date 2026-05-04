"use client";

import BookCard from "@/component/BookCard";

const BookGrid = ({ books }) => {
  return (
    <div className="col-span-10 grid md:grid-cols-3 lg:grid-cols-4 gap-6">
      {books.length > 0 ? (
        books.map((book) => <BookCard key={book.id} book={book} />)
      ) : (
        <p>No books found</p>
      )}
    </div>
  );
};

export default BookGrid;