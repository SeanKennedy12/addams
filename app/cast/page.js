import React from 'react';
import Image from "next/image";
import Link from 'next/link';
import CastProfile from '../components/cast-profile';

export default function Cast() {
    return (
        <>
            <main className='px-8 py-6'>
                <h1 className='text-4xl font-semibold pb-6 text-center'>Cast</h1>

                <div>
                    {/* Main Cast */}
                    <section className='grid md:grid-cols-2 gap-y-8 md:gap-y-12 justify-center md:justify-between'>
                        <CastProfile img='/static/images/portraits/Gomez_1.jpg' img2='/static/images/portraits/Gomez_2.jpg' character='Gomez Addams' actor='Scott Taylor' />
                        <CastProfile img='/static/images/portraits/MorticiaA_1.jpg' img2='/static/images/portraits/MorticiaA_2.jpg' character='Morticia Addams' actor='Erin Cameron' />
                        <CastProfile img='/static/images/portraits/WednesdayA_1.jpg' img2='/static/images/portraits/WednesdayA_2.jpg' character='Wednesday Addams' actor='Paige Brogan' />
                        <CastProfile img='/static/images/portraits/Pugsley_1.jpg' img2='/static/images/portraits/Pugsley_2.jpg' character='Pugsley Addams' actor='Kyle Chaplin' />
                        <CastProfile img='/static/images/portraits/Uncle_1.jpg' img2='/static/images/portraits/Uncle_2.jpg' character='Uncle Fester' actor='Jamie Prentice' />
                        <CastProfile img='/static/images/portraits/Lurch_1.jpg' img2='/static/images/portraits/Lurch_2.jpg' character='Lurch' actor='Alasdair McLean' />
                        <CastProfile img='/static/images/portraits/GrandmaA_1.jpg' img2='/static/images/portraits/GrandmaA_2.jpg' character='Grandma' actor='Jessica O&apos;Toole' />
                        <CastProfile img='/static/images/portraits/Lucas_1.jpg' img2='/static/images/portraits/Lucas_2.jpg' character='Lucas' actor='Jack Harris' />
                        <CastProfile img='/static/images/portraits/Mal_1.jpg' img2='/static/images/portraits/?.jpg' character='Mal' actor='Adam McLean' />
                        <CastProfile img='/static/images/portraits/Alice_1.jpg' img2='/static/images/portraits/Alice_2.jpg' character='Alice' actor='Eden Hardie' />
                    </section>
                </div>

                <div className='flex justify-center lg:mt-4'>
                    <Link href='/buy-tickets' className="border-2 border-black rounded px-4 md:px-6 py-2 md:py-4 mt-8">Buy Tickets</Link>
                </div>
            </main>

        </>
    )
}
