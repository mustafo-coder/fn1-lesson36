import Image from "next/image";
import React from "react";

export default function LeftContent() {
    const data = [
        {
            image: "/twitter.svg",
            content: "twitter.com/stripe",
            w: "w-[204px]",
        },
        {
            image: "/facebook.svg",
            content: "facebook.com/StripeHQ",
            w: "w-[249px]",
        },
        {
            image: "/linkEdin.svg",
            content: "linkedin.com/company/stripe",
            w: "w-[292px]",
        },
    ];
    return (
        <div className="flex flex-col gap-6">
            <div className="w-[752px]  flex flex-col gap-2">
                <h1 className="text-3xl font-bold">Company Profile</h1>
                <p className="opacity-50 text-base w-[670px]">
                    Stripe is a software platform for starting and running
                    internet businesses. Millions of businesses rely on Stripe’s
                    software tools to accept payments, expand globally, and
                    manage their businesses online. Stripe has been at the
                    forefront of expanding internet commerce, powering new
                    business models, and supporting the latest platforms, from
                    marketplaces to mobile commerce sites. We believe that
                    growing the GDP of the internet is a problem rooted in code
                    and design, not finance. Stripe is built for developers,
                    makers, and creators. We work on solving the hard technical
                    problems necessary to build global economic
                    infrastructure—from designing highly reliable systems to
                    developing advanced machine learning algorithms to prevent
                    fraud.
                </p>
            </div>
            <div className="w-[752px] flex flex-col gap-4">
                <h1 className="text-3xl font-bold">Contact</h1>
                <div className="grid grid-cols-2 gap-4 w-[500px]">
                    {data.map((item, index) => (
                        <div
                            key={index}
                            className={`flex  items-center gap-4 py-2 border-[1px] border-[#4640DE] px-2 ${item.w}`}
                        >
                            <Image
                                src={item.image}
                                width={24}
                                height={24}
                                alt=""
                            />
                            <p className="text-[#4640DE]">{item.content}</p>
                        </div>
                    ))}
                </div>
            </div>
            <div className="mt-10">
                <div className="flex gap-3">
                    <Image src="/rasm1.png" width={478} height={606} alt="" />
                    <div className="flex flex-col gap-3">
                        <Image
                            src="/rasm2.png"
                            width={262}
                            height={194}
                            alt=""
                        />
                        <Image
                            src="/rasm3.png"
                            width={262}
                            height={194}
                            alt=""
                        />
                        <Image
                            src="/rasm4.png"
                            width={262}
                            height={194}
                            alt=""
                        />
                    </div>
                </div>
            </div>
        </div>
    );
}
