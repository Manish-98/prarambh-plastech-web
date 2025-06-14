import Image from 'next/image';
import Link from 'next/link';

const Footer = ({
    ctaTitle = "Have a packaging challenge? Let's solve it together.",
    ctaSubtitle = "Get in touch with our experts for customized packaging solutions",
    ctaButtonText = "Contact Us",
    ctaButtonLink = "/contact",
    companyTagline = "Sustainable Packaging, Premium Quality",
    showCTA = true
}) => {
    const quickLinks = [
        { name: 'Home', href: '/' },
        { name: 'Products', href: '/products' },
        { name: 'Industries', href: '/industries' },
        { name: 'About', href: '/about' },
        { name: 'Contact', href: '/contact' }
    ];

    const contactInfo = [
        {
            icon: 'location',
            text: 'Ahmedabad, Gujarat, India'
        },
        {
            icon: 'phone',
            text: '+1 (555) 123-4567'
        },
        {
            icon: 'email',
            text: 'info@packpro.com'
        },
        {
            icon: 'whatsapp',
            text: 'WhatsApp Support'
        }
    ];

    const ContactIcon = ({ iconType }) => {
        const iconProps = "w-5 h-5 text-gray-400";

        switch (iconType) {
            case 'location':
                return (
                    <svg className={iconProps} fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
                    </svg>
                );
            case 'phone':
                return (
                    <svg className={iconProps} fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
                    </svg>
                );
            case 'email':
                return (
                    <svg className={iconProps} fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 8l7.89 7.89a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                    </svg>
                );
            case 'whatsapp':
                return (
                    <svg className={iconProps} fill="currentColor" viewBox="0 0 24 24">
                        <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.890-5.335 11.893-11.893A11.821 11.821 0 0020.885 3.488" />
                    </svg>
                );
            default:
                return null;
        }
    };

    return (
        <footer className="bg-gray-800 text-white">
            {/* CTA Section */}
            {showCTA && (
                <div className="bg-gray-700 py-16">
                    <div className="max-w-4xl mx-auto text-center px-4 sm:px-6 lg:px-8">
                        <h2 className="text-3xl sm:text-4xl font-bold text-white mb-6 leading-tight">
                            {ctaTitle}
                        </h2>
                        <p className="text-lg text-gray-300 mb-8 max-w-2xl mx-auto">
                            {ctaSubtitle}
                        </p>
                        <Link
                            href={ctaButtonLink}
                            className="button"
                        >
                            {ctaButtonText}
                        </Link>
                    </div>
                </div>
            )}

            {/* Main Footer */}
            <div className="py-12">
                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                    <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                        {/* Company Info */}
                        <div className="space-y-4">
                            {/* Logo */}
                            <div className="flex items-center space-x-2 mb-6">
                                <Image src="/logo.png" alt="Prarambh Plastech" width={38} height={38} className={'rounded-lg border-4 border-gray-200 p-[3px]'} />
                                <span className="text-xl font-semibold text-white">Prarambh Plastech</span>
                            </div>
                            <p className="text-gray-400 leading-relaxed">
                                {companyTagline}
                            </p>
                        </div>

                        {/* Quick Links */}
                        <div>
                            <h3 className="text-lg font-semibold text-white mb-6">Quick Links</h3>
                            <ul className="space-y-3">
                                {quickLinks.map((link) => (
                                    <li key={link.name}>
                                        <Link
                                            href={link.href}
                                            className="text-gray-400 hover:text-white transition-colors duration-200"
                                        >
                                            {link.name}
                                        </Link>
                                    </li>
                                ))}
                            </ul>
                        </div>

                        {/* Contact Info */}
                        <div>
                            <h3 className="text-lg font-semibold text-white mb-6">Contact Info</h3>
                            <ul className="space-y-4">
                                {contactInfo.map((contact, index) => (
                                    <li key={index} className="flex items-start space-x-3">
                                        <div className="mt-1">
                                            <ContactIcon iconType={contact.icon} />
                                        </div>
                                        <span className="text-gray-400">{contact.text}</span>
                                    </li>
                                ))}
                            </ul>
                        </div>
                    </div>

                    {/* Bottom Bar */}
                    <div className="border-t border-gray-700 mt-12 pt-8">
                        <div className="flex flex-col md:flex-row justify-between items-center">
                            <p className="text-gray-400 text-sm">
                                © 2025 Prarambh Plastech. All rights reserved.
                            </p>
                        </div>
                    </div>
                </div>
            </div>
        </footer>
    );
};

export default Footer;