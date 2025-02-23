import Image from 'next/image'
import React from 'react'

const Hero = () => {
    return (
        <div className='bg-white py-6 sm:py-10  '>
            <div className="flex flex-col md:flex-row items-start px-8 gap-4  ">
                <div className='flex items-start gap-4 md:w-3/5 flex-col '>
                    <h1 className='font-dm_sans text-4xl sm:text-5xl md:text-6xl  tracking-tighter text-center bg-gradient-to-r font-bold from-primary to-accent bg-clip-text text-transparent  '>Unleash Your Creativity with AI-Generated Images</h1>
                    <p className='text-text text-justify mb-3 max-w-2xl font-medium text-lg leading-relaxed '>
                        Turn your imagination into breathtaking, high-definition visuals with our powerful AI image generator. Simply describe your vision in detail, and watch as AI transforms it into stunning, lifelike images with unmatched accuracy, vibrant colors, and incredible realism—instantly Elevate your creations with the revolutionary Text to Image AI image generator, revolutionizing the way you convert simple text into visually captivating artwork. Unleash your imagination and craft breathtaking, AI-generated masterpieces that are bound to captivate and inspire your audience.
                    </p>
                    <div className='flex items-center gap-5 '>
                        <button className='py-2 px-5 bg-secondary  shadow-[2px_3px_#000] hover:shadow-[3px_4px_#000] duration-200 rounded-xl  ' >Get started</button>
                        <button className='py-2 px-5 bg-primary rounded-xl hover:bg-accent  ' >Free Trial</button>
                    </div>
                </div>
                <Image className='md:w-2/5 h-3/6  duration-500 brightness-105 hover:brightness-110 rounded-lg w-full ' alt='' src={"/imageAi.jpg"} width={500} height={500} />
            </div>
        </div>
    )
}

export default Hero
