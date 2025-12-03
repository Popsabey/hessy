import React from 'react';
import { Linkedin, Mail, Sun, Moon } from 'lucide-react';
import { useTheme } from '../context/ThemeContext';

const Footer = () => {
    const { theme, toggleTheme } = useTheme();
    return (
        <footer className="py-12 bg-slate-50 dark:bg-slate-950 text-slate-600 dark:text-slate-400 transition-colors duration-300">
            <div className="container max-w-5xl mx-auto px-6">
                <div className="flex flex-col md:flex-row justify-between items-center gap-8 mb-12">
                    {/* Logo & Tagline */}
                    <div className="text-center md:text-left max-w-md">
                        <div className="flex items-center justify-center md:justify-start gap-2 mb-3">
                            <div className="w-8 h-8 rounded-lg bg-blue-600 flex items-center justify-center text-white font-bold">H</div>
                            <div className="text-2xl font-bold text-slate-900 dark:text-white tracking-tight">Hessie</div>
                        </div>
                        <p className="text-slate-600 dark:text-slate-400 text-sm leading-relaxed">
                            Your intelligent work companion. Reclaim your time and focus on what matters.
                        </p>
                    </div>

                    {/* Connect (Icons) */}
                    <div className="flex gap-6">
                        <a href="#" className="p-2 bg-white dark:bg-slate-800 rounded-full border border-slate-200 dark:border-slate-700 hover:border-blue-500 dark:hover:border-blue-500 text-slate-500 dark:text-slate-400 hover:text-blue-600 dark:hover:text-blue-400 transition-all duration-300 group" aria-label="X (formerly Twitter)">
                            <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="w-5 h-5 group-hover:scale-110 transition-transform">
                                <path d="M4 4l11.733 16h4.267l-11.733 -16z" />
                                <path d="M4 20l6.768 -6.768m2.46 -2.46l6.772 -6.772" />
                            </svg>
                        </a>
                        <a href="#" className="p-2 bg-white dark:bg-slate-800 rounded-full border border-slate-200 dark:border-slate-700 hover:border-blue-500 dark:hover:border-blue-500 text-slate-500 dark:text-slate-400 hover:text-blue-600 dark:hover:text-blue-400 transition-all duration-300 group" aria-label="LinkedIn">
                            <Linkedin size={20} className="group-hover:scale-110 transition-transform" />
                        </a>
                        <a href="#" className="p-2 bg-white dark:bg-slate-800 rounded-full border border-slate-200 dark:border-slate-700 hover:border-blue-500 dark:hover:border-blue-500 text-slate-500 dark:text-slate-400 hover:text-blue-600 dark:hover:text-blue-400 transition-all duration-300 group" aria-label="Email">
                            <Mail size={20} className="group-hover:scale-110 transition-transform" />
                        </a>
                    </div>
                </div>

                {/* Bottom Bar */}
                <div className="pt-8 border-t border-slate-200 dark:border-slate-800 flex flex-col md:flex-row justify-between items-center gap-4 text-xs text-slate-500 dark:text-slate-500">
                    <div>© 2025 Hessie AI. All rights reserved.</div>
                    <div className="flex items-center gap-6">
                        <div className="flex gap-6">
                            <a href="#" className="hover:text-slate-900 dark:hover:text-slate-300 transition-colors">Terms</a>
                            <a href="#" className="hover:text-slate-900 dark:hover:text-slate-300 transition-colors">Privacy Policy</a>
                            <a href="#" className="hover:text-slate-900 dark:hover:text-slate-300 transition-colors">Cookies</a>
                        </div>
                    </div>
                </div>
            </div>
        </footer>
    );
};

export default Footer;
