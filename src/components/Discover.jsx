import Image from 'next/image';
import React from 'react';

export default function Discover() {
  return (
    <section className='container'>

      <section className="flex justify-between container mt-3 items-center">
        <div className="flex gap-11 items-center">
          <a href="/">
            <Image src="/Logo2.svg" alt="Logo" height={36} width={160} />
          </a>
          <div className="text-[#515B6F] flex gap-[26px]">
            <a className="hover:text-[#4640DE] transition-colors duration-200" href="#">Find Jobs</a>
            <a className="hover:text-[#4640DE] transition-colors duration-200" href="#">Browse Companies</a>
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
      </section>


      <div className="mt-12 max-w-lg">
        <h1 className="text-[#25324B] text-5xl font-bold leading-snug">
          Discover more than <strong className="text-[#26A4FF]">5000+ Jobs</strong>
        </h1>
        <Image src="/Group.svg" width={456} height={40} alt="Group" className="my-4" />
        <p className="text-[#515B6F] text-lg mb-6">
          Great platform for the job seeker that searching for new career heights and passionate about startups.
        </p>

        <div className="flex items-center ">

  <div className="w-[305.5px] h-[57px] border flex items-center bg-white ">
    <Image src="/Icon.svg" alt="search" height={24} width={24} className="ml-4" />
    <input
      type="text"
      placeholder="Job title or keyword"
      className="flex-grow outline-none px-4 text-gray-700"
    />
  </div>


  <div className="w-[305.5px] h-[57px] border flex items-center bg-white ">
    <Image src="/IconL.svg" alt="location" height={24} width={24} className="ml-4" />
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


  <button className="bg-[#4640DE] text-white flex justify-center items-center w-[250px] h-[57px] hover:bg-[#3630B8] transition ">Search job</button>
</div>


        <p className="text-[#515B6F] text-sm mt-4">
          Popular: UI Designer, UX Researcher, Android, Admin
        </p>
      </div>
    </section>
  );
}
