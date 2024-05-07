import React from 'react';
import Image from "next/image";
import Link from 'next/link';

export default function Contact() {
    return (
        <>
            <main className='px-8 py-6'>
                <h1 className='text-4xl font-semibold pb-6 text-center'>Contact Us</h1>
                <div className='border-2 border-black p-4 md:p-6 w-full lg:w-[50%] mx-auto rounded'>
                    <p className='pb-2'>If you have any queries, please don&apos;t hesitate to get in touch!</p>
                    {/* Check Email */}
                    <p className='font-medium'>Email: <a href='mailto:boxoffice@caldervale-show.com' className='text-blue-600' >BoxOffice@Caldervale-Show.com</a></p>
                    <p className='font-medium'>Phone: <a href='tel:01236 794855' className='text-blue-600'>01236 794855</a></p>
                    <div className='flex'>
                        <p className='font-medium'>Address:</p>
                        <div className='ml-2'>
                            <p>Caldervale High School</p>
                            <p>Towes Road</p>
                            <p>Airdrie</p>
                            <p>ML6 8HW</p>
                        </div>
                    </div>
                </div>
                <div className='flex flex-col items-center justify-center lg:mt-4'>
                    <Link href='/buy-tickets' className="border-2 border-black rounded px-4 md:px-6 py-2 md:py-4 mt-8 hover:scale-105 transition-all">Buy Tickets</Link>
                </div>
            </main >

        </>
    )
}
