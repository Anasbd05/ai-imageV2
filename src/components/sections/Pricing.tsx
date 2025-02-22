import React from 'react'
import Prices from "../../arryas"

const Pricing = () => {
    return (
        <div className='py-6 flex flex-col items-center sm:py-10 bg-green-100'>
            <h1 className='font-dm_sans  text-4xl sm:text-5xl md:text-6xl  tracking-tight bg-gradient-to-r font-bold from-primary to-accent bg-clip-text text-transparent'>
                Choose the plan that fits your needs.
            </h1>
            <p className=' text-center px-2 mt-4 mb-6 max-w-3xl leading-7 '>
                Whether you&apos;re exploring AI image transformations for fun or need high-quality, watermark-free results, we’ve got you covered
            </p>

            <div className="grid grid-cols-1 w-4/5 mx-auto  gap-5 md:grid-cols-2 lg:grid-cols-3">
                {Prices.map((price) => (
                    <div key={price.id} className={`border border-secondary duration-300 hover:shadow-[4px_4px_#000] p-5  h-[400px] flex justify-between  flex-col rounded-lg ${price.name === "Pro" && "scale-105 shadow-[3px_3px_#769ed0] hover:shadow-[4px_4px_#769ed0] "} `}>
                        {price.name === "Pro" && <div className='py-1 bg-secondary rounded-full px-4 border border-primary'>Popular</div>}
                        <div className='flex flex-col gap-2 py-2 border-b border-accent  '>
                            <h3 className='font-semibold '>{price.name}</h3>
                            <h1 className='text-3xl font-bold font-mono'>{price.Monthlyprice}</h1>
                        </div>
                        <ul className='flex flex-col gap-2'>
                            {price.features.map((feature,index) => (
                                <li className='text-neutral-900 text-sm ' key={index}>{feature}</li>
                            ))}
                        </ul>
                        <button className='bg-primary w-full py-2 rounded-lg'>{price.buttonText}</button>
                    </div>
                ))
                }
            </div>
        </div>
    )
}

export default Pricing
