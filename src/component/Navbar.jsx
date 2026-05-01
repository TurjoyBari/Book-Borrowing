"use client";
import Image from "next/image";
import Link from "next/link";

import { ArrowDownToSquare, ArrowRightToSquare, } from "@gravity-ui/icons";
import { Button } from "@heroui/react";

const Navbar = () => {
  return (
    <div className="border-b px-2">
      <nav className=" flex justify-between items-center  py-3 max-w-7xl mx-auto w-full">
        <div className="flex gap-2 items-center">
          <Image
            src={"/logo.png"}
            alt="logo"
            loading="eager"
            width={30}
            height={30}
            className="object-cover h-auto w-auto"
          />
          <Link href={"/"} className="font-black text-lg">Book Borrowing.</Link>
        </div>

        <ul className="flex items-center gap-5 text-sm">
          <li>
            <Link href={"/"}>Home</Link>
          </li>
          <li>
            <Link href={"/all-books"}>All Books</Link>
          </li>
          
          <li>
            <Link href={"/profile"}>Profile</Link>
          </li>
        </ul>

        <div className="flex gap-4">
          <ul className="flex items-center gap-3 text-sm">
            <li>
              <Link href={"/signup"}>
                <Button className="bg-[#34A853]">
                  <ArrowDownToSquare />
                  SignUp
                </Button>
              </Link>
            </li>
            <li>
              <Link href={"/signin"}>
                <Button className="bg-[#34A853]">
                  <ArrowRightToSquare />
                  SignIn
                </Button>
              </Link>
            </li>
          </ul>
        </div>
      </nav>
    </div>
  );
};

export default Navbar;
