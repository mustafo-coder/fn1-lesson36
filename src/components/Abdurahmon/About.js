import Image from "next/image";
import Link from "next/link";
import React from "react";

export default function About() {
    const data = [
        {
            image: "/Founded.svg",
            title: "Founded",
            content: "July 31, 2011",
        },
        {
            image: "/Employees.svg",
            title: "Employees",
            content: "4000+",
        },
        {
            image: "/Location.svg",
            title: "Locations",
            content: "20 countries",
        },
        {
            image: "/Industry.svg",
            title: "Industry",
            content: "Payment Gateway",
        },
    ];
    return (
        <div className="container pt-32 flex flex-col gap-10 pb-20">
            <p>
                <span className="opacity-50"> Home / Companies / </span> Nomad{" "}
            </p>
            <div className="w-full flex  gap-6">
                <Image
                    src="/nomad_stripe.png"
                    className="p-2"
                    alt="about"
                    width={189}
                    height={189}
                />
                <div className="flex flex-col gap-7 p-2">
                    <div className="flex flex-col justify-between w-60 h-24 gap-3">
                        <div className="flex justify-between items-center">
                            <h1 className="text-5xl font-bold">Stripe</h1>
                            <button className="border-2 border-[#4640DE] text-[#4640DE] text-base w-[85px] h-[34px]">
                                43 Jobs
                            </button>
                        </div>
                        <Link
                            href="https://stripe.com"
                            className="text-[#4640DE] text-base"
                        >
                            https://stripe.com
                        </Link>
                    </div>
                    <div className="flex gap-10">
                        {data.map((item) => (
                            <div className="flex gap-2">
                                <Image
                                    src={item.image}
                                    alt="about"
                                    width={44}
                                    height={44}
                                />
                                <div>
                                    <p className="text-[#515B6F] text-base">
                                        {item.title}
                                    </p>
                                    <p>{item.content}</p>
                                </div>
                            </div>
                        ))}
                    </div>
                </div>
            </div>
        </div>
    );
}
