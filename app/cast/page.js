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
                        <CastProfile img='/static/images/portraits/Gomez_1.jpg' img2='/static/images/portraits/Gomez_2.jpg' character='Gomez Addams' actor='Scott Taylor' alt='Gomez Adams' id1='gomez-1' id2='gomez-2' />
                        <CastProfile img='/static/images/portraits/MorticiaA_1.jpg' img2='/static/images/portraits/MorticiaA_2.jpg' character='Morticia Addams' actor='Erin Cameron' alt='Morticia Adams' id1='morticiaA-1' id2='morticiaA-2' />
                        <CastProfile img='/static/images/portraits/WednesdayA_1.jpg' img2='/static/images/portraits/WednesdayA_2.jpg' character='Wednesday Addams' actor='Paige Brogan' alt='Wednesday Adams' id1='wednesdayA-1' id2='wednesdayA-2' />
                        <CastProfile img='/static/images/portraits/Pugsley_1.jpg' img2='/static/images/portraits/Pugsley_2.jpg' character='Pugsley Addams' actor='Kyle Chaplin' alt='Pugsley Adams' id1='puglsey-1' id2='pugsley-2' />
                        <CastProfile img='/static/images/portraits/Uncle_1.jpg' img2='/static/images/portraits/Uncle_2.jpg' character='Uncle Fester' actor='Jamie Prentice' alt='Uncle Fester' id1='fester-1' id2='fester-2' />
                        <CastProfile img='/static/images/portraits/Lurch_1.jpg' img2='/static/images/portraits/Lurch_2.jpg' character='Lurch' actor='Alasdair McLean' alt='Lurch' id1='lurch-1' id2='lurch-2' />
                        <CastProfile img='/static/images/portraits/GrandmaA_1.jpg' img2='/static/images/portraits/GrandmaA_2.jpg' character='Grandma' actor='Jessica O&apos;Toole' alt='Grandma' id1='grandmaA-1' id2='grandmaA-2' />
                        <CastProfile img='/static/images/portraits/Lucas_1.jpg' img2='/static/images/portraits/Lucas_2.jpg' character='Lucas' actor='Jack Harris' alt='Lucas' id1='lucas-1' id2='lucas-2' />
                        <CastProfile img='/static/images/portraits/D_1.jpg' img2='/static/images/portraits/D_2.jpg' character='Mal' actor='Adam McLean' alt='Mal' id1='mal-1' id2='mal-2' />
                        <CastProfile img='/static/images/portraits/Alice_1.jpg' img2='/static/images/portraits/Alice_2.jpg' character='Alice' actor='Eden Hardie' alt='Alice' id1='alice-1' id2='alice-2' />
                        <CastProfile img='/static/images/portraits/MorticiaB_1.jpg' img2='/static/images/portraits/MorticiaB_2.jpg' character='Morticia Addams' actor='Chloe Miller' alt='Morticia Adams' id1='morticiaB-1' id2='morticiaB-2' />
                        <CastProfile img='/static/images/portraits/WednesdayB_1.jpg' img2='/static/images/portraits/WednesdayB_2.jpg' character='Wednesday Addams' actor='Alecia Dalziel' alt='Wednesday Adams' id1='wednesdayB-1' id2='wednesdayB-2' />
                        <CastProfile img='/static/images/portraits/GrandmaB_1.jpg' img2='/static/images/portraits/GrandmaB_2.jpg' character='Grandma' actor='Eilidh Waddington' alt='Grandma' id1='grandmaB-1' id2='grandmaB-2' />
                    </section>
                    {/* Other Cast */}
                    <section className='grid md:grid-cols-3 gap-y-8 md:gap-y-12 justify-center md:justify-between mt-16'>
                        <CastProfile img='/static/images/portraits/Conquistador_1.jpg' img2='/static/images/portraits/Conquistador_2.jpg' character='Conquistador Ancestor' actor='Anna West' alt='Conquistador' id1='conquistador-1' id2='conquistador-2' />
                        <CastProfile img='/static/images/portraits/Flapper_1.jpg' img2='/static/images/portraits/Flapper_2.jpg' character='Flapper Ancestor' actor='Eva McIlquham' alt='Flapper' id1='flapper-1' id2='flapper-2' />
                        <CastProfile img='/static/images/portraits/Bride_1.jpg' img2='/static/images/portraits/Bride_2.jpg' character='Bride Ancestor' actor='Emma Rodgers' alt='Bride' id1='bride-1' id2='bride-2' />
                        <CastProfile img='/static/images/portraits/Flight_1.jpg' img2='/static/images/portraits/Flight_2.jpg' character='Flight Attendant Ancestor' actor='Kerry Ann Plenkett' alt='Flight Attendant' id1='flight-1' id2='flight-2' />
                        <CastProfile img='/static/images/portraits/Soldier_1.jpg' img2='/static/images/portraits/Soldier_2.jpg' character='Soldier Ancestor' actor='Maisie Reid' alt='Soldier' id1='soldier-1' id2='soldier-2' />
                        <CastProfile img='/static/images/portraits/Caveman_1.jpg' img2='/static/images/portraits/Caveman_2.jpg' character='Caveman Ancestor' actor='Brooke Stanners' alt='Caveman' id1='caveman-1' id2='caveman-2' />
                        <CastProfile img='/static/images/portraits/Puritan_1.jpg' img2='/static/images/portraits/Puritan_2.jpg' character='Puritan Ancestor' actor='Gavin Torrance' alt='Puritan' id1='puritan-1' id2='puritan-2' />
                        <CastProfile img='/static/images/portraits/Saloon_1.jpg' img2='/static/images/portraits/Saloon_2.jpg' character='Saloon Ancestor' actor='Cara Hunter' alt='Saloon' id1='saloon-1' id2='saloon-2' />
                    </section>
                </div>

                <div className='flex justify-center lg:mt-4'>
                    <Link href='/buy-tickets' className="border-2 border-black rounded px-4 md:px-6 py-2 md:py-4 mt-8">Buy Tickets</Link>
                </div>
            </main>

        </>
    )
}
