"use client";

import { useState } from "react";
import CategorySidebar from "./CategorySidebar";
import SearchBar from "./SearchBar";
import BookGrid from "./BookGrid";

const BooksClient = ({ books, categories }) => {
  const [selectedCat, setSelectedCat] = useState("All");
  const [search, setSearch] = useState("");

  const filteredBooks = books.filter((book) => {
    const matchCategory =
      selectedCat === "All" || book.category === selectedCat;

    const matchSearch = book.title
      .toLowerCase()
      .includes(search.toLowerCase());

    return matchCategory && matchSearch;
  });

  return (
    <>
      <SearchBar search={search} setSearch={setSearch} />

      <div className="grid grid-cols-12 gap-6">
        <div className="col-span-2">
          <CategorySidebar
            categories={categories}
            selectedCat={selectedCat}
            setSelectedCat={setSelectedCat}
          />
        </div>

        <BookGrid books={filteredBooks} />
      </div>
    </>
  );
};

export default BooksClient;