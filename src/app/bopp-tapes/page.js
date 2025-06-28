import HeroBanner from '@/components/HeroBanner';
import IconGenerator from '@/components/IconGenerator';
import MissionCard from '@/components/MissionCard';
import ComparisonCard from '@/components/ComparisonCard';
import SectionHeader from '@/components/SectionHeader';
import Accordion from '@/components/Accordion.js';
import { faqs, industries, boppFeatures, celloTapeFeatures, timelineData, boppTypes } from '@/lib/data/bopp-data';
import Image from 'next/image';

export const metadata = {
    title: 'BOPP Tapes',
    description: 'Discover durable BOPP tapes for industrial packaging — strong, clean, and sustainable.',
    openGraph: {
        url: '/bopp-tapes',
        images: [
            {
                url: '/api/og?title=BOPP%20Tapes&subtitle=Strong%20%26%20Sustainable&logo=/logo.png&bg=/banner-light.png',
                width: 1200,
                height: 630,
                alt: 'BOPP Tapes OG Image',
            },
        ],
    },
    twitter: {
        images: ['/api/og?title=BOPP%20Tapes&subtitle=Strong%20%26%20Sustainable&logo=/logo.png&bg=/banner-light.png'],
    },
};


const BOPPTapesPage = () => {
    return (
        <div className="relative min-h-screen">
            {/* Hero Section */}
            <section className="w-full mx-auto text-white/80">
                <HeroBanner
                    title="BOPP Adhesive Tapes"
                    description="Types, Applications & Advantages"
                    backgroundImage="/bopp-tape-banner.jpeg"
                    minHeight="400px"
                />
            </section>

            {/* Evolution Section */}
            <section className="bg-soft py-20">
                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                    <SectionHeader title="The Evolution of Tapes in Human History" />
                    <p className="text-lg text-gray-600 max-w-4xl mx-auto text-center">
                        From ancient civilizations using natural adhesives to modern industrial applications,
                        adhesive tapes have revolutionized how we package, seal, and secure materials across
                        countless industries.
                    </p>
                </div>
            </section>

            {/* Timeline Section */}
            <section className="bg-white py-20">
                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                    <SectionHeader title="From Surgical Tape to Scotch Tape to BOPP" />
                    <div className="grid lg:grid-cols-2 gap-12 items-center max-w-6xl mx-auto text-center px-4 sm:px-6">
                        <div className="space-y-6 text-gray-600">
                            <p className="text-lg leading-relaxed">
                                The journey of adhesive tapes began in the early 1900s with surgical
                                tape, evolved through the invention of Scotch tape in 1930, and reached
                                new heights with BOPP (Biaxially Oriented Polypropylene) tapes in the
                                1960s.
                            </p>
                            <p className="text-lg leading-relaxed">
                                BOPP tapes represent the pinnacle of adhesive technology, offering
                                superior strength, clarity, and versatility that has made them
                                indispensable in modern packaging and industrial applications.
                            </p>
                        </div>
                        <div className="flex justify-center items-center">
                            <div className="flex items-center space-x-12">
                                {timelineData.map((item, index) => (
                                    <div key={index} className="flex flex-col items-center text-center">
                                        <div className="w-16 h-16 bg-accent/10 rounded-full flex items-center justify-center mb-4">
                                            <IconGenerator type={item.icon} className="w-8 h-8 text-accent" />
                                        </div>
                                        <div className="text-accent font-semibold text-lg mb-1">{item.year}</div>
                                        <div className="text-gray-600 text-sm">{item.name}</div>
                                    </div>
                                ))}
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            {/* Types Section */}
            <section className="py-20 bg-soft">
                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                    <SectionHeader title="Types of BOPP Tapes" />
                    <div className="grid md:grid-cols-3 gap-8">
                        {boppTypes.map((type, index) => (
                            <MissionCard
                                key={index}
                                title={type.title}
                                description={type.description}
                                iconType={type.iconType}
                            />
                        ))}
                    </div>
                </div>
            </section>

            {/* Industries Section */}
            <section className="bg-white text-gray-900 py-20">
                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                    <SectionHeader title="How Industries Use BOPP Adhesive Tapes" />
                    <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
                        <div className="space-y-4">
                            {industries.map((industry, index) => (
                                <div key={index} className="flex items-center gap-6">
                                    <div className="w-4 h-4 bg-accent rounded-sm flex-shrink-0"></div>
                                    <span className="text-lg">{industry}</span>
                                </div>
                            ))}
                        </div>
                        <div className="flex justify-center">
                            <Image
                                src="/bopp-tape-banner.jpeg"
                                alt="BOPP Tape in industrial use"
                                width={480}
                                height={320}
                                className="rounded-lg"
                                loading="lazy"
                            />
                        </div>
                    </div>
                </div>
            </section>

            {/* Comparison Section */}
            <section className="text-center py-20 bg-soft">
                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                    <SectionHeader title="BOPP vs. Cello Tape" />
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-12 max-w-6xl mx-auto">
                        <ComparisonCard
                            title="BOPP Tape"
                            features={boppFeatures}
                            titleColor="text-accent"
                            backgroundColor="bg-white"
                        />
                        <ComparisonCard
                            title="Cello Tape"
                            features={celloTapeFeatures}
                            titleColor="text-accent"
                            backgroundColor="bg-white"
                        />
                    </div>
                </div>
            </section>

            <section className="bg-white text-gray-900 py-20">
                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                    <div className="max-w-4xl mx-auto">
                        {/* Header */}
                        <h2 className="text-3xl md:text-4xl font-bold text-center mb-16">
                            BOPP Adhesive Tapes FAQs
                        </h2>

                        {/* FAQ Accordion */}
                        <Accordion faqs={faqs} />

                        {/* Disclaimer */}
                        <div className="text-center mt-8">
                            <p className="text-gray-500 text-sm leading-relaxed max-w-3xl mx-auto">
                                The information provided in this guide is for educational purposes only. Product specifications may vary by manufacturer. Always consult with your packaging supplier for specific application requirements.
                            </p>
                        </div>
                    </div>
                </div>
            </section>
        </div>
    );
};

export default BOPPTapesPage;