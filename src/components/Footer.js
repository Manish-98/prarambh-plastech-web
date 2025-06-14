import Image from 'next/image';
import Link from 'next/link';
import IconGenerator from './IconGenerator';
import { contactInfo } from '@/lib/data/contactInfo';

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

    return (
        <footer className="bg-foreground-dark text-white">
            {/* CTA Section */}
            {showCTA && (
                <div className="bg-foreground py-16">
                    <div className="max-w-4xl mx-auto text-center px-4 sm:px-6 lg:px-8">
                        <h2 className="text-3xl sm:text-4xl font-bold text-white mb-6 leading-tight">{ctaTitle}</h2>
                        <p className="text-lg text-gray-300 mb-8 max-w-2xl mx-auto">{ctaSubtitle}</p>
                        <Link href={ctaButtonLink} className="button"> {ctaButtonText} </Link>
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
                                <Image 
                                    src="/logo.png" 
                                    alt="Prarambh Plastech" 
                                    width={38} 
                                    height={38} 
                                    className={'rounded-lg border-4 border-gray-200 p-[3px]'}
                                    quality={90}
                                    priority={true}
                                />
                                <span className="text-xl font-semibold text-white">Prarambh Plastech</span>
                            </div>
                            <p className="text-gray-400 leading-relaxed">{companyTagline}</p>
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
                                            <IconGenerator type={contact.icon} />
                                        </div>
                                        {contact.link ? (
                                            <a 
                                                href={contact.link}
                                                className="text-gray-400 hover:text-white transition-colors duration-200 whitespace-pre-line"
                                                target={contact.link.startsWith('http') ? '_blank' : undefined}
                                                rel={contact.link.startsWith('http') ? 'noopener noreferrer' : undefined}
                                            >
                                                {contact.text}
                                            </a>
                                        ) : (
                                            <span className="text-gray-400 whitespace-pre-line">{contact.text}</span>
                                        )}
                                    </li>
                                ))}
                            </ul>
                        </div>
                    </div>

                    {/* Bottom Bar */}
                    <div className="border-t border-foreground mt-12 pt-8">
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