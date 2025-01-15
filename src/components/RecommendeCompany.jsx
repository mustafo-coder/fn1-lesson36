import { Discord, Foundation, Maze, Nomad, Udacity, Webflow } from '@/images'
import Image from 'next/image';
import React from 'react'

const Companies = [
  {
    id:1,
    name: "Nomad",
    bout: "Nomad is located in Paris, France. Nomad has generates $728,000 in sales (USD).",
    services: ["Business Service"],
    logo: Nomad,
    jobs: 3
  },
  {
    id:2,
    name: "Discord",
    bout: "We'd love to work with someone like you. We care about creating a delightful experience.",
    services: ["Business Service"],
    logo: Discord,
    jobs: 3
  },
  {
    id:3,
    name: "Maze",
    bout: "We're a passionate bunch working from all over the world to build the future of rapid testing together.",
    services: ["Business Service"],
    logo: Maze,
    jobs: 3
  },
  {
    id:4,
    name: "Udacity",
    bout: "Udacity is a new type of online university that teaches the actual programming skills.",
    services: ["Business Service"],
    logo: Udacity,
    jobs: 3
  },
  {
    id:5,
    name: "Webflow",
    bout: "Webflow is the first design and hosting platform built from the ground up for the mobile age.",
    services: ["Business Service","Technology"],
    logo: Webflow,
    jobs: 3
  },
  {
    id:6,
    name: "Foundation",
    bout: "Foundation helps creators mint and auction their digital artworks as NFTs on the Ethereum blockchain.",
    services: ["Business Service","Crypto"],
    logo: Foundation,
    jobs: 3
  }
]

export default function RecommendeCompany() {
  return (
    <div className="container mx-auto mt-36">
      <h2 className="w-[429px] h-[36px] font-bold text-3xl">Recommended Companies</h2>
      <p className="leading-[25px] opacity-50 font">
        Based on your profile, company preferences, and recent activity
      </p>

      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6 mt-8">
        {Companies.map((company) => (
          <div
            key={company.id}
            className="bg-white border-[#D6DDEB] border-[1px] p-6 flex w-[100%] h-[390px] flex-col"
          >
          
            <div className="flex justify-between items-center mb-4">
              <Image
                src={company.logo}
                alt={`${company.name} logo`}
                width={88} 
                height={88} 
                className="rounded" 
              />
              <div className="bg-[#F8F8FD] text-[#4640DE] -mt-14 px-2 py-1 rounded text-sm">
                {company.jobs} Jobs
              </div>
            </div>

          
            <h3 className="text-2xl mt-3  w-[328px] h-[87px] font-semibold text-[24px] leading-[28.8px]">{company.name}</h3>
            <p className="text-gray-600 -mt-8 font-weight-[400] text-[18px] leading-[line-height] ">{company.bout}</p>

            <div className="mt-8 flex flex-wrap gap-2">
              {company.services.map((service, index) => (
                <span
                  key={index}
                  className="inline-block border-[#FFB836] border-[1px] text-[#FFB836] px-3 py-1 rounded-full text-sm"
                >
                  {service}
                </span>
              ))}
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
