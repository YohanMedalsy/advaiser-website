import React from 'react';

const Logo = ({ className = "h-10" }) => {
    return (
        <img
            src="/logo-processed.png"
            alt="advAIser Logo"
            className={`${className} w-auto object-contain`}
        />
    );
};

export default Logo;
