import Image from 'next/image'
import React from 'react'

const SignIn = () => {
    return (
        <div className='flex h-96 w-full items-center justify-center '>
            <div className=" w-4/5 lg:w-2/5 mx-auto p-10 rounded-md bg-white ">
                <div className='flex items-center my-4 border-accent justify-center gap-4'>
                    <Image alt='' src={"/logo.png"} width={50} height={50} />
                    <p className='text-2xl font-dm_sans'>Login /Sign-Up</p>
                </div>
                <div className='flex flex-col gap-2'>
                    <input autoFocus className='py-2  px-3 rounded-lg bg-white border border-secondary' type="text" placeholder='Type your email' />
                    <button className='py-3 w-full bg-primary rounded-md hover:bg-secondary duration-300 '>Send</button>
                </div>
                <div className="divider">OR</div>
                <div className='flex items-center justify-center gap-2 bg-white border border-secondary py-2 rounded-md hover:bg-secondary duration-300'>
                    <Image src={"/google.png"} alt='' width={20} height={20} />
                    <button className="font-semibold font-dm_sans text-lg tracking-wider">Google</button>
                </div>
            </div>

        </div>
    )
}

export default SignIn
