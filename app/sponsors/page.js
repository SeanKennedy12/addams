import React from 'react';
import Image from "next/image";
import Link from 'next/link';

export default function BuyTickets() {
    return (
        <>
            <main className='px-8 py-6'>
                <h1 className='text-4xl font-semibold pb-6 text-center'>Our Sponsors</h1>
                <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6'>
                    <div className='bg-white shadow-md rounded-lg overflow-hidden'>
                        <Image src='/static/images/scotcrest.png' width={500} height={500} alt='Scotcrest' />
                        <div className='p-4'>
                            <h1 className='text-xl font-semibold'>Scotcrest Uniforms</h1>
                            <p className='text-gray-600'>Scotcrest Schools are the preferred supplier for school uniforms in North Lanarkshire and Central Scotland.</p>
                            <a href='https://scotcrestschools.co.uk/' className='block bg-gray-900 text-white px-4 py-2 rounded mt-2 text-center' target='_blank'>Learn More</a>
                        </div>
                    </div>
                    <div className='bg-white shadow-md rounded-lg overflow-hidden'>
                        <Image src='/static/images/imagine-that.jpg' width={500} height={500} alt='Imagine That Performing Arts' />
                        <div className='p-4'>
                            <h1 className='text-xl font-semibold'>Imagine That Performing Arts</h1>
                            <p className='text-gray-600'>Imagine That Performing Arts helps students reach their full potential, learning and developing transferable skills.</p>
                            <a href='https://imaginethatperformingarts.com/' className='block bg-gray-900 text-white px-4 py-2 rounded mt-2 text-center' target='_blank'>Learn More</a>
                        </div>
                    </div>
                    <div className='bg-white shadow-md rounded-lg overflow-hidden'>
                        <Image src='/static/images/carnbroe.png' width={500} height={500} alt='Carnbroe School of Motoring' />
                        <div className='p-4'>
                            <h1 className='text-xl font-semibold'>Carnbroe School of Motoring</h1>
                            <p className='text-gray-600'>Learner, refresher, theory test and Pass Plus driving tuition in Lanarkshire from Carnbroe School of Motoring.</p>
                            <a href='https://www.carnbroeschoolofmotoring.co.uk/' className='block bg-gray-900 text-white px-4 py-2 rounded mt-2 text-center' target='_blank'>Learn More</a>
                        </div>
                    </div>
                </div>
                <div className='flex flex-col items-center justify-center lg:mt-4'>
                    <Link href='/buy-tickets' className="border-2 border-black rounded px-4 md:px-6 py-2 md:py-4 mt-8 button__left-right">Buy Tickets</Link>
                </div>
            </main>

        </>
    )
}
