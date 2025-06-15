import Link from 'next/link';
import Image from 'next/image';
import { whatsappContact } from '@/lib/data/contactInfo';

const Hero = () => {
    return (
        <section className="relative h-[70vh] w-screen flex items-center justify-center overflow-hidden">

            <div className="absolute inset-0 bg-gradient-to-br from-gray-800 via-gray-700 to-gray-900">
                <Image 
                    src="/banner-light.png" 
                    alt="Packaging solutions banner background" 
                    fill 
                    className="object-cover" 
                    priority={true}
                    quality={80}
                    placeholder="blur"
                    blurDataURL="/placeholder.svg" 
                />
                <div className="absolute inset-0 bg-foreground/80" />
            </div>


            <div className="relative z-10 text-center max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">

                <h1 className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-bold text-white mb-6 leading-tight">
                    <span className="block text-white drop-shadow-[0_2px_4px_rgba(0,0,0,0.5)]">Prarambh Plastech</span>
                </h1>


                <p className="text-lg sm:text-xl md:text-2xl font-bold text-white mb-8 max-w-3xl mx-auto leading-relaxed drop-shadow-[0_2px_4px_rgba(0,0,0,0.5)]">
                    Sustainable Packaging, Premium Quality
                </p>

                <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
                    <Link href="/products" className="button">View Products</Link>
                    <Link href={`https://wa.me/${whatsappContact.number}?text=${encodeURIComponent(whatsappContact.defaultMessage)}`} className="transparent-button">Get Quote</Link>
                </div>
            </div>

            <div className="absolute top-0 left-0 w-full h-full pointer-events-none">
                <div className="absolute top-1/4 left-1/4 w-64 h-64 bg-blue-500/10 rounded-full blur-3xl"></div>
                <div className="absolute bottom-1/4 right-1/4 w-96 h-96 bg-blue-400/5 rounded-full blur-3xl"></div>
            </div>
        </section>
    );
};

export default Hero;