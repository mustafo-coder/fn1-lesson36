import { BusinessService, Design, Development, Fintech, Hosting } from '@/images'
import Image from 'next/image';
import React from 'react'

const categories = [
    {
        id: 1,
        name: 'Design',
        logo: Design
    },
    {
        id: 2,
        name: 'Fintech',
        logo: Fintech
    },
    {
        id: 3,
        name: 'Hosting',    
        logo: Hosting
    },
    {
        id: 4,
        name: 'Business Service',
        logo: BusinessService
    },
    {
        id: 5,
        name: 'Development',
        logo: Development
    }
]

const Category = () => {
    return (
        
        <div className="container mx-auto py-10">
            <h2 className='mt-14 text-3xl font-bold'>Companies by Category</h2>
            <div className="grid grid-cols-1 mt-10 sm:grid-cols-1 md:grid-cols-1 lg:grid-cols-4 gap-6">
                {categories.map((category) => (
                    <div
                        key={category.id}
                        className="flex items-center w-[274px] group h-[173px] border-[#D6DDEB] border-[1px] justify-center flex-col p-6 bg-white hover:bg-[#4640DE] transition-shadow"
                    >
                        <Image
                            src={category.logo}
                            alt={category.name}
                            className="w-12 h-12 group-hover:brightness-0 group-hover:invert mb-4 "
                        />
                        <h3 className="text-lg font-semibold group-hover:text-white text-center">{category.name}</h3>
                    </div>
                ))}
            </div>
        </div>
    );
};


export default Category