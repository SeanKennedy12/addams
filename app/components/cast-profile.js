'use client';

import React, { useState } from 'react';
import Image from "next/image";
import Head from 'next/head';

export default function CastProfile({ img, img2, character, actor, alt }) {

    const [image, setImage] = useState(img);

    const handleMouseOver = () => {
        setImage(img2);
    }
    const handleMouseOut = () => {
        setImage(img);
    }
    const handleClick = () => {
        if (image === img) {
            setImage(img2);
        } else {
            setImage(img);
        }
    }

    return (
        <div className='grid md:grid-cols-2 justify-items-center items-center'>
            <Head>
                <link rel="preload" as="image" href={img2} />
            </Head>
            <Image width={200} height={200} className='rounded-full md:ml-auto md:mr-8' onMouseOver={handleMouseOver} onMouseOut={handleMouseOut} onClick={handleClick} src={image} alt={alt} />
            <Image width={200} height={200} className='rounded-full md:ml-auto md:mr-8 hidden' src={img2} />
            <div className='ml-0 flex flex-col md:justify-start items-center md:items-start md:mr-auto'>
                <h3 className='text-2xl md:text-3xl font-semibold mt-4 md:mt-0'>{character}</h3>
                <p className='text-xl mt-2'>{actor}</p>
            </div >
        </div >
    )
}
