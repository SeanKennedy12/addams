'use client';
import Image from "next/image";
import Link from "next/link";
import { useEffect } from "react";

export default function Home() {
  //useEffect to add and remove the hidden class to the spider image
  useEffect(() => {

    //change the image with the id crawling-spider to block
    const spider = document.getElementById('crawling-spider');
    //set a timeout to add the hidden class back to the image after 5 seconds
    setTimeout(() => {
      if (spider) {
        spider.classList.remove('hidden');
      }
    }, 4000);
    //set a timeout to add the hidden class back to the image after 5 seconds
    setTimeout(() => {
      if (spider) {
        spider.classList.add('hidden');
      }
    }, 8000);
  }, []);




  return (
    <>
      <main className="h-[calc(100vh_-_81px)] max-h-[calc(100vh_-_81px)] overflow-hidden flex flex-col items-center justify-center relative">
        <Image height={300} width={300} src='/static/images/web.PNG' alt='Spider web' className="hidden md:block absolute top-0 left-0" />
        <h2 className="md:text-lg mb-4">Caldervale High presents</h2>
        <Image width={0} height={0} sizes='100vw' className='w-[250px] md:w-[300px] h-auto' src='/static/images/logo-cropped-black.svg' alt='The Addams Family' />
        <Link href='/buy-tickets' className="border-2 border-black rounded px-4 md:px-6 py-2 md:py-4 mt-8">Buy Tickets</Link>
        <Image width={0} height={0} sizes='100vw' className='w-[auto] h-[100vh] absolute bottom-[-280px] right-[-170px] hidden md:hidden' src='/images/spider-crawling-across-270.gif' id="crawling-spider" alt='Spider' />
      </main>
    </>
  );
}
