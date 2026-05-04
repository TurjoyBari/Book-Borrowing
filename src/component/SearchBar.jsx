"use client";

import { Input } from "@heroui/react";

const SearchBar = ({ search, setSearch }) => {
  return (
    <div className="mb-6">
      <Input
        placeholder="Search books..."
        value={search}
        onChange={(e) => setSearch(e.target.value)}
      />
    </div>
  );
};

export default SearchBar;