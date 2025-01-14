import Image from "next/image";
import Link from "next/link";
import React from "react";

export default function Footer() {
  return (
    <div className="bg-gray-700 flex flex-col text-white py-5">
      <div className=" grid grid-cols-4 px-5">
        <div className="flex flex-col gap-3">
          <div className="flex gap-2 items-start px-5">
            <Image
              className="w-[32px] h-[32px]"
              src={"/Frame3.svg"}
              width={32}
              height={32}
              alt="logo"
            />
            <h2 className="text-[24px] text-white">JobHuntly</h2>
          </div>
          <p className="max-w-96">
            Great platform for the job seeker that passionate about startups.
            Find your dream job easier.
          </p>
        </div>

        <div className="flex flex-col items-start gap-3 pl-5">
          <h2 className="text-[18px]">About</h2>
          <Link href={"#"}>Companies</Link>
          <Link href={"#"}>Pricing</Link>
          <Link href={"#"}>Terms</Link>
          <Link href={"#"}>Advice</Link>
          <Link href={"#"}>Privacy Policy</Link>
        </div>
        <div className="flex flex-col items-start gap-3 pl-5">
          <h2 className="text-[18px]">Resources</h2>
          <Link href={"#"}>Help Docs</Link>
          <Link href={"#"}>Guide</Link>
          <Link href={"#"}>Updates</Link>
          <Link href={"#"}>Contact us</Link>
        </div>
        <div className="flex flex-col items-start gap-3">
          <h2 className="text-[18px]">Get job notifications</h2>
          <span>The latest job news, articles, sent to your inbox weekly.</span>
          <div className="flex gap-2 max-2xl:flex-col">
            <input
              className="w-[223px] h-[50px] pl-3 max-lg:w-[180px] max-lg:h-[30px]"
              type="text"
              placeholder="Email Address"
            />
            <button className="w-[131px] h-[50px] max-lg:w-[100px] max-lg:h-[30px] bg-blue-500 text-white">
              Subscribe
            </button>
          </div>
        </div>
      </div>

      <div className="grid grid-cols-2 py-5 border-t mt-20">
        <h2>2021 @ JobHuntly. All rights reserved.</h2>
        <div className="flex justify-center items-center gap-3">
          <Link
            href={"#"}
            className="flex items-center justify-center w-[32px] h-[32px] rounded-full bg-gray-400"
          >
            <Image
              src={"/Facebook.svg"}
              width={32}
              height={32}
              alt="facebook"
            />
          </Link>
          <Link
            href={"#"}
            className="flex justify-center items-center w-[32px] h-[32px] rounded-full bg-gray-400"
          >
            <Image
              src={"/Instagram.svg"}
              width={20}
              height={20}
              alt="instagram"
            />
          </Link>
          <Link
            href={"#"}
            className="flex justify-center items-center w-[32px] h-[32px] rounded-full bg-gray-400"
          >
            <Image
              src={"/Dribbble.svg"}
              width={20}
              height={20}
              alt="dribbble"
            />
          </Link>
          <Link
            href={"#"}
            className="flex justify-center items-center w-[32px] h-[32px] rounded-full bg-gray-400"
          >
            <Image src={"/LinkedIn.svg"} width={20} height={20} alt="in" />
          </Link>
          <Link
            href={"#"}
            className="flex justify-center items-center w-[32px] h-[32px] rounded-full bg-gray-400"
          >
            <Image src={"/Twitter.svg"} width={20} height={20} alt="twitter" />
          </Link>
        </div>
      </div>
    </div>
  );
}
