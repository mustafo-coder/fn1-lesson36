import React from 'react'
import first from '@/images/first.png';
import second from '@/images/second.png';
import third from '@/images/third.png';
import Image from 'next/image';
import logo from '@/images/company-logo.png';
import arrow from '@/images/arrow.svg';

const ReadMore = () => {
    return (
        <div className='flex px-32 justify-between items-center container mx-auto'>
            <div className='flex flex-col gap-8 max-w-[577px]'>
                <div className='flex items-center gap-8 justify-between max-w-[329px]'>
                    <Image width={60} height={60} src={logo} alt='logo' />
                    <div>
                        <h1 className='text-3xl font-semibold text-[#25324B]'>Stripe</h1>
                        <p className='flex justify-between gap-4 text-base font-semibold text-[#4640DE]'>Read more about Stripe <Image src={arrow} alt='arrow' /></p>
                    </div>
                </div>
                <p className='text-base font-normal text-[#515B6F]'>Stripe is a technology company that builds economic infrastructure for the internet. Businesses of every size—from new startups to public companies—use our software to accept payments and manage their businesses online.</p>
            </div>
            <div className='flex gap-5 my-20'>
                <Image src={first} alt='first' />
                <div className='flex flex-col gap-4'>
                    <Image src={second} alt='second' />
                    <Image src={third} alt='third' />
                </div>
            </div>
        </div>
    )
}

export default ReadMore