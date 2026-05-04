import { SealCheck, Star, StarFill } from "@gravity-ui/icons";
import { Button, Card, Chip, Separator } from "@heroui/react";
import Image from "next/image";

import Link from "next/link";
import React from "react";


const BookCard = ({ book }) => {

  return (
    <Card className="border rounded-xl">
      <div className="relative w-full aspect-square">
        <Image
          key={book.id}
          src={book?.imageUrl}
          fill
          sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
          alt={book.title}
          className="object-cover rounded-xl"
        />

        <Chip size="sm" className="absolute right-2 top-2">
          {book.category}
        </Chip>
      </div>

      <div>
        <h2 className="font-medium">{book.title}</h2>
      </div>

      <div className="flex flex-col gap-5">
        <div className="flex items-center gap-2">
          <p className="flex gap-1">
            <StarFill/><StarFill/><StarFill/><Star/><Star/>
          </p>
          <p>{book.likes}</p>
        </div>

        

        <div className="flex  items-center gap-2">
          <p className="flex gap-1 items-center">
            <SealCheck />InStock
          </p>
          <p>({book.available_quantity})</p>
        </div>
      </div>

      <Link href={`/all-books/${book.id}`}>
        {" "}
        <Button variant="outline" className={"w-full bg-[#66ba76] font-bold text-[#0e3f1b]"}>
          View Details
        </Button>
      </Link>
    </Card>
  );
};

export default BookCard;
