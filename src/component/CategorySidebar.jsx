"use client";

const CategorySidebar = ({ categories, selectedCat, setSelectedCat }) => {
  return (
    <div>
      <h1 className="font-bold mb-4">Category</h1>

      <div className="flex flex-col gap-2">
        <button
          onClick={() => setSelectedCat("All")}
          className={`text-left px-3 py-2 rounded ${
            selectedCat === "All" ? "bg-black text-white" : ""
          }`}
        >
          All
        </button>

        {categories.map((cat, i) => (
          <button
            key={i}
            onClick={() => setSelectedCat(cat.name)}
            className={`text-left px-3 py-2 rounded ${
              selectedCat === cat.name
                ? "bg-black text-white"
                : "hover:bg-gray-100"
            }`}
          >
            {cat.name}
          </button>
        ))}
      </div>
    </div>
  );
};

export default CategorySidebar;