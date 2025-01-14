import { Frame, Location, Search } from '@/images'
import Image from 'next/image'
import React from 'react'

export default function DreamCompany() {
  return (
    <div className='container mx-auto mt-36'>
      <div className='flex-col justify-center flex items-center'>
        <Image className='text-[#515B6F]' src={Frame} width={673} height={67} alt="image"/>
        <p className='mt-5 w-[410px] opacity-40 h-[29px] items-center font-normal text-[18px] leading-[28.8px]'>Find the dream companies you dream work for</p>
      </div>
      <div className="mx-auto flex justify-center items-center gap-9 h-[104px] mt-20 bg-white shadow-md  px-8">
      <div className="flex flex-col w-1/2">
        <div className="flex items-center gap-2">
          <Image src={Search} width={19} height={19} alt="search icon" />
          <input
            type="text"
            placeholder="Company name or keyword"
            className="w-full outline-none text-gray-600 placeholder-gray-400 text-sm"
          />
        </div>
        <div className="w-full h-[1px] bg-[#D6DDEB] mt-2"></div>
      </div>

      <div className="w-[1px] h-[56px] bg-[#202430]"></div>

      <div className="flex flex-col items-start w-[413px]">
        <div className="flex items-center gap-2">
          <Image src={Location} width={19} height={19} alt="location icon" />
          <input
            type="text"
            placeholder="Florence, Italy"
            className="w-full outline-none text-gray-600 placeholder-gray-400 text-sm"
          />
        </div>
        <div className="w-full h-[1px] bg-[#D6DDEB] mt-2"></div>
      </div>

      <div>
        <button className="w-[113px] h-[50px] bg-[#4640DE] text-white font-semibold  hover:bg-[#3B38C8]">
          Search
        </button>
      </div>
    </div>
    <p className='mt-2 flex left-10 opacity-40'>Popular : Twitter, Microsoft, Apple, Facebook</p>
    </div>
  )
}
