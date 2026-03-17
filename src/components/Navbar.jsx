import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';

const Navbar = () => {
    const [isScrolled, setIsScrolled] = useState(false);

    useEffect(() => {
        const handleScroll = () => {
            setIsScrolled(window.scrollY > 20);
        };
        window.addEventListener('scroll', handleScroll);
        return () => window.removeEventListener('scroll', handleScroll);
    }, []);

    return (
        <nav
            className={`fixed top-0 left-0 right-0 z-50 flex justify-center transition-all duration-300 ${isScrolled ? 'pt-4' : 'pt-6'
                }`}
        >
            <div
                className={`relative flex items-center justify-between px-6 transition-all duration-300 ${isScrolled
                    ? 'w-[90%] max-w-5xl bg-white/80 dark:bg-slate-900/80 backdrop-blur-xl border border-slate-200/60 dark:border-slate-800/60 shadow-lg rounded-full py-3'
                    : 'w-full max-w-5xl bg-transparent py-2'
                    }`}
            >
                {/* Left: Logo */}
                <div className="flex items-center gap-2">
                    <img src="/logo.png" alt="Hessie Logo" className="w-8 h-8 rounded-md" />
                    <span className="text-xl font-bold text-slate-900 dark:text-white tracking-tight">Hessie</span>
                </div>

                <div className="flex items-center gap-4">
                    <a href="#waitlist" className="inline-flex btn btn-primary text-sm px-5 py-2">
                        Join Waitlist
                    </a>
                </div>
            </div>
        </nav>
    );
};

export default Navbar;
