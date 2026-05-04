"use client";

import { Button } from "@heroui/react";
import Image from "next/image";
import Link from "next/link";

export default function HeroPromo() {
  return (
    <section className="px-6 md:px-16 py-16 bg-gray-50">
      <div className="max-w-7xl mx-auto grid md:grid-cols-2 gap-10 items-center">
        
   
        <div className="relative">
          <Image
            src="/girl-books.jpg"
            alt="books"
            className="rounded-2xl object-cover"
            width={450}
            height={450}
          />

        
          <div className="absolute bottom-40 left-85 bg-white/90 backdrop-blur-md p-6 rounded-2xl shadow-lg max-w-xs">
            <h3 className="text-xl font-bold leading-snug">
              Exclusive Sale <br /> On New Books
            </h3>

            <p className="text-sm text-gray-600 mt-2">
              Get 60% Off on all new books. Subscribe now to avail the offer.
            </p>

            <button className="mt-3 text-sm font-semibold underline">
              Subscribe Now
            </button>
          </div>
        </div>

        <div>
          <span className="bg-gray-200 text-sm px-4 py-1 rounded-full">
            Hundreds of Book Genres
          </span>

          <h1 className="text-4xl md:text-5xl font-bold mt-4 leading-tight">
            BookChoix has a big catalog of 12 Million books online
          </h1>

          <p className="text-gray-600 mt-4 max-w-md">
            Efficiently unleash cross-media information without cross-media
            value. Quickly maximize timely deliverables for real-time schemas.
          </p>

          <Link href={"/all-books"}>
              <Button className="bg-linear-to-r from-[#34A853]  bg-[#0e3f1b] mt-5 text-[16px]">
                Browse Now
              </Button>
            </Link>
        </div>

      </div>
    </section>
  );
}