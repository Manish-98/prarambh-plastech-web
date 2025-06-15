export const whatsappContact = {
    number: '+919883863810',
    defaultMessage: 'Hi Prarambh Plastech, I have a query regarding your products.'
};

export const contactInfo = [
    {
        icon: 'location',
        text: 'Godown No. 1, Block No 922/2,\nYuvraj Estate, Giramtha, Daskroi,\nAhmedabad - 382425,\nGujarat, India',
        link: 'https://www.google.co.in/maps/dir//22.94999000,72.59457000'
    },
    {
        icon: 'phone',
        text: '+91 98838 63810',
        link: `tel:${whatsappContact.number}`
    },
    {
        icon: 'email',
        text: 'info@prarambhplastech.com',
        link: 'mailto:info@prarambhplastech.com'
    },
    {
        icon: 'whatsapp',
        text: 'WhatsApp Support',
        link: `https://wa.me/${whatsappContact.number}?text=${encodeURIComponent(whatsappContact.defaultMessage)}`
    }
]; 