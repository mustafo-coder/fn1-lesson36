import { Clay, Design, Divy, MediaMonks, Packer, Pentagram, Row, Square, Webflow, WolffOlins } from '@/images'
import Image from 'next/image';
import React from 'react'
const results = {
    totalResults: 24,
    data: [
        {
            id: 1,
            name: "Pentagram",
            jobs: 3,
            logo: Pentagram
        },
        {
            id: 2,
            name: "Wolf Olins",
            jobs: 3,
            logo: WolffOlins
        },
        {
            id: 3,
            name: "Clay",
            jobs: 3,
            logo: Clay
        },
        {
            id: 4,
            name: "MediaMonks",
            jobs: 3,
            logo: MediaMonks
        },
        {
            id: 5,
            name: "Packer",
            jobs: 3,
            logo: Packer
        },
        {
            id: 6,
            name: "Square",
            jobs: 3,
            logo: Square
        },
        {
            id: 7,
            name: "Divy",
            jobs: 3,
            logo: Divy
        },
        {
            id: 8,
            name: "WebFlow",
            jobs: 3,
            logo: Webflow
        }
    ]
};
export default function Results() {
  return (
    <div className='container mx-auto '>
        <div className='flex gap-4 '>
            <Image height={24} width={24} className='-mt-1' src={Design} alt="design"/>
            <p className='text-xl font-semibold'>{results.totalResults} Results</p>
        </div>
        <div className='grid grid-cols-1 w-[1400px] h-[500px] mt-8 sm:grid-cols-2 md:grid-cols-4 gap-5'>  
            {results.data.map((result) => (  
                <div key={result.id} className='border-[#D6DDEB] border-[1px] p-4 flex flex-col items-center justify-center'>  
                <Image src={result.logo} height={88} width={88} alt={`${result.name} logo`} className='h-16 mb-2' /> {/* Adjust logo size accordingly */}  
                 <h3 className='font-semibold text-lg'>{result.name}</h3>  
                <div className='w-[76px] h-[34px] bg-[#F8F8FD] flex items-center justify-center'><p className='text-[#4640DE]'>{result.jobs} Jobs</p></div>  
             </div>  
            ))}  
            </div> 

        <button className='flex gap-4 '>
        <p className='mt-7 text-[#4640DE] font-semibold'>View more Design companies </p>
        <Image src={Row} width={24} height={24} className='mt-7'/>
        </button>
    </div>
  )
}
