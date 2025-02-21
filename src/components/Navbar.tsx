import Image from 'next/image'
import Link from 'next/link'
import React from 'react'

const Navbar = () => {
  return (
    <nav className='flex justify-between items-center px-10 py-2'>
      <Image src={"/logo.png"} alt='' width={55} height={55} />
      <ul className='flex gap-6'>
        <Link className='font-dm_sans hover:text-accent duration-500' href={"/"}>Home</Link>
        <Link className='font-dm_sans hover:text-accent duration-500' href={"#"}>Features</Link>
        <Link className='font-dm_sans hover:text-accent duration-500' href={"#"}>Pricing</Link>
      </ul>
      <button className='py-1 px-5 font-dm_sans rounded-full bg-primary duration-500 hover:bg-secondary hover:shadow-[1px_4px_#000]'>Sign In</button>
    </nav>
  )
}

export default Navbar
