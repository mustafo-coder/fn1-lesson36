import Category from "@/components/Category";
import Discover from "@/components/Discover";
import RecommendeCompany from "@/components/RecommendeCompany";
import Results from "@/components/Results";
import React from "react";
import Latest from "@/components/shoxrux/latest-jobs";
import FeaturedJobs from "@/components/FeaturedJobs";

export default function page() {
  return (
    <div>
      <Discover />
      <FeaturedJobs />
      <Latest />
    </div>
  );
}
