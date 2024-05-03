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
                        <CastProfile img='/static/images/portraits/Gomez_1.jpg' img2='/static/images/portraits/Gomez_2.jpg' character='Gomez Addams' actor='Scott Taylor' alt='Gomez Adams' />
                        <CastProfile img='/static/images/portraits/MorticiaA_1.jpg' img2='/static/images/portraits/MorticiaA_2.jpg' character='Morticia Addams' actor='Erin Cameron' alt='Morticia Adams' />
                        <CastProfile img='/static/images/portraits/WednesdayA_1.jpg' img2='/static/images/portraits/WednesdayA_2.jpg' character='Wednesday Addams' actor='Paige Brogan' alt='Wednesday Adams' />
                        <CastProfile img='/static/images/portraits/Pugsley_1.jpg' img2='/static/images/portraits/Pugsley_2.jpg' character='Pugsley Addams' actor='Kyle Chaplin' alt='Pugsley Adams' />
                        <CastProfile img='/static/images/portraits/Uncle_1.jpg' img2='/static/images/portraits/Uncle_2.jpg' character='Uncle Fester' actor='Jamie Prentice' alt='Uncle Fester' />
                        <CastProfile img='/static/images/portraits/Lurch_1.jpg' img2='/static/images/portraits/Lurch_2.jpg' character='Lurch' actor='Alasdair McLean' alt='Lurch' />
                        <CastProfile img='/static/images/portraits/GrandmaA_1.jpg' img2='/static/images/portraits/GrandmaA_2.jpg' character='Grandma' actor='Jessica O&apos;Toole' alt='Grandma' />
                        <CastProfile img='/static/images/portraits/Lucas_1.jpg' img2='/static/images/portraits/Lucas_2.jpg' character='Lucas' actor='Jack Harris' alt='Lucas' />
                        <CastProfile img='/static/images/portraits/D_1.jpg' img2='/static/images/portraits/D_2.jpg' character='Mal' actor='Adam McLean' alt='Mal' />
                        <CastProfile img='/static/images/portraits/Alice_1.jpg' img2='/static/images/portraits/Alice_2.jpg' character='Alice' actor='Eden Hardie' alt='Alice' />
                        <CastProfile img='/static/images/portraits/MorticiaB_1.jpg' img2='/static/images/portraits/MorticiaB_2.jpg' character='Morticia Addams' actor='Chloe Miller' alt='Morticia Adams' />
                        <CastProfile img='/static/images/portraits/WednesdayB_1.jpg' img2='/static/images/portraits/WednesdayB_2.jpg' character='Wednesday Addams' actor='Alecia Dalziel' alt='Wednesday Adams' />
                        <CastProfile img='/static/images/portraits/GrandmaB_1.jpg' img2='/static/images/portraits/GrandmaB_2.jpg' character='Grandma' actor='Eilidh Waddington' alt='Grandma' />
                    </section>
                    {/* Other Cast */}
                    <section className='grid md:grid-cols-3 gap-y-8 md:gap-y-12 justify-center md:justify-between mt-16'>
                        <CastProfile img='/static/images/portraits/Conquistador_1.jpg' img2='/static/images/portraits/Conquistador_2.jpg' character='Conquistador Ancestor' actor='Anna West' alt='Conquistador' />
                        <CastProfile img='/static/images/portraits/Flapper_1.jpg' img2='/static/images/portraits/Flapper_2.jpg' character='Flapper Ancestor' actor='Eva McIlquham' alt='Flapper' />
                        <CastProfile img='/static/images/portraits/Bride_1.jpg' img2='/static/images/portraits/Bride_2.jpg' character='Bride Ancestor' actor='Emma Rodgers' alt='Bride' />
                        <CastProfile img='/static/images/portraits/Flight_1.jpg' img2='/static/images/portraits/Flight_2.jpg' character='Flight Attendant Ancestor' actor='Kerry Ann Plenkett' alt='Flight Attendant' />
                        <CastProfile img='/static/images/portraits/Soldier_1.jpg' img2='/static/images/portraits/Soldier_2.jpg' character='Soldier Ancestor' actor='Maisie Reid' alt='Soldier' />
                        <CastProfile img='/static/images/portraits/Caveman_1.jpg' img2='/static/images/portraits/Caveman_2.jpg' character='Caveman Ancestor' actor='Brooke Stanners' alt='Caveman' />
                        <CastProfile img='/static/images/portraits/Puritan_1.jpg' img2='/static/images/portraits/Puritan_2.jpg' character='Puritan Ancestor' actor='Gavin Torrance' alt='Puritan' />
                        <CastProfile img='/static/images/portraits/Saloon_1.jpg' img2='/static/images/portraits/Saloon_2.jpg' character='Saloon Ancestor' actor='Cara Hunter' alt='Saloon' />
                    </section>
                </div>

                <div className='flex justify-center lg:mt-4'>
                    <Link href='/buy-tickets' className="border-2 border-black rounded px-4 md:px-6 py-2 md:py-4 mt-8">Buy Tickets</Link>
                </div>
            </main>

        </>
    )
}
