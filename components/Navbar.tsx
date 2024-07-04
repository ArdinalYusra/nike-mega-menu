import { NIKE_ITEMS } from "@/constants";
import Image from "next/image";
import Link from "next/link";
import React from "react";
import { FaRegHeart } from "react-icons/fa";
import { IoBagOutline, IoSearch } from "react-icons/io5";
import MegaMenu from "./MegaMenu";

const Navbar = () => {
  return (
    <div className="flex justify-between items-center px-20 py-5">
      <div>
        <Image
          src={"/nike-logo.png"}
          alt="Nike Logo"
          width={100}
          height={100}
        />
      </div>
      <div className="flex gap-5">
        {NIKE_ITEMS.map((item) => (
          <div key={item.category} className="group">
            <Link
              href={item.href}
              className="text-lg font-semibold py-1 hover:border-b-[3px] border-black"
            >
              {item.category}
              {item.product && <MegaMenu product={item.product} />}
            </Link>
          </div>
        ))}
      </div>
      <div className="flex gap-5">
        <div className="relative">
          <input
            type="text"
            placeholder="Search"
            className="py-2 pl-10 w-48 rounded-full text-lg bg-slate-100 hover:bg-slate-200"
          />
          <IoSearch className="absolute top-[50%] translate-y-[-50%] left-2" />
        </div>
        <div className="flex items-center gap-5 text-lg">
          <FaRegHeart />
          <IoBagOutline />
        </div>
      </div>
    </div>
  );
};

export default Navbar;
