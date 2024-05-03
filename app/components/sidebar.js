import Link from 'next/link'
import React from 'react'
import Image from 'next/image'

export default function Sidebar({ toggleSidebar, sidebarOpen }) {
  return (
    <div className={`bg-black h-screen absolute top-0 ${sidebarOpen ? 'left-0' : 'left-[-100%]'} flex flex-col z-50 w-[90vw] items-stretch transition-all ease-in-out duration-200 p-4`}>
      <Link href="" className='text-5xl absolute top-1 right-2 text-white' onClick={toggleSidebar}>&times;</Link>
      <Link href='/' className='my-6 flex justify-center' onClick={toggleSidebar}>
        <Image width={100} height={100} src='/images/logo-cropped-white.svg' alt='logo' />
      </Link>
      <Link href='/about' className='text-lg text-white bg-primary hover:bg-primary/90 rounded px-3 mb-3 text-center' onClick={toggleSidebar}>About The Show</Link>
      <Link href='/cast' className='text-xl mb-3 text-white text-center' onClick={toggleSidebar}>Cast</Link>
      <Link href='/sponsors' className='text-xl mb-3 text-white text-center' onClick={toggleSidebar}>Our Sponsors</Link>
      <Link href='/contact' className='text-xl mb-3 text-white text-center' onClick={toggleSidebar}>Contact Us</Link>
      <Link href='/buy' className='text-xl mb-3 text-white text-center' onClick={toggleSidebar}>Buy Tickets</Link>
    </div>
  )
}

// Remove hidden from sign in and sign up buttons to revert back to original