"use client";

import { useState } from "react";
import Image from "next/image";
import Link from "next/link";

import { ArrowDownToSquare, ArrowRightToSquare } from "@gravity-ui/icons";
import { Avatar, Button } from "@heroui/react";
import { Menu, X } from "lucide-react";

import { authClient } from "@/lib/auth-client";
import Navlink from "./Navlink";

const Navbar = () => {
  const userData = authClient.useSession();
  const user = userData.data?.user;

  const isLoading = userData.isPending;

  const [open, setOpen] = useState(false);

  const handleSignOut = async () => {
    await authClient.signOut();
  };

  return (
    <div className="border-b px-3">
      <nav className="flex justify-between items-center py-3 max-w-7xl mx-auto">
        {/* 🔹 LOGO */}
        <div className="flex gap-2 items-center">
          <Image src="/logo.png" alt="logo" width={30} height={30} />
          <Link href="/" className="font-black text-lg">
            Book Borrowing.
          </Link>
        </div>

        {/* 🔹 DESKTOP MENU */}
        <ul className="hidden md:flex items-center gap-6 text-sm">
          <li>
            <Navlink href="/">Home</Navlink>
          </li>
          <li>
            <Navlink href="/all-books">All Books</Navlink>
          </li>
          <li>
            <Navlink href="/profile">Profile</Navlink>
          </li>
        </ul>

        {/* 🔹 RIGHT SIDE (DESKTOP) */}
        <div className="hidden md:flex items-center gap-4">
          {isLoading ? (
            <span>Loading...</span>
          ) : !user ? (
            <>
              <Link href="/signup">
                <Button className="bg-[#34A853] text-white">
                  <ArrowDownToSquare /> SignUp
                </Button>
              </Link>
              <Link href="/signin">
                <Button className="bg-[#34A853] text-white">
                  <ArrowRightToSquare /> SignIn
                </Button>
              </Link>
            </>
          ) : (
            <div className="flex items-center gap-3">
              <span className="text-sm">{user?.name}</span>
              <Avatar size="sm">
                <Avatar.Image src={user?.image} />
                <Avatar.Fallback>{user?.name?.charAt(0)}</Avatar.Fallback>
              </Avatar>
              <Button onClick={handleSignOut} size="sm" variant="danger">
                SignOut
              </Button>
            </div>
          )}
        </div>

        {/* 🔹 MOBILE MENU BUTTON */}
        <button className="md:hidden" onClick={() => setOpen(!open)}>
          {open ? <X /> : <Menu />}
        </button>
      </nav>

      {/* 🔻 MOBILE MENU */}
      {open && (
        <div className="md:hidden px-4 pb-4 space-y-4">
          <ul className="flex flex-col gap-3 text-sm">
            <li>
              <Navlink href="/">Home</Navlink>
            </li>
            <li>
              <Navlink href="/all-books">All Books</Navlink>
            </li>
            <li>
              <Navlink href="/profile">Profile</Navlink>
            </li>
          </ul>

          {!user ? (
            <div className="flex flex-col gap-2">
              <Link href="/signup">
                <Button className="bg-[#34A853] text-white w-full">
                  SignUp
                </Button>
              </Link>
              <Link href="/signin">
                <Button className="bg-[#34A853] text-white w-full">
                  SignIn
                </Button>
              </Link>
            </div>
          ) : (
            <div className="flex flex-col gap-3">
              <div className="flex items-center gap-2">
                <Avatar size="sm">
                  <Avatar.Image src={user?.image} />
                  <Avatar.Fallback>{user?.name?.charAt(0)}</Avatar.Fallback>
                </Avatar>
                <span>{user?.name}</span>
              </div>

              <Button onClick={handleSignOut} variant="danger">
                SignOut
              </Button>
            </div>
          )}
        </div>
      )}
    </div>
  );
};

export default Navbar;
