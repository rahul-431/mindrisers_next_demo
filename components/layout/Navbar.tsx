"use client";
import { FaBarsStaggered, FaRegHeart, FaRegUser } from "react-icons/fa6";
import IconLink from "../shared/IconLink";
import { IoCartOutline } from "react-icons/io5";
import { FaSearch } from "react-icons/fa";
import Link from "next/link";
import {
  Sheet,
  SheetContent,
  SheetHeader,
  SheetTitle,
  SheetTrigger,
} from "@/components/ui/sheet";
import { useState } from "react";

const navlist = [
  {
    label: "Home",
    href: "#",
  },
  {
    label: "Shop",
    href: "#",
  },
  {
    label: "Pages",
    href: "#",
  },
  {
    label: "Collections",
    href: "#",
  },
  {
    label: "Blog",
    href: "#",
  },
  {
    label: "Contact",
    href: "#",
  },
];
const Navbar = () => {
  const [searchText, setSearchText] = useState<string>("");
  return (
    <div className="flex items-center justify-between px-4 sm:px-6 py-4">
      <div className="block lg:hidden">
        <Sheet>
          <SheetTrigger className="text-lg">
            <FaBarsStaggered />
          </SheetTrigger>
          <SheetContent side="left" className="max-w-min">
            <SheetHeader>
              <SheetTitle className="text-left">RUBIX</SheetTitle>
            </SheetHeader>
            <div className="py-6 px-4 flex flex-col gap-4">
              {navlist.map((item, index) => (
                <Link
                  href={item.href}
                  key={index}
                  className="text-lg hover:text-[#BA933E] font-medium"
                >
                  {item.label}
                </Link>
              ))}
            </div>
          </SheetContent>
        </Sheet>
      </div>
      <h1 className="font-extrabold text-4xl tracking-widest">RUBIX</h1>
      <div className="hidden lg:flex items-center gap-8">
        {navlist.map((item, index) => (
          <Link
            href={item.href}
            key={index}
            className="text-lg hover:text-[#BA933E] font-medium"
          >
            {item.label}
          </Link>
        ))}
      </div>
      <div className="flex gap-3 sm:gap-6 items-center text-lg sm:text-xl">
        <IconLink href="#" icon={<FaRegUser />} />
        <IconLink href="#" icon={<FaRegHeart />} />
        <IconLink href="#" icon={<IoCartOutline />} />
        <Sheet>
          <SheetTrigger className="text-lg">
            <FaSearch />
          </SheetTrigger>
          <SheetContent
            side="top"
            className="w-full max-h-32 sm:max-h-[100px]  justify-center"
          >
            <SheetHeader>
              <SheetTitle className="flex flex-col gap-2 sm:flex-row items-center sm:justify-around">
                <h1 className=" font-extrabold text-2xl sm:text-4xl tracking-wide sm:tracking-widest">
                  RUBIX
                </h1>
                <input
                  type="text"
                  onChange={(e) => setSearchText(e.target.value)}
                  value={searchText}
                  placeholder="Search"
                  className="border-[2px] rounded px-4 py-2 w-full sm:w-96  font-normal"
                />
              </SheetTitle>
            </SheetHeader>
          </SheetContent>
        </Sheet>
      </div>
    </div>
  );
};

export default Navbar;
