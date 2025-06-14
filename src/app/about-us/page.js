import React from 'react';
import MetricCard from '@/components/MetricCard';
import GridImage from '@/components/GridImage';
import HeroBanner from '@/components/HeroBanner';
import MissionCard from '@/components/MissionCard';
import { companyData } from '@/lib/data/companyData';
import { facilityImages } from '@/lib/data/facilityImages';
import { missionData } from '@/lib/data/missionData';

const AboutUs = () => {
    return (
        <div className="min-h-screen">
            <HeroBanner
                title="About Us"
                description="Manufacturing and distributing high-quality packaging solutions since 2020"
                backgroundImage="/about-us-banner-2.jpeg"
            />

            {/* Main Content Section */}
            <div className="bg-soft py-20">
                <div className="max-w-6xl mx-auto px-5">
                    <div className="text-center">
                        <p className="text-lg leading-relaxed max-w-4xl mx-auto">
                            We are a leading B2B packaging company dedicated to providing innovative, sustainable, and cost-effective
                            packaging solutions for businesses across various industries. Our commitment to quality, reliability, and
                            customer satisfaction has established us as a trusted partner for companies seeking premium packaging
                            solutions that protect their products and enhance their brand presence in the marketplace.
                        </p>
                    </div>
                </div>
            </div>

            {/* Mission & Values Section */}
            <div className="bg-white py-20">
                <div className="max-w-7xl mx-auto px-5">
                    <h2 className="text-3xl sm:text-4xl font-bold text-gray-900 mb-12 text-center">
                        Our Mission & Values
                    </h2>

                    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
                        {missionData.map((mission, index) => (
                            <MissionCard
                                key={index}
                                title={mission.title}
                                description={mission.description}
                                iconType={mission.iconType}
                            />
                        ))}
                    </div>
                </div>
            </div>

            {/* Company Overview Section */}
            <div className="bg-soft py-20">
                <div className="max-w-7xl mx-auto px-5">
                    <h2 className="text-3xl sm:text-4xl font-bold text-gray-900 mb-12 text-center">
                        Company Overview
                    </h2>

                    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
                        {companyData.map((item, index) => (
                            <MetricCard key={index} label={item.label} value={item.value} />
                        ))}
                    </div>
                </div>
            </div>

            {/* Facility Section */}
            <div className="bg-white py-20">
                <div className="max-w-7xl mx-auto px-5">
                    <h2 className="text-3xl sm:text-4xl font-bold text-gray-900 mb-12 text-center">
                        Our Facility
                    </h2>

                    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                        {facilityImages.map((image, index) => (
                            <GridImage key={index} src={image.src} alt={image.alt} />
                        ))}
                    </div>
                </div>
            </div>
        </div>
    );
};

export default AboutUs;