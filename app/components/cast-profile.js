'use client';

import React, { useState } from 'react';
import Image from "next/image";
import Head from 'next/head';

export default function CastProfile({ img, img2, character, actor, alt, id1, id2 }) {

    const [image, setImage] = useState(img);

    // const handleMouseOver = () => {
    //     setImage(img2);
    // }
    // const handleMouseOut = () => {
    //     setImage(img);
    // }
    // const handleClick = () => {
    //     if (image === img) {
    //         setImage(img2);
    //     } else {
    //         setImage(img);
    //     }
    // }

    const handleClick1 = () => {
        document.getElementById(id1).classList.add('hidden');
        document.getElementById(id2).classList.remove('hidden');
    }
    const handleClick2 = () => {
        document.getElementById(id2).classList.add('hidden');
        document.getElementById(id1).classList.remove('hidden');
    }

    const handleOver = () => {
        document.getElementById(id1).classList.add('hidden');
        document.getElementById(id2).classList.remove('hidden');
    }

    const handleOut = () => {
        document.getElementById(id2).classList.add('hidden');
        document.getElementById(id1).classList.remove('hidden');
    }

    return (
        <div className='grid md:grid-cols-2 justify-items-center items-center'>
            {/* <Image width={200} height={200} className='rounded-full md:ml-auto md:mr-8' onMouseOver={handleMouseOver} onMouseOut={handleMouseOut} onClick={handleClick} src={image} alt={alt} priority={true} /> */}
            <Image width={200} height={200} className='rounded-full md:ml-auto md:mr-0' id={id1} src={img} priority={true} onClick={handleClick1} onMouseOver={handleOver} alt={alt} />
            <Image width={200} height={200} className='rounded-full md:ml-auto md:mr-0 hidden' id={id2} src={img2} priority={true} onClick={handleClick2} onMouseOut={handleOut} alt={alt} />
            <div className='ml-2 lg:ml-8 flex flex-col md:justify-start items-center md:items-start md:mr-auto'>
                <h3 className='text-2xl lg:text-3xl font-semibold mt-4 md:mt-0'>{character}</h3>
                <p className='text-xl mt-2'>{actor}</p>
            </div >
        </div >
    )
}
