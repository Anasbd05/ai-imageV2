import {Hourglass} from 'lucide-react'
import Link from 'next/link'
import React from 'react'

const Banner = () => {
    return (
        <div className='py-3  bg-[linear-gradient(to_right,#FCD6FF,#29D8FF,#FFFD80,#F89ABF,#FCD6FF)] '>
            <div className='flex gap-2 items-center justify-center'>
                <Hourglass className='animate-pulse w-4 h-4 ' />
                <Link className='font-dm_sans font-bold text-center tracking-wide text-text' href={"/pricing"}>Hurry Up! Limited offer</Link>
            </div>
        </div>
    )
}

export default Banner
