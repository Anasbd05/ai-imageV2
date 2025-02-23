import {Github,Instagram,Twitter} from 'lucide-react'
import Link from 'next/link'
import React from 'react'

const Footer = () => {
    return (
        <footer className='py-6 sm:py-10 bg-gray-200'>
            <div className="w-11/12 mx-auto">
                <div className='bg-primary w-full rounded-lg p-8 flex items-center justify-between '>
                    <p className='font-dm_sans font-bold text-2xl'>Get instant access now for free</p>
                    <button className="py-2 px-5 bg-secondary border-accent duration-500 border hover:shadow-[2px_2px_#000] rounded-lg">Get started</button>
                </div>
                <div className='flex flex-col sm:flex-row gap-5 justify-between items-center px-5 my-5'>
                    <p className='font-dm_sans text-sm hidden md:inline '>Hey it&lsquo;s me <Link href={"/"} className='underline underline-offset-2  '>Anas</Link> the founder  </p>
                    <ul className='flex items-center  gap-3'>
                        <small className='text-xs'>Say Hi!</small>
                        <Twitter className='w-8 h-8 p-2 hover:bg-gray-300 rounded-md' />
                        <Github className='w-8 h-8 p-2 hover:bg-gray-300 rounded-md' />
                        <Instagram className='w-8 h-8 p-2 hover:bg-gray-300 rounded-md' />
                    </ul>
                    <ul className='flex gap-2 items-center'>
                        <Link href={'privacy'} className='text-sm hover:underline underline-offset-2 text-text font-dm_sans font-medium'>Privacy Policy</Link>
                        <Link href={'privacy'} className='text-sm hover:underline underline-offset-2 text-text font-dm_sans font-medium'>Terms of us</Link>
                    </ul>
                </div>
            </div>
            <hr className='border-none h-[1px] bg-accent ' />
            <p className='text-center mt-8'>&copy; 2025 Copyright. All rights are reserved</p>
        </footer>
    )
}

export default Footer
