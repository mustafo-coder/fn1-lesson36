import React from 'react';
import tick from '@/images/tick.svg';
import Image from 'next/image';

const SocialAbout = () => {
    return (
        <div className="py-[72px] px-32 container mx-auto">
            <div className="grid grid-cols-1 lg:grid-cols-3 gap-12">
                <div className="col-span-2 space-y-8">
                    <div>
                        <h2 className="text-[32px] font-semibold mb-4">Description</h2>
                        <p className="text-[#515B6F] text-base font-normal leading-7">
                            Stripe is looking for a Social Media Marketing expert to help manage our online networks. You will
                            be responsible for monitoring our social media channels, creating content, finding effective ways to
                            engage  the community and incentivize others to engage on our channels.
                        </p>
                    </div>

                    <div>
                        <h2 className="text-[32px] font-semibold mb-4">Responsibilities</h2>
                        <ul className="list-none space-y-4">
                            {[
                                "Community engagement to ensure that is supported and actively represented online",
                                "Focus on social media content development and publication",
                                "Marketing and strategy support",
                                "Stay on top of trends on social media platforms, and suggest content ideas to the team",
                                "Engage with online communities",
                            ].map((item, index) => (
                                <li key={index} className="flex text-[#515B6F] text-base font-normal gap-2 items-center">
                                    <Image src={tick} alt="tick" />
                                    {item}
                                </li>
                            ))}
                        </ul>
                    </div>

                    <div>
                        <h2 className="text-xl font-semibold mb-4">Who You Are</h2>
                        <ul className="list-none space-y-4">
                            {[
                                "You get energy from people and building the ideal work environment",
                                "You have a sense for beautiful spaces and office experiences",
                                "You are a confident office manager, ready for added responsibilities",
                                "You're detail-oriented and creative",
                                "You're a growth marketer and know how to run campaigns",
                            ].map((item, index) => (
                                <li key={index} className="flex text-[#515B6F] text-base font-normal gap-2 items-center">
                                    <Image src={tick} alt="tick" />
                                    {item}
                                </li>
                            ))}
                        </ul>
                    </div>

                    <div>
                        <h2 className="text-xl font-semibold mb-4">Nice-To-Haves</h2>
                        <ul className="list-none space-y-4">
                            {[
                                "Fluent in English",
                                "Project management skills",
                                "Copy editing skills",
                            ].map((item, index) => (
                                <li key={index} className="flex text-[#515B6F] text-base font-normal gap-2 items-center">
                                    <Image src={tick} alt="tick" />
                                    {item}
                                </li>
                            ))}
                        </ul>
                    </div>
                </div>

                <div className="space-y-8">
                    <h2 className="text-[32px] font-semibold mb-5">About this role</h2>
                    <div className="">
                        <ul className="space-y-5">
                            {[
                                { label: "Apply Before", value: "July 31, 2021" },
                                { label: "Job Posted On", value: "July 1, 2021" },
                                { label: "Job Type", value: "Full-Time" },
                                { label: "Salary", value: "$75k-$85k USD" },
                            ].map((item, index) => (
                                <li key={index} className="flex justify-between text-gray-700">
                                    <span className="text-[#515B6F] text-base font-normal">{item.label}</span>
                                    <span className='text-[#25324B] text-base font-semibold'>{item.value}</span>
                                </li>
                            ))}
                        </ul>
                    </div>

                    <div>
                        <h2 className="text-[32px] font-semibold mb-6">Categories</h2>
                        <div className="flex mt-2">
                            <span className="bg-[#EB85331A] text-[#FFB836] px-3 py-[6px] rounded-[80px] text-sm">Marketing</span>
                            <span className="bg-[#56CDAD1A] text-[#56CDAD] px-3 py-[6px] rounded-[80px] text-sm">Design</span>
                        </div>
                    </div>

                    <div>
                        <h2 className="text-[32px] font-semibold mb-4">Required Skills</h2>
                        <div className="flex flex-wrap gap-2 mt-2">
                            {[
                                "Project Management",
                                "Copywriting",
                                "Social Media Marketing",
                                "English",
                                "Copy Editing",
                            ].map((skill, index) => (
                                <span
                                    key={index}
                                    className="bg-[#F8F8FD] text-[#4640DE] px-3 py-1 text-sm"
                                >
                                    {skill}
                                </span>
                            ))}
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default SocialAbout;
