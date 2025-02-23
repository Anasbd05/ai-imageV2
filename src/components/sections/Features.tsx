import {features} from '@/arryas'
import React from 'react'

const Features = () => {
    return (
        <div id='features' className='flex flex-col items-center py-6 px-3 sm:py-10 bg-gradient-to-b from-green-200 to-background'>
            <h1 className="font-dm_sans text-center  text-4xl sm:text-5xl md:text-6xl tracking-tighter font-bold">
                From Invoicing to <span className='bg-gradient-to-tr font-dm_sans from-primary to-accent bg-clip-text text-transparent'>Success</span>
            </h1>
            <p className="py-4 text-center text-gray-800">Simplify , Pay , Track ,
                <span className='underline underline-offset-2 decoration-2 decoration-wavy decoration-accent'>Succeed</span>
            </p>
            <div className="grid grid-cols-1 sm:grid-cols-2 mt-5 md:grid-cols-3 gap-5 px-10">
                {features.map((feature) => (
                    <div key={feature.id} className="p-6 shadow-md border border-accent shadow-secondary rounded-lg flex flex-col gap-2  ">
                        <h1 className='font-bold font-dm_sans text-xl my-4'>{feature.header}</h1>
                        <p className='text-justify text-gray-700'>{feature.body}</p>
                    </div>
                ))}
            </div>
        </div >
    )
}

export default Features
