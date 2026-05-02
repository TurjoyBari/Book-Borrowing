"use client";

import { Button, Chip } from "@heroui/react";
import { RxDividerHorizontal } from "react-icons/rx";

import Image from "next/image";
import { StarFill } from "@gravity-ui/icons";

const BookDetails = ({ book }) => {
  if (!book) return null;

  console.log(book.imageUrl);

  return (
    <div className="max-w-7xl mx-auto ">
      <div className="grid md:grid-cols-3 gap-10 items-start">
     
        <div className="flex justify-center md:justify-start">
          <Image
            src={book?.imageUrl}
            alt={book.title}
            width={260}
            height={400}
            className="object-cover rounded-lg shadow-md"
          />
        </div>
      
        <div className="md:col-span-2">
          <h1 className="text-2xl md:text-3xl font-semibold mb-2">
            {book.title}
          </h1>

          <p className="text-sm text-gray-600 mb-2">
            by{" "}
            <span className="text-blue-600 cursor-pointer">{book.author}</span>
          </p>

          
          <div className="flex items-center gap-2 mb-3">
            <span className="text-orange-500 font-semibold">4.7</span>
            <div className="flex">
              {[...Array(5)].map((_, i) => (
                <StarFill
                  key={i}
                  size={16}
                  className=" fill-orange-400"
                />
              ))}
            </div>
            <span className="text-sm text-gray-500">(229 reviews)</span>
          </div>

          
          <Chip size="sm" variant="flat" color="primary" className="mb-4">
            {book.category}
          </Chip>

          <RxDividerHorizontal className="my-4" />

         
          <p className="text-gray-700 leading-7 mb-4">{book.description}</p>

          
          <p className="mb-4">
            <span className="font-semibold">Availability: </span>
            {book.available_quantity > 0 ? (
              <span className="text-green-600">
                In Stock ({book.available_quantity} copies)
              </span>
            ) : (
              <span className="text-red-500">Out of Stock</span>
            )}
          </p>

          
          <div className="flex flex-wrap gap-2 mb-6">
            {book.tags?.map((tag, i) => (
              <Chip key={i} size="sm" variant="bordered">
                #{tag}
              </Chip>
            ))}
          </div>

          
          <div className="flex gap-4">
            <Button color="warning" className="font-semibold">
              Borrow Now
            </Button>
            <Button variant="bordered">Add to Wishlist</Button>
          </div>

          <RxDividerHorizontal className="my-6" />

         
          <h2 className="text-xl font-semibold mb-3">About this book</h2>

          <p className="text-gray-700 leading-7 whitespace-pre-line">
            {book.details}
          </p>
        </div>
      </div>
    </div>
  );
};

export default BookDetails;
