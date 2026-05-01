import { Button } from "@heroui/react";
import Link from "next/link";

const Banner = () => {
  return (
    <div className=" h-[60vh]">
      {/* Overlay */}
      <div className="w-full h-full max-w-7xl mx-auto items-center rounded-lg flex flex-col md:flex-row justify-between ">
        <div className=" text-black ">
          <h1 className="text-4xl md:text-6xl font-bold mb-4 max-w-2xl">
            Find Your Next Read
          </h1>
          <p className="text-lg md:text-xl mb-6 max-w-xl text-gray-600">
            You can borrow 10 books at a time from archive.org.
          </p>

          <div className="flex gap-4">
            <Link href={"/all-books"}>
              <Button className="bg-linear-to-r from-[#34A853]  bg-[#0e3f1b] p-6 text-[16px]">
                Browse Now
              </Button>
            </Link>

           
          </div>
        </div>
        <div>
            <img src="/banner.png" alt=""  className="w-80  md:w-170 h-auto"/>
        </div>
      </div>
    </div>
  );
};

export default Banner;