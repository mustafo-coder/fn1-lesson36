import Image from "next/image";
import Link from "next/link";
import React from "react";

export default function RightContent() {
    const data = [
        {
            image: "/html.png",
            content: "HTML 5",
        },
        {
            image: "/css.png",
            content: "CSS 3",
        },
        {
            image: "/js.png",
            content: "JavaScript",
        },
        {
            image: "/ruby.png",
            content: "Ruby",
        },
        {
            image: "/mixpanel.png",
            content: "Mixpanel",
        },
        {
            image: "/framer.png",
            content: "Framer",
        },
    ];
    const countries = [
        {
            image: "/UnitedStates.png",
            content: "United States",
        },
        {
            image: "/England.png",
            content: "England",
        },
        {
            image: "/Japan.png",
            content: "Japan",
        },
        {
            image: "/Autralia.png",
            content: "Australia",
        },
        {
            image: "/China.png",
            content: "China",
        },
    ];
    return (
        <div className="flex flex-col gap-6">
            <div className="w-[376px]  flex flex-col gap-2">
                <h1 className="text-3xl font-bold">Tech stack</h1>
                <p className="opacity-50 text-base w-[314px]">
                    Learn about the technology and tools that Stripe uses.
                </p>
            </div>
            <div>
                <div className="grid grid-cols-3">
                    {data.map((item) => (
                        <div className="flex flex-col items-center gap-3 w-24 mb-2">
                            <Image
                                src={item.image}
                                alt=""
                                width={74}
                                height={74}
                                className="p-1"
                            />
                            <p className="text-base text-center pb-2">
                                {item.content}
                            </p>
                        </div>
                    ))}
                </div>
                <Link
                    href={"#"}
                    className="text-[#4640DE]  font-[16px] p-3 pt-5"
                >
                    View tech stack
                    <Image
                        className="pl-4 inline-block "
                        src={"/strelka.png"}
                        alt=""
                        width={40}
                        height={40}
                    />
                </Link>
            </div>
            <div className="border-t border-1 border-gray-300 w-[376px] mb-10"></div>

            <div className="w-[376px]  flex flex-col gap-2">
                <h1 className="text-3xl font-bold">Office Location</h1>
                <p className="opacity-50 text-base w-[314px]">
                    Stripe offices spread across 20 countries
                </p>
            </div>
            <div className="flex flex-col gap-2">
                {countries.map((item) => (
                    <div className="flex items-center gap-3 mb-2">
                        <Image
                            src={item.image}
                            alt=""
                            width={40}
                            height={30}
                            className="p-1"
                        />
                        <p className="text-base font-bold ">{item.content}</p>
                    </div>
                ))}
                <Link href={"#"} className="text-[#4640DE]  font-[16px]  py-5">
                    View countries
                    <Image
                        className="pl-4 inline-block "
                        src={"/strelka.png"}
                        alt=""
                        width={40}
                        height={40}
                    />
                </Link>
                <div className="border-t border-1 border-gray-300 w-[376px]"></div>
            </div>
        </div>
    );
}
