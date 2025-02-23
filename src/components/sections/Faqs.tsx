import {faqs} from '@/arryas'
import React from 'react'

const Faqs = () => {
    return (
        <div className='py-6 px-3 sm:py-10 bg-gray-100 '>
            <h4 className='text-primary font-dm_sans text-center mb-7 text-lg font-bold'>FAQ</h4>
            <div className="flex justify-between flex-col md:flex-row  px-5 w-full items-start">
                <div className='flex flex-col gap-2 md:w-3/6 my-5'>
                    <h1 className='text-zinc-700 text-4xl sm:text-5xl md:text-6xl  tracking-wider font-bold'>Frequently Asked Questions</h1>
                </div>
                <div className='flex flex-col gap-3 md:w-3/6 '>
                    {faqs.map((faq,index) => (
                        <div key={index} className="collapse border-t collapse-arrow bg-transparent">
                            <input type="radio" name="my-accordion-2" />
                            <div className="collapse-title text-xl font-medium">{faq.question}</div>
                            <div className="collapse-content">
                                <p>{faq.answer}</p>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </div>

    )
}

export default Faqs
