import React from 'react';
import MetricCard from '@/components/MetricCard';
import GridImage from '@/components/GridImage';
import HeroBanner from '@/components/HeroBanner';
import MissionCard from '@/components/MissionCard';

// Company Overview Data
const companyData = [
    { label: "Nature of Business", value: "Manufacturer" },
    { label: "Additional Business", value: "Wholesale Business Office / Sale Office" },
    { label: "Company CEO", value: "Sumit Agrawal" },
    { label: "Total Number of Employees", value: "upto 10" },
    { label: "GST Registration Date", value: "01-03-2021" },
    { label: "Legal Status of Firm", value: "Private Limited Company" },
    { label: "Annual Turnover", value: "1.5 - 5 Cr" },
    { label: "GST Partner Name", value: "Satish Kumar Lath / Ruhi Lath" },
    { label: "GST No.", value: "24AALCP6816B1ZK" },
    { label: "CIN No.", value: "U25209GJ2020PTC119082" }
];

// Manufacturing Facility Images
const facilityImages = [
    {
        src: "/factory_gallery/IMG20211001155805.jpg",
        alt: "Manufacturing warehouse with organized inventory"
    },
    {
        src: "/factory_gallery/IMG20211001151154.jpg",
        alt: "Automated packaging production line"
    },
    {
        src: "/factory_gallery/IMG20211001151145.jpg",
        alt: "Quality control specialist at work"
    },
    {
        src: "/factory_gallery/IMG20211001151055.jpg",
        alt: "Industrial storage warehouse with shelving"
    },
    {
        src: "/factory_gallery/IMG20211001151137.jpg",
        alt: "Large manufacturing facility floor"
    },
    {
        src: "/factory_gallery/IMG20211001151122.jpg",
        alt: "Research and development team"
    }
];

// Mission Data
const missionData = [
    {
        title: "Eco-Conscious",
        description: "Sustainable packaging solutions for a greener future",
        icon: <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4.318 6.318a4.5 4.5 0 000 6.364L12 20.364l7.682-7.682a4.5 4.5 0 00-6.364-6.364L12 7.636l-1.318-1.318a4.5 4.5 0 00-6.364 0z" />
    },
    {
        title: "B2B-Focused",
        description: "Tailored solutions for business partnerships",
        icon: <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0zm6 3a2 2 0 11-4 0 2 2 0 014 0zM7 10a2 2 0 11-4 0 2 2 0 014 0z" />
    },
    {
        title: "Premium Quality",
        description: "Uncompromising standards in every product",
        icon: <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4M7.835 4.697a3.42 3.42 0 001.946-.806 3.42 3.42 0 014.438 0 3.42 3.42 0 001.946.806 3.42 3.42 0 013.138 3.138 3.42 3.42 0 00.806 1.946 3.42 3.42 0 010 4.438 3.42 3.42 0 00-.806 1.946 3.42 3.42 0 01-3.138 3.138 3.42 3.42 0 00-1.946.806 3.42 3.42 0 01-4.438 0 3.42 3.42 0 00-1.946-.806 3.42 3.42 0 01-3.138-3.138 3.42 3.42 0 00-.806-1.946 3.42 3.42 0 010-4.438 3.42 3.42 0 00.806-1.946 3.42 3.42 0 013.138-3.138z" />
    },
    {
        title: "Reliable Delivery",
        description: "On-time delivery you can count on",
        icon: <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" />
    }
];

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
                                icon={mission.icon}
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