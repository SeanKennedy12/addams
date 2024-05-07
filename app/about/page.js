import React from 'react';
import Image from "next/image";
import Link from 'next/link';

export default function About() {
    return (
        <>
            <main className='px-8 py-6'>
                <h1 className='text-4xl font-semibold pb-6 text-center'>About the Show</h1>
                <div className='flex flex-col items-center lg:flex-row lg:items-start text-justify'>
                    <Image width={0} height={0} sizes='100vw' className='w-[100%] lg:w-[25vw] h-[auto] rounded-md' src='/static/images/about-main.jpeg' alt='Main cast' />
                    <div className='pt-4 lg:pl-4 lg:pt-0'>
                        <p>In the delightfully twisted world of THE ADDAMS FAMILY, a comical saga unfolds, centered on the unconventional yet endearing Addams clan. At its core lies a tale that strikes at the heart of paternal apprehension: Wednesday Addams, the epitome of darkness and charm, finds herself smitten with a young man from a decidedly normal family background. This revelation sends shockwaves through her eccentric family, particularly as she implores her father, Gomez, to keep her secret from her ever-discerning mother, Morticia.</p>
                        <p className='mt-4 lg:mt-8'>As the Addams family extends an invitation to Wednesday&apos;s beau and his bewildered parents for dinner, the stage is set for a collision of worlds. Amidst the chaos of the evening, truths are unveiled, bonds tested, and the Addams clan forced to confront the unsettling prospect of change.</p>
                        <p className='mt-4 lg:mt-8'>Through a symphony of dark humor and unexpected twists, THE ADDAMS FAMILY explores themes of belonging and individuality, reminding us that even in the most peculiar of circumstances, love and acceptance prevail.</p>
                    </div>
                </div>
                <Image width={0} height={0} sizes='100vw' className='w-[100%] lg:w-[20vw] h-[auto] mt-4 mx-auto' src='/static/images/gothic-rule.jpg' alt='Horizontal rule' />
                <div className='flex flex-col lg:flex-row-reverse mt-4 lg:mt-8 text-justify'>
                    <Image width={0} height={0} sizes='100vw' className='w-[100%] lg:w-[15vw] h-[auto]  rounded-md' src='/static/images/popcorn.jpg' alt='Popcorn' />
                    <div className='pt-4 lg:pr-4 lg:pt-0'>
                        <p>As you settle into the eerie ambiance of THE ADDAMS FAMILY show, prepare to tantalize your taste buds with a selection of delectable treats fit for even the most discerning of palates. Dive into buckets of freshly popped popcorn, its sweet aroma mingling with the excitement in the air. For those with a sweet tooth, indulge in an array of candies and confections, each offering a sinful delight reminiscent of the Addams&apos; own peculiar tastes. And as the night unfolds, sip on steaming cups of tea or coffee, their warmth a comforting companion to the macabre spectacle unfolding before your eyes. With treats as tantalizing as the tale itself, every moment of THE ADDAMS FAMILY promises to be a feast for the senses.</p>
                    </div>
                </div>
                <Image width={0} height={0} sizes='100vw' className='w-[100%] lg:w-[20vw] h-[auto] mt-4 mx-auto' src='/static/images/gothic-rule.jpg' alt='Horizontal rule' />
                <div className='flex flex-col lg:flex-row mt-8 text-justify'>
                    <Image width={0} height={0} sizes='100vw' className='w-[100%] lg:w-[15vw] h-[auto]  rounded-md' src='/static/images/tombola.jpg' alt='Tombola' />
                    <div className='pt-4 lg:pl-4 lg:pt-0'>
                        <p>Step right up and try your luck at the eerie allure of the tombola, adding an extra layer of excitement to your evening at THE ADDAMS FAMILY show. With each ticket purchased, anticipation builds as you await the chance to win an assortment of mysterious prizes lurking within the depths of the tombola&apos;s swirling depths. Will you uncover a curious trinket from the Addams&apos; own collection or perhaps a peculiar relic with a story all its own? As the tombola spins and rattles, casting shadows against the dimly lit backdrop, every pull of the lever brings the thrill of the unknown closer, weaving an enchanting thread of suspense into the fabric of the evening. So, join in the fun and embrace the thrill of uncertainty as you partake in the tombola experience, adding a touch of mystique to your unforgettable night with THE ADDAMS FAMILY.</p>
                    </div>
                </div>
                <div className='flex justify-center lg:mt-4'>
                    <Link href='/buy-tickets' className="border-2 border-black rounded px-4 md:px-6 py-2 md:py-4 mt-8">Buy Tickets</Link>
                </div>
            </main>

        </>
    )
}
