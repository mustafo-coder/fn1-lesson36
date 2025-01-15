import React from "react";
import LeftNavbar from "@/components/azizbek/LeftNavbar";
import TopNavbar from "@/components/azizbek/TopNavbar";
import Link from "next/link";


export default function Dashboard() {
  return (
    <div className=" flex w-full">
      <LeftNavbar />

      <div className="w-full h-full ">
        <TopNavbar />
        <div className="w-full h-[1100px] bg-white text-black pt-[32px] pl-[32px] pr-[32px]">
          <div className="flex justify-between h-[127px]">
            <div className="flex flex-col ">
              <h1 className="text-3xl font-bold mb-2">Good morning, Jake</h1>
              <p className="text-gray-500 mb-8">
                Here is what’s happening with your job search applications from
                July 19 - July 25.
              </p>
            </div>
            <div className="flex justify-between w-[180px] h-[50px] items-center border p-3">
              <p>Jul 19 - Jul 25</p>
              <img src="/images/azizbek/Icon.svg" alt="Kalendar image" />
            </div>
          </div>

          <div className="flex">
            <div>
              <div className="border w-[258px] h-[158px] mb-[24px] pl-[24px] pt-[24px]">
                <p className="text-xl mb-[27px] ">Total Jobs Applied</p>
                <p className="text-5xl font-bold ">45</p>
              </div>

              <div className="border w-[258px] h-[158px] pl-[24px] pt-[24px]">
                <p className="text-xl mb-[27px] ">Interviewed</p>
                <p className="text-5xl font-bold ">18</p>
              </div>
            </div>

            <div className="border ml-[24px] pl-[24px] pt-[24px]">
              <p className="text-xl w-[340px] mb-[42px]">Jobs Applied Status</p>
              <img src="/images/azizbek/MainContent.svg" alt="" />
              <div className="flex">
                <Link href={"/all"} className="flex">
                  <p className="text-[#4640de] mr-4">View All Applications</p>
                  <img src="/images/azizbek/IconRight.svg" alt="" />
                </Link>
              </div>
            </div>

            <div className="border h-[340px] w-full ml-8 ">
              <p className="text-xl w-full ml-8 mt-6 mb-5">
                Upcomming Interviews
              </p>
              <hr />
              <div className="flex justify-between px-8 mt-4 mb-4">
                <p>Today, 26 November</p>
                <img src="/images/azizbek/RigthLeft.svg" alt="" />
              </div>
              <hr />
              <div className="flex ml-8  mt-5">
                <p className="mr-[20px]">10:00 AM</p>
                <img src="images/azizbek/Line.svg" alt="" />
              </div>
              <div className="flex ml-8 ">
                <p className="mt-10">10:30 AM</p>
                <div className="w-[317px] h-20 bg-[#e9ebfd] mt-2 ml-3 flex items-center justify-around">
                  <img
                    src="/images/azizbek/human.png"
                    className="bg-blue-400 rounded-full  ml-[16px]"
                    alt=""
                  />
                  <div className="  ">
                    <p className="font-bold">Joe Bartmann</p>
                    <p>HR Manager at Divvy</p>
                  </div>
                </div>
              </div>
              <div className="flex ml-8  mt-5">
                <p className="mr-[20px]">10:00 AM</p>
                <img src="images/azizbek/Line.svg" alt="" />
              </div>
            </div>
          </div>
          <div className="border border-b-0 mt-8 h-20 flex flex-col justify-center">
            <p className="ml-3">Recent Applications History</p>
          </div>
          <div className="border h-[480px] p-6">
            <div className="flex w-full bg-[#f8f8fd] h-[112px]   justify-between p-6 mb-8">
              <img src="/images/azizbek/Nomad.svg" alt="" />
              <div className="">
                <p className="font-bold mb-2">Social Media Assistant</p>
                <p className="text-gray-500">Nomad Paris France Full-time</p>
              </div>
              <div>
                <p className="font-bold mb-2">Date Applied</p>
                <p className="text-gray-500">24 July 2021</p>
              </div>
              <button className="w-[117px] h-[34px] rounded-2xl border-[#ffbb36] text-[#ffbb36]">
                In Review
              </button>
              <p className="text-3xl">...</p>
            </div>

            <div className="flex w-full bg-[#f8f8fd] h-[112px]   justify-between p-6 mb-8">
              <img src="/images/azizbek/U.svg" alt="" />
              <div className="">
                <p className="font-bold mb-2">Social Media Assistant</p>
                <p className="text-gray-500">Nomad Paris France Full-time</p>
              </div>
              <div>
                <p className="font-bold mb-2">Date Applied</p>
                <p className="text-gray-500">24 July 2021</p>
              </div>
              <button className="w-[117px] h-[34px] rounded-2xl border-[#4640de] text-[#4640de]">
                Shortlisted
              </button>
              <p className="text-3xl">...</p>
            </div>

            <div className="flex w-full bg-[#f8f8fd] h-[112px]   justify-between p-6">
              <img src="/images/azizbek/Company Logo.svg" alt="" />
              <div className="">
                <p className="font-bold mb-2">Social Media Assistant</p>
                <p className="text-gray-500">Nomad Paris France Full-time</p>
              </div>
              <div>
                <p className="font-bold mb-2">Date Applied</p>
                <p className="text-gray-500">24 July 2021</p>
              </div>
              <button className="w-[117px] h-[34px] rounded-2xl border-[#ff6550] text-[#ff6550]">
                Declined
              </button>
              <p className="text-3xl">...</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
