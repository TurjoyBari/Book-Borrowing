import React from "react";
import Marquee from "react-fast-marquee";

const NewArrivals = ({ books }) => {
  return (
    <div className="mt-5 mb-5">
      <Marquee>
        {books?.map((book) => (
          <span key={book.id} className="mx-5">
            New Arrivals: {book.title} | Special Discount on Memberships...
          </span>
        ))}
      </Marquee>
    </div>
  );
};

export default NewArrivals;
