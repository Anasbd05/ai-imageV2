import React from 'react'
import Prices from "../../arryas"
import {Clock} from 'lucide-react'

const Pricing = () => {
    return (
        <div id='pricing' className='py-6 flex flex-col items-center sm:py-10'>
            <h1 className='font-dm_sans text-center  text-4xl sm:text-5xl md:text-6xl  tracking-tight bg-gradient-to-r font-bold from-primary to-accent bg-clip-text text-transparent'>
                Choose the plan that fits your needs.
            </h1>
            <p className=' text-center px-2 mt-4 mb-6 max-w-3xl leading-7 '>
                Whether you&apos;re exploring AI image transformations for fun or need high-quality, watermark-free results, we’ve got you covered
            </p>

            <div className="grid grid-cols-1 w-4/5 mx-auto  gap-5 md:grid-cols-2 lg:grid-cols-3">
                {Prices.map((price) => (
                    <div key={price.id} className={`border cursor-pointer border-black shadow-sm  duration-300 hover:shadow-[4px_4px_#000] p-5  h-[400px] flex justify-between  flex-col rounded-lg ${price.name === "Pro" && "scale-105 shadow-[3px_3px_#769ed0] hover:shadow-[4px_4px_#769ed0] "} `}>
                        {price.name === "Pro" && <div className='py-1 bg-secondary flex justify-center gap-2 items-center  rounded-full px-8 border border-primary'>
                            <Clock className='w-3 animate-bounce h-3' /> <span className='font-bold font-dm_sans'>Popular</span> </div>}
                        <div className='flex flex-col gap-2 py-2 border-b border-accent  '>
                            <h3 className='font-semibold font-dm_sans '>{price.name}</h3>
                            <h1 className='text-3xl font-bold font-mono'>{price.Monthlyprice}</h1>
                        </div>
                        <ul className='flex flex-col gap-2'>
                            {price.features.map((feature,index) => (
                                <li className='text-neutral-900 text-sm font-normal ' key={index}>{feature}</li>
                            ))}
                        </ul>
                        <button className={`bg-primary font-semibold font-dm_sans w-full hover:shadow-[4px_4px_#000] duration-500 py-2 rounded-lg tracking-wide ${price.name === "Pro" && "bg-secondary "}`}>{price.buttonText}</button>
                    </div>
                ))
                }
            </div>
        </div>
    )
}

export default Pricing
