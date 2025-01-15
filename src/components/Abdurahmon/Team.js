import React from "react";

export default function Team() {
    const data = [
        {
            image: "/Gardinier.png",
            name: "Célestin Gardinier",
            position: "CEO & Co-Founder",
        },
        {
            image: "/Reynaud.png",
            name: " Reynaud Colbert",
            position: "Co-Founder",
        },
        {
            image: "/Arienne.png",
            name: "Arienne Lyon",
            position: "Managing Director",
        },
        {
            image: "/Bernard.png",
            name: "Bernard Alexander",
            position: "Managing Director",
        },
        {
            image: "/Christine.png",
            name: "Christine Jhonson",
            position: "Managing Director",
        },
    ];
    return (
        <div className="container pt-20 flex flex-col gap-5 ">
            <div className="flex justify-between items-center">
                <h1 className="text-3xl font-bold">Team</h1>
                <p className="text-[#4640DE] text-base">See all(47)</p>
            </div>
            <div className="flex flex-wrap justify-between pb-16">
                {data.map((item, index) => (
                    <div
                        key={index}
                        className="flex flex-col items-center gap-4 w-56 border border-gray-300 p-5"
                    >
                        <img src={item.image} alt="" />
                        <div className="flex flex-col gap-2 items-center">
                            <h1 className="text-xl font-bold">{item.name}</h1>
                            <p className="opacity-50 text-base">
                                {item.position}
                            </p>
                        </div>
                        <div className="flex gap-4">
                            <img src="/instagram.svg" alt="" />
                            <img src="/Linkedin.svg" alt="" />
                        </div>
                    </div>
                ))}
            </div> 
            <div className="border-b border-gray-300"></div>
        </div>
    );
}
