import { Alex, AvatarIcon, Textfield } from "@/images";
import Image from "next/image";
import React from "react";

export default function AccountSettings() {
  return (
    <div className="container px-8 py-6">
      <div className="border-b border-[#D6DDEB] pb-6">
        <h2 className="font-semibold text-xl">Basic Information</h2>
        <p className="text-[#515B6F]">
          This is your personal information that you can update anytime.
        </p>
        {/* <hr color="#D6DDEB" /> */}
      </div>
      <div className="flex justify-between py-6">
        <div className="">
          <h2 className="font-semibold text-xl">Profile Photo</h2>
          <p className="max-w-[259px] text-[#515B6F]">
            This image will be shown publicly as your profile picture, it will
            help recruiters recognize you!
          </p>
        </div>
        <div className="flex gap-5">
          <Image
            src={Alex}
            width={"1244px"}
            height={"1244px"}
            alt="avatar"
            className="rounded-full object-cover"
          ></Image>
          <Image
            src={Textfield}
            width={"383px"}
            height={"124px"}
            alt="icon"
          ></Image>
        </div>
      </div>
      <hr color="#D6DDEB" />
      <form>
        <div className="flex justify-between py-6">
          <h1 className="font-semibold text-xl">Personal Details</h1>
          <section>
            <label className="flex flex-col">
              <h1 className="font-semibold text-xl text-slate-700">
                Full Name <span className="text-red-500">*</span>
              </h1>
              <input
                className="h-[50px] max-w-full border py-3 px-4 border-[#D6DDEB] "
                type="text"
                placeholder="Jake Gyll"
              />
            </label>
            <div className="flex gap-5 py-6">
              <label className="flex flex-col ">
                <h1 className="font-semibold text-xl text-slate-700">
                  Phone Number <span className="text-red-500">*</span>
                </h1>
                <input
                  className="h-[50px] max-w-full border py-3 px-4 border-[#D6DDEB] "
                  type="text"
                  placeholder="+44 1245 572 135"
                />
              </label>
              <label className="flex flex-col ">
                <h1 className="font-semibold text-xl text-slate-700">
                  Email <span className="text-red-500">*</span>
                </h1>
                <input
                  className="h-[50px] max-w-full border py-3 px-4 border-[#D6DDEB] "
                  type="text"
                  placeholder="Jakegyll@gmail.com"
                />
              </label>
            </div>
            <div className="flex gap-5">
              <label className="flex flex-col ">
                <h1 className="font-semibold text-xl text-slate-700">
                  Date of Birth <span className="text-red-500">*</span>
                </h1>
                <input
                  className="h-[50px] max-w-full border py-3 px-4 border-[#D6DDEB] "
                  type="text"
                  placeholder="09/08/1997"
                />
              </label>
              <label className="flex flex-col ">
                <h1 className="font-semibold text-xl text-slate-700">
                  Gender <span className="text-red-500">*</span>
                </h1>
                <input
                  className="h-[50px] max-w-full border py-3 px-4 border-[#D6DDEB] "
                  type="text"
                  placeholder="Jake Gyll"
                />
              </label>
            </div>
          </section>
        </div>
        <hr color="#D6DDEB" />
        <section className="flex justify-between my-6">
          <div>
            <h1 className="font-semibold text-xl">Account Type</h1>
            <p className="text-[#515B6F]">You can update your account type</p>
          </div>
          <div className="flex flex-col">
            <label className="flex gap-7">
              <input type="radio" name="subscribe" className="p-5"/>
              <div>
                <h1 className="text-xl text-slate-700">Job seeker</h1>
                <p>Looking for a job</p>
              </div>
            </label>
            <label className="flex gap-7">
              <input type="radio" name="subscribe" />
              <div>
                <h1 className="text-xl text-slate-700">Employer</h1>
                <p>Hiring, sourcing candidates, or posting a jobs</p>
              </div>
            </label>
          </div>
        </section>
        <hr color="#D6DDEB" />
        <div className="w-full flex justify-end my-6">
          <button className="px-6 py-3 bg-[#4640DE] font-bold text-lg text-white">Save Profile</button>
        </div>
      </form>
    </div>
  );
}
