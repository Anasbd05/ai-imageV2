import Link from 'next/link'
import React from 'react'

const Banner = () => {
    return (
        <div className='py-2 flex items-center justify-center bg-gradient-to-br from-green-200 via-green-400 via-green-700 via-emerald-800 to-teal-900 '>
            <Link className='font-dm_sans font-bold tracking-wide text-white' href={"/pricing"}>Hurry Up! Limited offer</Link>
        </div>
    )
}

export default Banner
