'use client'

import Link from 'next/link'
import React, { useState } from 'react'
import Image from 'next/image'
import Sidebar from './sidebar';
import MenuIcon from '@mui/icons-material/Menu';
import Script from 'next/script';

export default function Header() {
    const [sidebarOpen, setSidebarOpen] = useState(false);

    function toggleSidebar() {
        setSidebarOpen(!sidebarOpen);
    }


    return (
        <header className='flex items-center justify-between px-6 py-4 bg-black'>
            <Script id='inline'>
                {`
                function addSpider(spiderName) {
                    document.getElementById(spiderName).classList.add('spider-animation');
                    const spiderImg = document.getElementById(spiderName + '-img')
                    spiderImg.style.display = "block";
                    spiderImg.classList.add('spider-img-animation');
                }
                function removeSpider(spiderName) {
                    document.getElementById(spiderName).classList.remove('spider-animation');
                    const spiderImg = document.getElementById(spiderName + '-img');
                    spiderImg.classList.remove('spider-img-animation');
                    spiderImg.style.display = "none";
                }
                `}
            </Script>
            <div className='md:hidden flex items-center'>
                <MenuIcon className='text-4xl cursor-pointer text-white' onClick={toggleSidebar} />
                <Sidebar toggleSidebar={toggleSidebar} sidebarOpen={sidebarOpen} />
            </div>
            <Link href='/'>
                <Image width={100} height={100} src='/static/images/logo-cropped-white.svg' alt='logo' />
            </Link>
            {/* <nav className='text-white hidden md:block'>
                <Link href='/about' className='mr-6 relative pb-1 hover-underline-animation'>About the Show</Link>
                <Link href='/cast' className='mr-6 relative pb-1 hover-underline-animation'>Cast</Link>
                <Link href='/sponsors' className='mr-6 relative pb-1 hover-underline-animation'>Sponsors</Link>
                <Link href='/contact' className='mr-6 relative pb-1 hover-underline-animation'>Contact Us</Link>
                <Link href='/buy-tickets' className='relative pb-1 hover-underline-animation'>Buy Tickets</Link>
            </nav> */}
            <nav className='text-white hidden md:block'>
                <Link className="mr-6 relative pb-1 hover-underline-animation" href="/about" onMouseOver={() => addSpider('about-spider')}
                    onMouseOut={() => removeSpider('about-spider')}>
                    About The Show
                    <div id="about-spider" className="spider">
                        <Image src="/static/images/spider.gif" alt="spider" width={10} height={10} id="about-spider-img" />
                    </div>
                </Link>
                <Link className="mr-6 relative pb-1 hover-underline-animation" href="/cast" onMouseOver={() => addSpider('cast-spider')}
                    onMouseOut={() => removeSpider('cast-spider')}>
                    Cast
                    <div id="cast-spider" className="spider">
                        <Image src="/static/images/spider.gif" alt="spider" width={500} height={500} id="cast-spider-img" />
                    </div>
                </Link>
                <Link className="mr-6 relative pb-1 hover-underline-animation" href="/sponsors" onMouseOver={() => addSpider('sponsors-spider')}
                    onMouseOut={() => removeSpider('sponsors-spider')}>
                    Sponsors
                    <div id="sponsors-spider" className="spider">
                        <Image src="/static/images/spider.gif" alt="spider" width={500} height={500} id="sponsors-spider-img" />
                    </div>
                </Link>
                <Link className="mr-6 relative pb-1 hover-underline-animation" href="/contact" onMouseOver={() => addSpider('contact-spider')}
                    onMouseOut={() => removeSpider('contact-spider')}>
                    Contact Us
                    <div id="contact-spider" className="spider">
                        <Image src="/static/images/spider.gif" alt="spider" width={500} height={500} id="contact-spider-img" />
                    </div>
                </Link>
                <Link className="mr-6 relative pb-1 hover-underline-animation" href="/buy-tickets" onMouseOver={() => addSpider('tickets-spider')}
                    onMouseOut={() => removeSpider('tickets-spider')}>
                    Buy Tickets
                    <div id="tickets-spider" className="spider">
                        <Image src="/static/images/spider.gif" alt="spider" width={500} height={500} id="tickets-spider-img" />
                    </div>
                </Link>
            </nav>
        </header >
    )
}
