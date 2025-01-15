import Image from "next/image";
import Link from "next/link";
import React from "react";

export default function Register() {
  return (
    <div className="flex h-screen justify-around px-5  ">
      <div className="w-3/5 bg-blue-50 px-10 py-5">
        <div className="flex gap-2 items-start px-5 top-0 ">
          <Image
            className="w-[32px] h-[32px]"
            src={"/Frame3.svg"}
            width={32}
            height={32}
            alt="logo"
          />
          <h2 className="text-[24px] text-black">JobHuntly</h2>
        </div>
        <div className="bg-loginBg bg-contain bg-no-repeat bg-center h-full mt-5 ">
          <div className="w-[165px] h-[152px] flex flex-col items-start justify-center border bg-white gap-3 pl-5 ">
            <Image
              //   className="w-[56px] h-[40px]"
              src={"/Group307.svg"}
              width={56}
              height={40}
              alt="statis"
            />
            <h3 className="text-[20px] font-bold">100K+</h3>
            <p>People got hired</p>
          </div>
        </div>
      </div>
      <div className="flex flex-col justify-center items-center">
        <div className="flex text-blue-600 gap-5 justify-center">
          <button>Job Seeker</button>
          <button>Company</button>
        </div>
        <h2 className="text-[32px] font-bold">Get more opportunities</h2>
        <button className="text-blue-600 flex w-[408px] h-[50px] items-center gap-2 justify-center border">
          <Image src={"/icon.svg"} width={20} height={20} alt="google" />
          Sign Up with Google
        </button>
        <div className="flex items-center gap-4 mt-5">
          <div className="flex-1 h-px bg-gray-500"></div>
          <span className="opacity-50 text-sm">Or sign up with email</span>
          <div className="flex-1 h-px bg-gray-500"></div>
        </div>
        <div className="flex flex-col items-start gap-5 mt-5">
          <h2>Full name</h2>
          <input
            className="w-[408px] h-[50px] pl-3 border"
            type="text"
            placeholder="Enter your full name"
          />
          <h2>Email Address</h2>
          <input
            className="w-[408px] h-[50px] pl-3 border"
            type="text"
            placeholder="Enter email addres"
          />
          <h2>Password</h2>
          <input
            className="w-[408px] h-[50px] pl-3 border"
            type="text"
            placeholder="Enter password"
          />
          <button className="text-center w-[408px] h-[50px] bg-blue-600 text-white">
            Continue
          </button>
        </div>
        <div className="flex flex-col items-start mt-5">
          <p>Already have an account? </p>
          <Link href={"/login"} className="text-blue-600 font-bold">
            Login
          </Link>
          <p>
            By clicking 'Continue', you acknowledge that you have read
            <br /> and accept the{" "}
            <span className="text-blue-600">
              Terms of Service and Privacy Policy
            </span>
          </p>
        </div>
      </div>
    </div>
  );
}
