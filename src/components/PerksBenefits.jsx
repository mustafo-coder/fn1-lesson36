import React from "react";
import commuter from '@/images/commuter.svg';
import healthcare from '@/images/healthcare.svg';
import remote from '@/images/remote.svg';
import skill from '@/images/skill.svg';
import team from '@/images/team.svg';
import vacation from '@/images/vacation.svg';
import wegiveback from '@/images/wegiveback.svg';
import Image from "next/image";


export default function PerksBenefits() {
    const data = [
        {
            image: healthcare,
            title: "Full Healthcare",
            content:
                "We believe in thriving communities and that starts with our team being happy and healthy.",
        },
        {
            image: vacation,
            title: "Unlimited Vacation",
            content:
                "We believe you should have a flexible schedule that makes space for family, wellness, and fun.",
        },
        {
            image: skill,
            title: "Skill Development",
            content:
                "We believe in always learning and leveling up our skills. Whether it's a conference or online course.",
        },
        {
            image: team,
            title: "Team Summits",
            content:
                "Every 6 months we have a full team summit where we have fun, reflect, and plan for the upcoming quarter.",
        },
        {
            image: remote,
            title: "Remote Working",
            content:
                "You know how you perform your best. Work from home, coffee shop or anywhere when you feel like it.",
        },
        {
            image: commuter,
            title: "Commuter Benefits",
            content:
                "We're grateful for all the time and energy each team member puts into getting to work every day.",
        },
        {
            image: wegiveback,
            title: "We give back",
            content:
                "We anonymously match any donation our employees make (up to $/€ 600) so they can support the organizations they care about most—times two. ",
        },
    ];
    return (
        <div className="py-20 px-32 container mx-auto flex flex-col gap-10">
            <div>
                <h1 className="text-3xl font-semibold text-[#25324B] mb-2">Perks & Benefits</h1>
                <p className="text-base font-normal text-[#515B6F]">
                    This job comes with several perks and benefits
                </p>
            </div>
            <div className="grid grid-cols-4 gap-6">
                {data.map((item, index) => (
                    <div key={index} className="flex flex-col gap-2 w-64 py-6 ">
                        <Image src={item.image} alt={item.title} width={48} height={48} />
                        <h1 className="text-xl font-semibold text-[#25324B] mt-6 mb-3">{item.title}</h1>
                        <p className="text-base font-normal text-[#515B6F]">{item.content}</p>
                    </div>  
                ))}
            </div>
        </div>
    );
}
