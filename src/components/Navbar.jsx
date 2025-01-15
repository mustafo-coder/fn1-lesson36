import Image from "next/image";
import Link from "next/link";
import React from "react";

const Navbar = () => {
  return (
    <nav className="flex justify-between container mt-3 items-center">
      <div className="flex gap-11 items-center">
        <Link href="/">
          <Image src="/Logo2.svg" alt="Logo" height={36} width={160} />
        </Link>
        <div className="text-[#515B6F] flex gap-[26px]">
          <Link
            className="hover:text-[#4640DE] transition-colors duration-200"
            href="/jobs"
          >
            Find Jobs
          </Link>
          <Link
            className="hover:text-[#4640DE] transition-colors duration-200"
            href="/companies"
          >
            Browse Companies
          </Link>
        </div>
      </div>
      <div className="flex gap-4">
        <button className="bg-white text-[#4640DE] w-[92px] h-[50px] border border-[#4640DE] rounded-md hover:text-white hover:bg-[#4640DE] transition duration-300">
          Login
        </button>
        <button className="bg-[#4640DE] text-white w-[108px] h-[50px] rounded-md hover:bg-[#3630B8] transition  duration-300">
          Sign Up
        </button>
      </div>
    </nav>
  );
};

export default Navbar;
