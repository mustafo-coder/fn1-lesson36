import Image from 'next/image';
import React from 'react';
import logo from '@/images/company-logo.png';
import share from '@/images/share.svg';
import Link from 'next/link';
import SocialAbout from '@/components/SocialAbout';
import ReadMore from '@/components/ReadMore';
import PerksBenefits from '@/components/PerksBenefits';
import SimiliarJobs from '@/components/SimiliarJobs';

const SocialPage = () => {
    return (
        <div>
            <div className="bg-[#F8F8FD] h-80 container mx-auto">
                <h1 className="py-10 mx-32 text-[#20243080] text-base font-normal">
                    Home / Companies / Nomad /
                    <span className="text-[#202430]"> Social Media Assistant</span>
                </h1>

                <div className="mb-[70px] border border-[#D6DDEB] mx-32 flex justify-between items-center bg-white max-w-[1187px] h-[139px]">
                    <div className="ms-6 flex gap-6 items-center">
                        <Image src={logo} alt="logo" />
                        <div>
                            <h1 className="text-3xl font-semibold text-[#25324B]">
                                Social Media Assistant
                            </h1>
                            <p className="text-[#515B6F]">
                                Stripe · Paris, France {'\u00B7'} Full-Time
                            </p>
                        </div>
                    </div>

                    <div className="flex items-center">
                        <Image src={share} alt="share" />
                        <div className="bg-[#D6DDEB] w-[1px] h-12 mx-7"></div>
                        <Link
                            href="/apply"
                            className="py-[14px] px-14 mr-6 bg-[#4640DE] text-white text-lg font-bold"
                        >
                            Apply
                        </Link>
                    </div>
                </div>
            </div>
            <SocialAbout />
            <PerksBenefits />
            <ReadMore />
            <SimiliarJobs />
        </div>
    );
};

export default SocialPage;
