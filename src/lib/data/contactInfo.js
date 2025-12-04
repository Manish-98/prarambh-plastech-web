export const whatsappContact = {
    number: '+919499741984',
    defaultMessage: 'Hi Prarambh Plastech, I have a query regarding your products.'
};

export const phoneNumbers = ['+91 94997 41984', '+91 82380 50391'];

export const contactInfo = [
    {
        icon: 'location',
        text: 'Godown No. 1, Block No 922/2,\nYuvraj Estate, Giramtha, Daskroi,\nAhmedabad - 382425,\nGujarat, India',
        link: 'https://www.google.co.in/maps/dir//22.94999000,72.59457000'
    },
    ...phoneNumbers.map(number => ({
        icon: 'phone',
        text: number,
        link: `tel:${number}`
    })),
    {
        icon: 'email',
        text: 'prarambhplastech@gmail.com',
        link: 'mailto:prarambhplastech@gmail.com'
    },
    {
        icon: 'whatsapp',
        text: 'WhatsApp Support',
        link: `https://wa.me/${whatsappContact.number}?text=${encodeURIComponent(whatsappContact.defaultMessage)}`
    }
]; 