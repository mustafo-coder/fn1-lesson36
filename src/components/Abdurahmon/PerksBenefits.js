import React from "react";

export default function PerksBenefits() {
    const data = [
        {
            image: "/FullHealthcare.png",
            title: "Full Healthcare",
            content:
                "We believe in thriving communities and that starts with our team being happy and healthy.",
        },
        {
            image: "UnlimitedVacation.png",
            title: "Unlimited Vacation",
            content:
                "We believe you should have a flexible schedule that makes space for family, wellness, and fun.",
        },
        {
            image: "SkillDevelopment.png",
            title: "Skill Development",
            content:
                "We believe in always learning and leveling up our skills. Whether it's a conference or online course.",
        },
        {
            image: "TeamSummits.png",
            title: "Team Summits",
            content:
                "Every 6 months we have a full team summit where we have fun, reflect, and plan for the upcoming quarter.",
        },
        {
            image: "RemoteWorking.png",
            title: "Remote Working",
            content:
                "You know how you perform your best. Work from home, coffee shop or anywhere when you feel like it.",
        },
        {
            image: "CommuterBenefits.png",
            title: "Commuter Benefits",
            content:
                "We’re grateful for all the time and energy each team member puts into getting to work every day.",
        },
        {
            image: "Wegiveback.png",
            title: "We give back",
            content:
                "We anonymously match any donation our employees make (up to $/€ 600) so they can support the organizations they care about most—times two. ",
        },
    ];
    return (
        <div className="py-20 container flex flex-col gap-10">
            <div>
                <h1 className="text-3xl font-bold">Perks & Benefits</h1>
                <p className="opacity-50 text-base ">
                    This job comes with several perks and benefits
                </p>
            </div>
            <div className="grid grid-cols-4 gap-6 ">
                {data.map((item) => (
                    <div className="flex flex-col gap-2 w-64 py-6 ">
                        <img src={item.image} alt="" width={48} height={48} />
                        <h1 className="text-2xl font-bold">{item.title}</h1>
                        <p className="opacity-50 text-base">{item.content}</p>
                    </div>
                ))}
            </div>
        </div>
    );
}
