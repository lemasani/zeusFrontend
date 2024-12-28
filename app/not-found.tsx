import React from 'react'
import Image from 'next/image'
import logo from '@/public/svgs/3.svg'

export default function NotFound() {
  return (
    <>
        <section>
            <div className="container mx-auto p-4">
                <div className="wrapper flex flex-col justify-center items-center">
                    <Image src={logo} alt='Logo' width={400} height={400}/>
                    <div className="text">
                        <h1 className='text-3xl font-bold text-primary'>404 Page <span className='text-red-400'>not</span> found</h1>
                    </div>
                </div>
            </div>
        </section>
    </>
  )
}
