import React from 'react';

const IconGenerator = ({
    type,
    className = "w-5 h-5",
    color = "text-gray-400",
    fill = "none",
    stroke = "currentColor"
}) => {
    const iconProps = `${className} ${color}`;

    switch (type) {
        // Contact Icons
        case 'location':
            return (
                <svg className={iconProps} fill={fill} stroke={stroke} viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
                </svg>
            );
        case 'phone':
            return (
                <svg className={iconProps} fill={fill} stroke={stroke} viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
                </svg>
            );
        case 'email':
            return (
                <svg className={iconProps} fill={fill} stroke={stroke} viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 8l7.89 7.89a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                </svg>
            );
        case 'whatsapp':
            return (
                <svg className={iconProps} fill="currentColor" viewBox="0 0 24 24">
                    <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.890-5.335 11.893-11.893A11.821 11.821 0 0020.885 3.488" />
                </svg>
            );

        // Mission Icons
        case 'eco':
            return (
                <svg className={iconProps} fill={fill} stroke={stroke} viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4.318 6.318a4.5 4.5 0 000 6.364L12 20.364l7.682-7.682a4.5 4.5 0 00-6.364-6.364L12 7.636l-1.318-1.318a4.5 4.5 0 00-6.364 0z" />
                </svg>
            );
        case 'b2b':
            return (
                <svg className={iconProps} fill={fill} stroke={stroke} viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0zm6 3a2 2 0 11-4 0 2 2 0 014 0zM7 10a2 2 0 11-4 0 2 2 0 014 0z" />
                </svg>
            );
        case 'quality':
            return (
                <svg className={iconProps} fill={fill} stroke={stroke} viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4M7.835 4.697a3.42 3.42 0 001.946-.806 3.42 3.42 0 014.438 0 3.42 3.42 0 001.946.806 3.42 3.42 0 013.138 3.138 3.42 3.42 0 00.806 1.946 3.42 3.42 0 010 4.438 3.42 3.42 0 00-.806 1.946 3.42 3.42 0 01-3.138 3.138 3.42 3.42 0 00-1.946.806 3.42 3.42 0 01-4.438 0 3.42 3.42 0 00-1.946-.806 3.42 3.42 0 01-3.138-3.138 3.42 3.42 0 00-.806-1.946 3.42 3.42 0 010-4.438 3.42 3.42 0 00.806-1.946 3.42 3.42 0 013.138-3.138z" />
                </svg>
            );
        case 'delivery':
            return (
                <svg className={iconProps} fill={fill} stroke={stroke} viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" />
                </svg>
            );

        // Navigation Icons
        case 'menu':
            return (
                <svg className={iconProps} fill={fill} stroke={stroke} viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
                </svg>
            );
        case 'close':
            return (
                <svg className={iconProps} fill={fill} stroke={stroke} viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                </svg>
            );
        case 'search':
            return (
                <svg className={iconProps} fill={fill} stroke={stroke} viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z" />
                </svg>
            );
        case 'flame':
            return (
                <svg viewBox="0 0 24 24" fill={fill} stroke={stroke} className={iconProps}>
                    <path
                        d="M8.5 14.5A2.5 2.5 0 0011 12c0-1.38-.5-2-1-3-1.072-2.143-.224-4.054 2-6 .5 2.5 2 4.9 4 6.5 2 1.6 3 3.5 3 5.5a7 7 0 11-14 0c0-1.153.433-2.294 1-3a2.5 2.5 0 002.5 2.5z"
                        strokeWidth={2}
                        strokeLinecap="round"
                        strokeLinejoin="round"
                    />
                </svg>
            );
        case 'shield':
            return (
                <svg className={iconProps} fill={fill} stroke={stroke} viewBox="0 0 24 24">
                    <path d="M12 2L4 5v6.09c0 5.05 3.41 9.76 8 10.91c4.59-1.15 8-5.86 8-10.91V5l-8-3z" strokeWidth={2} strokeLinecap='round' strokeLinejoin='round' />
                    <path d="M9 12l2 2l4-4" strokeWidth={2} strokeLinecap="round" strokeLinejoin="round" />
                </svg>
            );
        case 'printer':
            return (
                <svg className={iconProps} fill={fill} stroke={stroke} viewBox="0 0 24 24">
                    <path d="M6 9V2h12v7" strokeWidth={2} strokeLinecap='round' strokeLinejoin='round' />
                    <path d="M6 18H4a2 2 0 01-2-2v-5a2 2 0 012-2h16a2 2 0 012 2v5a2 2 0 01-2 2h-2" strokeWidth={2} strokeLinecap='round' strokeLinejoin='round' />
                    <rect x="6" y="14" width="12" height="8" rx="1" strokeWidth={2} strokeLinecap='round' strokeLinejoin='round' />
                    <circle cx="17" cy="12" r="1" />
                </svg>
            );
        case 'surgical':
            return (
                <svg viewBox="-2.5 0 19 19" fill={fill} stroke={stroke} className={iconProps}>
                    <path d="M11.56 10.11v2.046a3.827 3.827 0 1 1-7.655 0v-.45A3.61 3.61 0 0 1 .851 8.141V5.25a1.682 1.682 0 0 1 .763-1.408 1.207 1.207 0 1 1 .48 1.04.571.571 0 0 0-.135.368v2.89a2.5 2.5 0 0 0 5 0V5.25a.57.57 0 0 0-.108-.334 1.208 1.208 0 1 1 .533-1.018 1.681 1.681 0 0 1 .683 1.352v2.89a3.61 3.61 0 0 1-3.054 3.565v.45a2.719 2.719 0 0 0 5.438 0V10.11a2.144 2.144 0 1 1 1.108 0zm.48-2.07a1.035 1.035 0 1 0-1.035 1.035 1.037 1.037 0 0 0 1.036-1.035z"
                        strokeWidth={1} strokeLinecap='round' strokeLinejoin='round' />
                </svg>
            );
        case 'scotch':
            return (
                <svg viewBox="0 0 32 32" fill={fill} stroke={stroke} className={iconProps} strokeWidth={1.5} strokeLinecap='round' strokeLinejoin='round'>
                    <path className="cls-1" d="M16,7H13a1,1,0,0,1,0-2h3a1,1,0,0,1,0,2Z"></path>
                    <path className="cls-1" d="M16,12H13a1,1,0,0,1,0-2h3a1,1,0,0,1,0,2Z"></path>
                    <path className="cls-1" d="M16,17H13a1,1,0,0,1,0-2h3a1,1,0,0,1,0,2Z"></path>
                    <path className="cls-1" d="M16,22H13a1,1,0,0,1,0-2h3a1,1,0,0,1,0,2Z"></path>
                    <path className="cls-1" d="M16,27H13a1,1,0,0,1,0-2h3a1,1,0,0,1,0,2Z"></path>
                    <path className="cls-2" d="M14,32H8a3,3,0,0,1-3-3V25a1,1,0,0,1,2,0v4a1,1,0,0,0,1,1h6a1,1,0,0,0,1-1V3a1,1,0,0,0-1-1H8A1,1,0,0,0,7,3V21a1,1,0,0,1-2,0V3A3,3,0,0,1,8,0h6a3,3,0,0,1,3,3V29A3,3,0,0,1,14,32Z"></path>
                    <path className="cls-2" d="M23,32a1,1,0,0,1-.857-.485l-3-5A1,1,0,0,1,19,26V4a4,4,0,0,1,8,0V6a1,1,0,0,1-2,0V4a2,2,0,0,0-4,0V25.723l2,3.333,2-3.333V10a1,1,0,0,1,2,0V26a1,1,0,0,1-.143.515l-3,5A1,1,0,0,1,23,32Z"></path>
                    <path className="cls-2" d="M26,27H20a1,1,0,0,1,0-2h6a1,1,0,0,1,0,2Z"></path>
                    <path className="cls-2" d="M26,7H20a1,1,0,0,1,0-2h6a1,1,0,0,1,0,2Z"></path>
                </svg>
            );
        case 'industry':
            return (
                <svg viewBox="0 0 24 24" fill={fill} stroke={stroke} className={iconProps} strokeWidth={2} strokeLinecap='round' strokeLinejoin='round'>
                    <path d="M5.6 20H18.4C18.9601 20 19.2401 20 19.454 19.891C19.6422 19.7951 19.7951 19.6422 19.891 19.454C20 19.2401 20 18.9601 20 18.4V6.93137C20 6.32556 20 6.02265 19.8802 5.88238C19.7763 5.76068 19.6203 5.69609 19.4608 5.70865C19.2769 5.72312 19.0627 5.93731 18.6343 6.36569L15.3657 9.63431C14.9373 10.0627 14.7231 10.2769 14.5392 10.2914C14.3797 10.3039 14.2237 10.2393 14.1198 10.1176C14 9.97735 14 9.67445 14 9.06863V6.93137C14 6.32556 14 6.02265 13.8802 5.88238C13.7763 5.76068 13.6203 5.69609 13.4608 5.70865C13.2769 5.72312 13.0627 5.93731 12.6343 6.36569L9.36569 9.63431C8.93731 10.0627 8.72312 10.2769 8.53923 10.2914C8.37967 10.3039 8.22374 10.2393 8.1198 10.1176C8 9.97735 8 9.67445 8 9.06863V4.8C8 4.51997 8 4.37996 7.9455 4.273C7.89757 4.17892 7.82108 4.10243 7.727 4.0545C7.62004 4 7.48003 4 7.2 4H4.8C4.51997 4 4.37996 4 4.273 4.0545C4.17892 4.10243 4.10243 4.17892 4.0545 4.273C4 4.37996 4 4.51997 4 4.8V18.4C4 18.9601 4 19.2401 4.10899 19.454C4.20487 19.6422 4.35785 19.7951 4.54601 19.891C4.75992 20 5.03995 20 5.6 20Z"></path>
                </svg>
            )
        default:
            return null;
    }
};

export default IconGenerator; 