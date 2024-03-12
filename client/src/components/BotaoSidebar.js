import React from 'react';

export default function BotaoSidebar({ children, className, href }) {
    if (href) {
        return (
            <a
                href={href}
                className={`relative flex w-full mt-4 rounded-md px-14 py-1.5 font-semibold leading-6 text-white shadow-sm hover:bg-purple-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-purple-600 ${className}`}
            >
                {children}
            </a>
        );
    }

    return (
        <button
            className={`relative flex w-full mt-4 rounded-md px-14 py-1.5 font-semibold leading-6 text-white shadow-sm hover:bg-purple-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-purple-600 ${className}`}
        >
            {children}
        </button>
    );
}
