import React from "react";
import FeaturedJobsCard from "./FeaturedJobsCard";
import Link from "next/link";

export default function FeaturedJobs() {
  return (
    <div className="container">
      <div className="flex justify-between items-end mb-12">
        <h1 className="text-3xl  font-extrabold">
          Featured<span className="text-[#26A4FF]">jobs</span>
        </h1>
        <Link href={"#"} className="text-[#4640DE]">Show all jobs -{">"}</Link>
      </div>
      <div className="grid grid-cols-4 gap-8">
        <FeaturedJobsCard />
        <FeaturedJobsCard />
        <FeaturedJobsCard />
        <FeaturedJobsCard />
        <FeaturedJobsCard />
        <FeaturedJobsCard />
        <FeaturedJobsCard />
        <FeaturedJobsCard />
      </div>
    </div>
  );
}
