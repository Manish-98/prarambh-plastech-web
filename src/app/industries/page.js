import HeroBanner from '@/components/HeroBanner';
import React from 'react';
import ClientsSearchWrapper from './clients-search-wrapper';
import { clients } from '@/lib/data/clients';

export const metadata = {
  title: 'Industries We Serve',
  description: 'Explore the sectors and clients we have partnered with across India for sustainable packaging solutions.',
  openGraph: {
    url: '/industries',
    images: [
      {
        url: '/api/og?title=Industries%20We%20Serve&subtitle=Trusted%20Partners&logo=/logo.png&bg=/banner-light.png',
        width: 1200,
        height: 630,
        alt: 'Industries OG Image',
      },
    ],
  },
  twitter: {
    images: ['/api/og?title=Industries%20We%20Serve&subtitle=Trusted%20Partners&logo=/logo.png&bg=/banner-light.png'],
  },
};

const Industries = () => {
    return (
        <section>
            <HeroBanner
                title="Industries we serve"
                description="Explore the sectors and clients we have partnered with across India"
                backgroundImage="/about-us-banner-2.jpeg"
            />
            <div className="w-full mx-auto">
                <ClientsSearchWrapper clients={clients} />
            </div>
        </section>
    )
}

export default Industries;