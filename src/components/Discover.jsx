import Image from "next/image";
import React from "react";

export default function Discover() {
  return (
    <section className="container">
      <div className="mt-12 max-w-lg">
        <h1 className="text-[#25324B] text-7xl font-bold leading-snug">
          <span className="block">Discover</span>
          <span className="block">more than</span>
          <strong className="block text-[#26A4FF]">5000+ Jobs</strong>
        </h1>
        <Image
          src="/Group.svg"
          width={456}
          height={40}
          alt="Group"
          className="my-4"
        />
        <p className="text-[#515B6F] text-lg mb-6">
          Great platform for the job seeker that searching for new career
          heights and passionate about startups.
        </p>

        <div className="flex items-center ">
          <div className="w-[305.5px] h-[57px] border flex items-center bg-white ">
            <Image
              src="/Icon.svg"
              alt="search"
              height={24}
              width={24}
              className="ml-4"
            />
            <input
              type="text"
              placeholder="Job title or keyword"
              className="flex-grow outline-none px-4 text-gray-700"
            />
          </div>

          <div className="w-[305.5px] h-[57px] border flex items-center bg-white ">
            <Image
              src="/IconL.svg"
              alt="location"
              height={24}
              width={24}
              className="ml-4"
            />
            <select
              className="flex-grow outline-none px-4 text-gray-700 bg-white appearance-none"
              defaultValue=""
            >
              <option value="" disabled>
                Select a country
              </option>
              <option value="usa">United States</option>
              <option value="uk">United Kingdom</option>
              <option value="italy">Italy</option>
              <option value="germany">Germany</option>
              <option value="france">France</option>
            </select>
          </div>

          <button className="bg-[#4640DE] text-white flex justify-center items-center w-[250px] h-[57px] hover:bg-[#3630B8] transition ">
            Search job
          </button>
        </div>

        <p className="text-[#515B6F] text-sm mt-4">
          Popular: UI Designer, UX Researcher, Android, Admin
        </p>
      </div>
    </section>
  );
}
