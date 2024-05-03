'use client'

import Link from 'next/link'
import React, { useState } from 'react'
import Image from 'next/image'
import Sidebar from './sidebar';
import MenuIcon from '@mui/icons-material/Menu';

export default function Header() {
    const [sidebarOpen, setSidebarOpen] = useState(false);

    function toggleSidebar() {
        setSidebarOpen(!sidebarOpen);
    }


    return (
        <header className='flex items-center justify-between px-6 py-4 bg-black'>
            <div className='md:hidden flex items-center'>
                <MenuIcon className='text-4xl cursor-pointer text-white' onClick={toggleSidebar} />
                <Sidebar toggleSidebar={toggleSidebar} sidebarOpen={sidebarOpen} />
            </div>
            <Link href='/'>
                <Image width={100} height={100} src='/static/images/logo-cropped-white.svg' alt='logo' />
            </Link>
            <nav className='text-white hidden md:block'>
                <Link href='/about' className='mr-6 relative pb-1 hover-underline-animation'>About the Show</Link>
                <Link href='/cast' className='mr-6 relative pb-1 hover-underline-animation'>Cast</Link>
                <Link href='/sponsors' className='mr-6 relative pb-1 hover-underline-animation'>Sponsors</Link>
                {/* <Link href='/images' className='mr-6 relative pb-1 hover-underline-animation'>Previous Productions</Link> */}
                <Link href='/contact' className='mr-6 relative pb-1 hover-underline-animation'>Contact Us</Link>
                <Link href='/buy-tickets' className='relative pb-1 hover-underline-animation'>Buy Tickets</Link>
            </nav>
        </header >
    )
}
