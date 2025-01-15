import React from "react";
import socialMediaAssistant from '@/images/social-media-assistant.svg';
import brandDesigner from '@/images/brand-designer.svg';
import interactiveDeveloper from '@/images/interactive-developer.svg';
import hrManager from '@/images/hr-manager.svg';
import socialMediaAssistantRight from '@/images/social-media-assistant-right.png';
import brandDesignerRight from '@/images/brand-designer-right.png';
import interactiveDeveloperRight from '@/images/interactive-developer-right.png';
import hrManagerRight from '@/images/hr-manager-right.png';
import Image from "next/image";
import Link from "next/link";
import arrow from '@/images/arrow.svg';



const SimiliarJobs = () => {
    const jobs = [
        {
            id: 1,
            logo: socialMediaAssistant,
            title: "Social Media Assistant",
            company: "Nomad",
            location: "Paris, France",
            tags: [
                { label: "Full-Time", bgColor: "#56CDAD1A", textColor: "#56CDAD" },
                { label: "Marketing", bgColor: "transparent", textColor: "#FB8C00" },
                { label: "Design", bgColor: "transparent", textColor: "#4640DE" },
            ],
        },
        {
            id: 2,
            logo: socialMediaAssistantRight,
            title: "Social Media Assistant",
            company: "Netlify",
            location: "Paris, France",
            tags: [
                { label: "Full-Time", bgColor: "#56CDAD1A", textColor: "#56CDAD" },
                { label: "Marketing", bgColor: "transparent", textColor: "#FB8C00" },
                { label: "Design", bgColor: "transparent", textColor: "#4640DE" },
            ],
        },
        {
            id: 3,
            logo: brandDesigner,
            title: "Brand Designer",
            company: "Dropbox",
            location: "San Francisco, USA",
            tags: [
                { label: "Full-Time", bgColor: "#56CDAD1A", textColor: "#56CDAD" },
                { label: "Marketing", bgColor: "transparent", textColor: "#FB8C00" },
                { label: "Design", bgColor: "transparent", textColor: "#4640DE" },
            ],
        },
        {
            id: 4,
            logo: brandDesignerRight,
            title: "Brand Designer",
            company: "Maze",
            location: "San Francisco, USA",
            tags: [
                { label: "Full-Time", bgColor: "#56CDAD1A", textColor: "#56CDAD" },
                { label: "Marketing", bgColor: "transparent", textColor: "#FB8C00" },
                { label: "Design", bgColor: "transparent", textColor: "#4640DE" },
            ],
        },
        {
            id: 5,
            logo: interactiveDeveloper,
            title: "Interactive Developer",
            company: "Terraform",
            location: "Hamburg, Germany",
            tags: [
                { label: "Full-Time", bgColor: "#56CDAD1A", textColor: "#56CDAD" },
                { label: "Marketing", bgColor: "transparent", textColor: "#FB8C00" },
                { label: "Design", bgColor: "transparent", textColor: "#4640DE" },
            ],
        },
        {
            id: 6,
            logo: interactiveDeveloperRight,
            title: "Interactive Developer",
            company: "Udacity",
            location: "Hamburg, Germany",
            tags: [
                { label: "Full-Time", bgColor: "#56CDAD1A", textColor: "#56CDAD" },
                { label: "Marketing", bgColor: "transparent", textColor: "#FB8C00" },
                { label: "Design", bgColor: "transparent", textColor: "#4640DE" },
            ],
        },
        {
            id: 7,
            logo: hrManager,
            title: "HR Manager",
            company: "Packer",
            location: "Lucern, Switzerland",
            tags: [
                { label: "Full-Time", bgColor: "#56CDAD1A", textColor: "#56CDAD" },
                { label: "Marketing", bgColor: "transparent", textColor: "#FB8C00" },
                { label: "Design", bgColor: "transparent", textColor: "#4640DE" },
            ],
        },
        {
            id: 8,
            logo: hrManagerRight,
            title: "HR Manager",
            company: "Webflow",
            location: "Lucern, Switzerland",
            tags: [
                { label: "Full-Time", bgColor: "#56CDAD1A", textColor: "#56CDAD" },
                { label: "Marketing", bgColor: "transparent", textColor: "#FB8C00" },
                { label: "Design", bgColor: "transparent", textColor: "#4640DE" },
            ],
        },
    ];

    return (
        <div className="mx-auto container py-[72px] bg-[#F8F8FD] px-32">
            <div className="w-full mb-12 flex items-end justify-between">
                <h1 className="text-3xl font-semibold text-[#25324B]">Similiar Jobs</h1>
                <Link href={"/"} className="text-[#4640DE] flex items-center gap-4 text-base font-semibold">Show all jobs<Image src={arrow} alt='arrow' /></Link>
            </div>

            <div className="grid grid-cols-2 gap-8">
                {jobs.map((job) => (
                    <div key={job.id} className="flex items-center bg-white mb-4">
                        <Image src={job.logo} alt={job.company} width={60} height={60} className="ml-10 mr-6" />

                        <div className="flex-1 py-6">
                            <h3 className="text-[#25324B] font-semibold text-xl">
                                {job.title}
                            </h3>
                            <p className="text-[#515B6F] text-base py-2 font-normal">
                                {job.company} • {job.location}
                            </p>
                            <div className="flex space-x-2 mt-2">
                                {job.tags.map((tag, index) => (
                                    <span
                                        key={index}
                                        className="text-sm font-semibold py-2 px-3 rounded-full"
                                        style={{
                                            backgroundColor: tag.bgColor,
                                            color: tag.textColor,
                                            border: tag.label === "Marketing" || tag.label === "Design" ? `1px solid ${tag.textColor}` : "none",
                                            borderRadius: "50px",
                                        }}
                                    >
                                        {tag.label}
                                    </span>
                                ))}
                            </div>
                        </div>
                    </div>
                ))}
            </div>
        </div>
    );
};

export default SimiliarJobs;