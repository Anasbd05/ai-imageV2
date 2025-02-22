import React from 'react'

const Trying = () => {
    return (
        <div className='py-6 sm:py-10 flex items-center flex-col '>
            <h1 className='font-dm_sans text-4xl sm:text-5xl md:text-6xl  tracking-tight bg-gradient-to-r font-bold from-primary to-accent bg-clip-text text-transparent'>Experience It</h1>
            <p className=' px-2 mt-4 mb-6 max-w-3xl leading-7 text-justify '>See the power of AI image transformation in action Upload a photo, and our AI will instantly enhance, redesign, or convert your space into a stunning gamer setup. No downloads, no hassle—just pure creativity at your fingertips. Try it now and watch the magic happen! 🚀</p>
            <div className='bg-gray-200 py-1 rounded-lg px-2 w-4/5 md:w-3/5 flex justify-between items-center '>
                <input className='bg-transparent w-full px-3 outline-none ' type="text" placeholder='Prompt...' />
                <button className='py-2 px-6 rounded-lg duration-300 hover:shadow-[2px_2px_#000] bg-secondary '>Generate</button>
            </div>
            {/* Image generated */}
        </div>
    )
}

export default Trying
