import { Revolut } from "@/images";
import Image from "next/image";
import Link from "next/link";
import React from "react";

export default function FeaturedJobsCard() {
  return (
    <Link href={"/jobs/1"} className="border border-slate-200 p-6 flex flex-col gap-4 max-w-full">
      <div className="flex justify-between items-start">
        <Image
          src={Revolut}
          width={"48px"}
          height={"48px"}
          alt="rasm bo'lishi kerak"
          className="rounded-full"
        ></Image>
        <h3 className="border border-[#4640DE] text-[#4640DE] py-0.5 px-3 pb-0.5">
          Full time
        </h3>
      </div>
      <div>
        <h1 className="text-lg font-bold">Email marketing</h1>
        <p className="text-slate-300">
          Revolut <span></span> Madrid, Spain
        </p>
      </div>
      <p className="line-clamp-2 max-w-[226px]">
        Lorem ipsum, dolor sit amet consectetur adipisicing elit. Earum,
        excepturi?
      </p>
      <div className="flex gap-2">
        <h2 className="text-[#FFB836] font-semibold px-4 py-1 rounded-full bg-[#EB85331A]">
          Marketing
        </h2>
        <h2 className="text-[#56CDAD] font-semibold px-4 py-1 rounded-full bg-[#56CDAD1A]">
          Design
        </h2>
      </div>
    </Link>
  );
}
