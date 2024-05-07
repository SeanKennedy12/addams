'use client';

import React from 'react';
import Script from 'next/script';

export default function BuyTickets() {

    return (
        <>
            <main className='px-8 py-6'>
                <h1 className='text-4xl font-semibold pb-6 text-center'>Buy Tickets</h1>
                <div id="eventbrite-widget-container-887221572607"></div>
            </main>
            <Script src="https://www.eventbrite.co.uk/static/widgets/eb_widgets.js" strategy="beforeInteractive"></Script>
            <Script id='inline'>
                {`
  var exampleCallback = function() {
    console.log('Order complete!');
};

window.EBWidgets.createWidget({
    // Required
    widgetType: 'checkout',
    eventId: '887221572607',
    iframeContainerId: 'eventbrite-widget-container-887221572607',

    // Optional
    iframeContainerHeight: 425,  // Widget height in pixels. Defaults to a minimum of 425px if not provided
    onOrderComplete: exampleCallback  // Method called when an order has successfully completed
});
                `}
            </Script>
        </>
    )
}
