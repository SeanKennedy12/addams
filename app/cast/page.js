import React from 'react';
import Image from "next/image";
import Link from 'next/link';
import CastProfile from '../components/cast-profile';

export default function Cast() {
    return (
        <>
            <main className='px-8 py-6'>
                <h1 className='text-4xl font-semibold pb-6 text-center'>Cast A</h1>

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
                        <CastProfile img='/static/images/portraits/Mal_1.jpg' img2='/static/images/portraits/Mal_2.jpg' character='Mal' actor='Adam McLean' alt='Mal' id1='mal-1' id2='mal-2' />
                        <CastProfile img='/static/images/portraits/Alice_1.jpg' img2='/static/images/portraits/Alice_2.jpg' character='Alice' actor='Eden Hardie' alt='Alice' id1='alice-1' id2='alice-2' />
                    </section>

                    <h1 className='text-4xl font-semibold pt-12 text-center'>Cast B</h1>

                    <section className='grid md:grid-cols-2 gap-y-8 md:gap-y-12 justify-center md:justify-between mt-10'>
                        <CastProfile img='/static/images/portraits/MorticiaB_1.jpg' img2='/static/images/portraits/MorticiaB_2.jpg' character='Morticia Addams' actor='Chloe Miller' alt='Morticia Adams' id1='morticiaB-1' id2='morticiaB-2' />
                        <CastProfile img='/static/images/portraits/WednesdayB_1.jpg' img2='/static/images/portraits/WednesdayB_2.jpg' character='Wednesday Addams' actor='Alecia Dalziel' alt='Wednesday Adams' id1='wednesdayB-1' id2='wednesdayB-2' />
                        <CastProfile img='/static/images/portraits/GrandmaB_1.jpg' img2='/static/images/portraits/GrandmaB_2.jpg' character='Grandma' actor='Eilidh Waddington' alt='Grandma' id1='grandmaB-1' id2='grandmaB-2' />
                    </section>

                    {/* Other Cast */}
                    <h1 className='text-4xl font-semibold pt-12 text-center'>Ensemble</h1>
                    <section className='grid md:grid-cols-2 lg:grid-cols-3 gap-y-8 md:gap-y-12 justify-center md:justify-between mt-10'>
                        <CastProfile img='/static/images/portraits/Conquistador_1.jpg' img2='/static/images/portraits/Conquistador_2.jpg' character='Conquistador Ancestor' actor='Anna West' alt='Conquistador' id1='conquistador-1' id2='conquistador-2' />
                        <CastProfile img='/static/images/portraits/Flapper_1.jpg' img2='/static/images/portraits/Flapper_2.jpg' character='Flapper Ancestor' actor='Eva McIlquham' alt='Flapper' id1='flapper-1' id2='flapper-2' />
                        <CastProfile img='/static/images/portraits/Bride_1.jpg' img2='/static/images/portraits/Bride_2.jpg' character='Bride Ancestor' actor='Emma Rodgers' alt='Bride' id1='bride-1' id2='bride-2' />
                        <CastProfile img='/static/images/portraits/Flight_1.jpg' img2='/static/images/portraits/Flight_2.jpg' character='Flight Attendant Ancestor' actor='Kerry Ann Plunkett' alt='Flight Attendant' id1='flight-1' id2='flight-2' />
                        <CastProfile img='/static/images/portraits/Soldier_1.jpg' img2='/static/images/portraits/Soldier_2.jpg' character='Soldier Ancestor' actor='Maisie Reid' alt='Soldier' id1='soldier-1' id2='soldier-2' />
                        <CastProfile img='/static/images/portraits/Caveman_1.jpg' img2='/static/images/portraits/Caveman_2.jpg' character='Caveman Ancestor' actor='Brooke Stanners' alt='Caveman' id1='caveman-1' id2='caveman-2' />
                        <CastProfile img='/static/images/portraits/Puritan_1.jpg' img2='/static/images/portraits/Puritan_2.jpg' character='Puritan Ancestor' actor='Gavin Torrance' alt='Puritan' id1='puritan-1' id2='puritan-2' />
                        <CastProfile img='/static/images/portraits/Saloon_1.jpg' img2='/static/images/portraits/Saloon_2.jpg' character='Saloon Ancestor' actor='Cara Hunter' alt='Saloon' id1='saloon-1' id2='saloon-2' />
                        <CastProfile img='/static/images/portraits/C_1.jpg' img2='/static/images/portraits/C_2.jpg' character='Ancestor' actor='Rafat Omadara' alt='Ancestor' id1='C_1-1' id2='C_2-2' />
                        <CastProfile img='/static/images/portraits/D_1.jpg' img2='/static/images/portraits/D_2.jpg' character='Ancestor' actor='Ava Weir' alt='Ancestor' id1='D_1-1' id2='D_2-2' />
                        <CastProfile img='/static/images/portraits/E_1.jpg' img2='/static/images/portraits/E_2.jpg' character='Ancestor' actor='Isla Quinn' alt='Ancestor' id1='E_1-1' id2='E_2-2' />
                        <CastProfile img='/static/images/portraits/F_1.jpg' img2='/static/images/portraits/F_2.jpg' character='Ancestor' actor='Tulisa Stanners' alt='Ancestor' id1='F_1-1' id2='F_2-2' />
                        <CastProfile img='/static/images/portraits/G_1.jpg' img2='/static/images/portraits/G_2.jpg' character='Ancestor' actor='Alexa Russell' alt='Ancestor' id1='G_1-1' id2='G_2-2' />
                        <CastProfile img='/static/images/portraits/H_1.jpg' img2='/static/images/portraits/H_2.jpg' character='Ancestor' actor='Amy Boyle' alt='Ancestor' id1='H_1-1' id2='H_2-2' />
                        <CastProfile img='/static/images/portraits/I_1.jpg' img2='/static/images/portraits/I_2.jpg' character='Ancestor' actor='Mark Corr' alt='Ancestor' id1='I_1-1' id2='I_2-2' />
                    </section>

                    {/* Creatives */}
                    <h1 className='text-4xl font-semibold pt-12 text-center'>Creatives</h1>
                    <section className='grid md:grid-cols-2 lg:grid-cols-3 gap-y-8 md:gap-y-12 justify-center md:justify-between mt-10'>
                        <CastProfile img='/static/images/portraits/Diamond_1.jpg' img2='/static/images/portraits/Diamond_2.jpg' character='Director / Choreographer' actor='Mrs. Diamond' alt='Mrs. Diamond' id1='diamond-1' id2='diamond-2' />
                        <CastProfile img='/static/images/portraits/Sweeney_1.jpg' img2='/static/images/portraits/Sweeney_2.jpg' character='Musical Director' actor='Mr. Sweeney' alt='Mr. Sweeney' id1='sweeney-1' id2='sweeney-2' />
                        <CastProfile img='/static/images/portraits/Creely_1.jpg' img2='/static/images/portraits/Creely_2.jpg' character='Assistant Musical Director' actor='Mr. Creely' alt='Mr. Creely' id1='creely-1' id2='creely-2' />
                        <CastProfile img='/static/images/portraits/none.jpg' img2='/static/images/portraits/none.jpg' character='Sound / Light Designer' actor='Mr. Thomson' alt='Mr. Thomson' id1='thomson-1' id2='thomson-2' />
                        <CastProfile img='/static/images/portraits/none.jpg' img2='/static/images/portraits/none.jpg' character='Stage Manager' actor='Mrs. Wishart' alt='Mrs. Wishart' id1='wishart-1' id2='wishart-2' />
                        <CastProfile img='/static/images/portraits/none.jpg' img2='/static/images/portraits/none.jpg' character='Costume Supervisor' actor='Mrs. Oakes' alt='Mrs. Oakes' id1='oakes-1' id2='oakes-2' />
                        <CastProfile img='/static/images/portraits/none.jpg' img2='/static/images/portraits/none.jpg' character='Hair & Makeup Supervisor' actor='Miss. Simpson' alt='Miss. Simpson' id1='simpson-1' id2='simpson-2' />
                        <CastProfile img='/static/images/portraits/none.jpg' img2='/static/images/portraits/none.jpg' character='Web Developer' actor='Mr. Kennedy' alt='Mr. Kennedy' id1='kennedy-1' id2='kennedy-2' />
                    </section>

                    {/* Stage Crew */}
                    <h1 className='text-4xl font-semibold pt-12 text-center'>Stage Crew</h1>
                    <section className='grid md:grid-cols-1 gap-y-8 md:gap-y-12 justify-center md:justify-between mt-10'>
                        <CastProfile img='/static/images/portraits/J_1.jpg' img2='/static/images/portraits/J_2.jpg' character='Stage Crew' actor='Lee Smith' alt='Lee Smith' id1='J_2-1' id2='J_1-2' />
                    </section>

                    {/* Sound & Lights */}
                    <h1 className='text-4xl font-semibold pt-12 text-center'>Sound & Lights</h1>
                    <section className='grid md:grid-cols-2 gap-y-8 md:gap-y-12 justify-center md:justify-between mt-10'>
                        <CastProfile img='/static/images/portraits/B_1.jpg' img2='/static/images/portraits/B_2.jpg' character='Stage Lights Engineer' actor='Jamie Lindey' alt='Jamie Lindey' id1='B_1-1' id2='B_1-2' />
                        <CastProfile img='/static/images/portraits/A_1.jpg' img2='/static/images/portraits/A_2.jpg' character='Sound Engineer' actor='Lois Wilson' alt='Lois Wilson' id1='A_1-1' id2='A_1-2' />
                    </section>

                    {/* Orchestra */}
                    <h1 className='text-4xl font-semibold pt-12 text-center'>Orchestra</h1>
                    <section className='grid md:grid-cols-2 lg:grid-cols-3 gap-y-8 md:gap-y-12 justify-center md:justify-between mt-10'>
                        <CastProfile img='/static/images/portraits/Sweeney_1.jpg' img2='/static/images/portraits/Sweeney_2.jpg' character='Piano Conductor' actor='Mr. Sweeney' alt='Mr. Sweeney' id1='sweeneyB-1' id2='sweeneyB-2' />
                        <CastProfile img='/static/images/portraits/Creely_1.jpg' img2='/static/images/portraits/Creely_2.jpg' character='Keys 1' actor='Mr. Creely' alt='Mr. Creely' id1='creelyB-1' id2='creelyB-2' />
                        <CastProfile img='/static/images/portraits/none.jpg' img2='/static/images/portraits/none.jpg' character='Keys 2' actor='Kenan Elsever' alt='Kenan Elsever' id1='elsever-1' id2='elsever-2' />
                        <CastProfile img='/static/images/portraits/Mulrine_1.jpg' img2='/static/images/portraits/Mulrine_2.jpg' character='Bass Guiatar' actor='Mr. Mulrine' alt='Mr. Mulrine' id1='mulrine-1' id2='mulrine-2' />
                        <CastProfile img='/static/images/portraits/Scullion_1.jpg' img2='/static/images/portraits/Scullion_2.jpg' character='Guiatar' actor='Mr. Scullion' alt='Mr. Scullion' id1='scullion-1' id2='scullion-2' />
                        <CastProfile img='/static/images/portraits/none.jpg' img2='/static/images/portraits/none.jpg' character='Drum Kit' actor='Mr. McKenna' alt='Mr. McKenna' id1='mckenna-1' id2='mckenna-2' />
                        <CastProfile img='/static/images/portraits/none.jpg' img2='/static/images/portraits/none.jpg' character='Reed 1' actor='Mr. Hendry' alt='Mr. Hendry' id1='hendry-1' id2='hendry-2' />
                        <CastProfile img='/static/images/portraits/none.jpg' img2='/static/images/portraits/none.jpg' character='Reed 2' actor='Ms. Moverley' alt='Ms. Moverley' id1='moverley-1' id2='moverley-2' />
                        <CastProfile img='/static/images/portraits/none.jpg' img2='/static/images/portraits/none.jpg' character='Violin' actor='Ms. Steven' alt='Ms. Steven' id1='steven-1' id2='steven-2' />
                        <CastProfile img='/static/images/portraits/none.jpg' img2='/static/images/portraits/none.jpg' character='Trumpet' actor='Ms. Smith' alt='Ms. Smith' id1='smith-1' id2='smith-2' />
                        <CastProfile img='/static/images/portraits/none.jpg' img2='/static/images/portraits/none.jpg' character='Trombone' actor='Mr. Connolly' alt='Mr. Connolly' id1='connolly-1' id2='connolly-2' />
                        <CastProfile img='/static/images/portraits/puritan_1.jpg' img2='/static/images/portraits/puritan_2.jpg' character='Percussion' actor='Gavin Torrance' alt='Gavin Torrance' id1='torrance-1' id2='torrance-2' />
                    </section>

                    {/* Orchestra */}
                    <h1 className='text-4xl font-semibold pt-12 text-center'>With Special Thanks To...</h1>
                    <section className='flex flex-col items-center mt-10 text-center'>
                        <p className='text-2xl pb-10'>Mr. Watters, Ms. Spalding, Ms. McMillan and Mr. Haddow in the Technical Department for helping to design our set.</p>
                        <p className='text-2xl pb-10'>Mr. Earl for programme photograpy.</p>
                        <p className='text-2xl pb-10'>Mrs. Wishart for administrative duties and ticket distrubution.</p>
                        <p className='text-2xl pb-10'>Tunnocks and Lees for supplying complimentary goods.</p>
                        <p className='text-2xl pb-10'>Prop Hire Scotland for providing selected set and prop items.</p>
                        <p className='text-2xl pb-10'>AudioCP for providing sound and lighting equipment.</p>
                        <p className='text-2xl pb-10'>Our evening let janiitor, Amanda, for her continuous support.</p>
                        <p className='text-2xl pb-10'>The deicated and talented pupils of our school show cast who have worked tirelessly to bring our show together.</p>
                    </section>

                </div>

                <div className='flex flex-col items-center justify-center lg:mt-4'>
                    <Link href='/buy-tickets' className="border-2 border-black rounded px-4 md:px-6 py-2 md:py-4 hover:scale-105 transition-all">Buy Tickets</Link>
                </div>
            </main >

        </>
    )
}
