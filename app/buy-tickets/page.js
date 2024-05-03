'use client';

import React from 'react';
import Image from "next/image";
import Link from 'next/link';
import { useEffect } from 'react';

export default function BuyTickets() {

    useEffect(() => {
        // Function to create Eventbrite widget
        const createWidget = () => {
            var exampleCallback = function () {
                console.log('Order complete!');
            };

            if (typeof window !== 'undefined' && window.EBWidgets) {
                window.EBWidgets.createWidget({
                    // Required
                    widgetType: 'checkout',
                    eventId: '887221572607',
                    iframeContainerId: 'eventbrite-widget-container-887221572607',

                    // Optional
                    iframeContainerHeight: 425,
                    onOrderComplete: exampleCallback
                });
            }
        };

        createWidget();

        // Clean-up function to remove the widget when component unmounts
        return () => {
            // If needed, remove the widget here
        };
    }, []);



    return (
        <>
            <main className='px-8 py-6'>
                <h1 className='text-4xl font-semibold pb-6 text-center'>Buy Tickets</h1>
                <div id="eventbrite-widget-container-887221572607"></div>
            </main>

        </>
    )
}
