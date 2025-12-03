import React from 'react';
import { motion } from 'framer-motion';
import { ArrowRight } from 'lucide-react';
import { Link } from 'react-router-dom';

const Hero = () => {
    return (
        <section className="relative min-h-screen flex items-center justify-center overflow-hidden pt-20 transition-colors duration-300">
            {/* Background Effects (Subtle Blue, Cream, Yellow - NO GREEN) */}
            <div className="absolute inset-0 z-0 overflow-hidden pointer-events-none">
                <div className="absolute top-[-20%] left-[-10%] w-[800px] h-[800px] bg-gradient-to-br from-blue-100/60 to-indigo-100/60 dark:from-blue-900/20 dark:to-indigo-900/20 rounded-full blur-[100px] mix-blend-multiply dark:mix-blend-screen" />
                <div className="absolute bottom-[-20%] right-[-10%] w-[800px] h-[800px] bg-gradient-to-tr from-amber-100/50 to-orange-50/50 dark:from-amber-900/10 dark:to-orange-900/10 rounded-full blur-[100px] mix-blend-multiply dark:mix-blend-screen" />
                <div className="absolute top-[30%] right-[10%] w-[300px] h-[300px] bg-blue-50/50 dark:bg-blue-900/10 rounded-full blur-[80px] mix-blend-multiply dark:mix-blend-screen animate-pulse" />
            </div>

            <div className="container relative z-10 text-center px-6 max-w-5xl mx-auto">
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.6 }}
                    className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-white/50 dark:bg-slate-900/50 backdrop-blur-sm border border-slate-200 dark:border-slate-800 mb-8 shadow-sm"
                >
                    <span className="w-2 h-2 rounded-full bg-blue-500 animate-pulse" />
                    <span className="text-xs text-slate-600 dark:text-slate-300 font-medium tracking-wide uppercase">Join 500+ professionals</span>
                </motion.div>

                <motion.h1
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.6, delay: 0.2 }}
                    className="text-4xl md:text-[42px] font-semibold tracking-tight mb-6 text-slate-900 dark:text-white leading-[1.2]"
                >
                    Email. Slack. Calendar. Meetings.<br />
                    Repeat. <span className="text-blue-600 dark:text-blue-400">There's a better way.</span>
                </motion.h1>

                <motion.p
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.6, delay: 0.4 }}
                    className="text-lg text-slate-800 dark:text-slate-300 max-w-2xl mx-auto mb-10 leading-relaxed font-light"
                >
                    Hessie knows your work like you do, every conversation, every deadline, every person. Talk to her like a colleague. She'll handle it.
                </motion.p>

                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.6, delay: 0.6 }}
                    className="flex flex-col sm:flex-row items-center justify-center gap-4"
                >
                    <Link to="/waitlist" className="btn btn-primary text-base px-8 py-3.5 group shadow-lg shadow-blue-500/20 hover:shadow-blue-500/30 w-full sm:w-auto inline-flex items-center justify-center">
                        Get Early Access
                        <ArrowRight className="ml-2 w-4 h-4 group-hover:translate-x-1 transition-transform" />
                    </Link>
                </motion.div>

                <motion.div
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    transition={{ duration: 1, delay: 1 }}
                    className="mt-8 text-xs text-slate-400 dark:text-slate-500 font-medium"
                >
                    Integrates with your work tools
                </motion.div>

                <motion.div
                    initial={{ opacity: 0, y: 10 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 1, delay: 1.2 }}
                    className="mt-6 flex items-center justify-center gap-4"
                >
                    <div className="w-12 h-12 rounded-full bg-white dark:bg-slate-800 border border-slate-200 dark:border-slate-700 flex items-center justify-center shadow-sm hover:shadow-md transition-shadow" title="Slack">
                        <svg viewBox="0 0 24 24" className="w-6 h-6" fill="none" xmlns="http://www.w3.org/2000/svg">
                            <path d="M5.042 15.123a2.52 2.52 0 0 1 2.52-2.52h2.52v2.52a2.52 2.52 0 0 1-5.04 0Zm2.52-5.04a2.52 2.52 0 0 1 2.52-2.52 2.52 2.52 0 0 1 2.52 2.52v2.52h-2.52a2.52 2.52 0 0 1-2.52-2.52Zm5.04 2.52a2.52 2.52 0 0 1 2.52 2.52v2.52a2.52 2.52 0 0 1-5.04 0v-2.52h2.52Zm0-5.04a2.52 2.52 0 0 1 2.52-2.52h2.52a2.52 2.52 0 0 1 0 5.04h-2.52v-2.52Zm-5.04-5.04a2.52 2.52 0 0 1-2.52 2.52 2.52 2.52 0 0 1 0-5.04h2.52v2.52Zm10.08 10.08a2.52 2.52 0 0 1 2.52-2.52 2.52 2.52 0 0 1 0 5.04h-2.52v-2.52Zm2.52-5.04a2.52 2.52 0 0 1-2.52-2.52v-2.52a2.52 2.52 0 0 1 5.04 0v2.52h-2.52Z" fill="#E01E5A" />
                            <path d="M5.042 15.123a2.52 2.52 0 0 1 2.52-2.52h2.52v2.52a2.52 2.52 0 0 1-5.04 0Zm2.52-5.04a2.52 2.52 0 0 1 2.52-2.52 2.52 2.52 0 0 1 2.52 2.52v2.52h-2.52a2.52 2.52 0 0 1-2.52-2.52Zm5.04 2.52a2.52 2.52 0 0 1 2.52 2.52v2.52a2.52 2.52 0 0 1-5.04 0v-2.52h2.52Zm0-5.04a2.52 2.52 0 0 1 2.52-2.52h2.52a2.52 2.52 0 0 1 0 5.04h-2.52v-2.52Zm-5.04-5.04a2.52 2.52 0 0 1-2.52 2.52 2.52 2.52 0 0 1 0-5.04h2.52v2.52Zm10.08 10.08a2.52 2.52 0 0 1 2.52-2.52 2.52 2.52 0 0 1 0 5.04h-2.52v-2.52Zm2.52-5.04a2.52 2.52 0 0 1-2.52-2.52v-2.52a2.52 2.52 0 0 1 5.04 0v2.52h-2.52Z" fill="currentColor" className="hidden" />
                            <g clipPath="url(#clip0_slack)">
                                <path d="M5.042 15.123a2.52 2.52 0 0 1 2.52-2.52h2.52v2.52a2.52 2.52 0 0 1-5.04 0Z" fill="#E01E5A" />
                                <path d="M10.084 15.123a2.52 2.52 0 0 1 2.52 2.52v2.52a2.52 2.52 0 0 1-5.04 0v-2.52h2.52Z" fill="#E01E5A" />
                                <path d="M12.605 10.084a2.52 2.52 0 0 1 2.52 2.52v2.52a2.52 2.52 0 0 1-2.52 2.52h-2.52v-2.52a2.52 2.52 0 0 1 2.52-2.52Z" fill="#36C5F0" />
                                <path d="M12.605 5.042a2.52 2.52 0 0 1 2.52-2.52h2.52a2.52 2.52 0 0 1 0 5.04h-2.52V5.042Z" fill="#36C5F0" />
                                <path d="M18.907 8.823a2.52 2.52 0 0 1-2.52 2.52h-2.52V8.823a2.52 2.52 0 0 1 5.04 0Z" fill="#2EB67D" />
                                <path d="M13.865 8.823a2.52 2.52 0 0 1-2.52-2.52V3.781a2.52 2.52 0 0 1 5.04 0v2.52h-2.52Z" fill="#2EB67D" />
                                <path d="M11.344 13.865a2.52 2.52 0 0 1-2.52-2.52v-2.52a2.52 2.52 0 0 1 2.52-2.52h2.52v2.52a2.52 2.52 0 0 1-2.52 2.52Z" fill="#ECB22E" />
                                <path d="M11.344 18.907a2.52 2.52 0 0 1-2.52 2.52h-2.52a2.52 2.52 0 0 1 0-5.04h2.52v2.52Z" fill="#ECB22E" />
                            </g>
                        </svg>
                    </div>
                    <div className="w-12 h-12 rounded-full bg-white dark:bg-slate-800 border border-slate-200 dark:border-slate-700 flex items-center justify-center shadow-sm hover:shadow-md transition-shadow" title="Gmail">
                        <svg viewBox="0 0 24 24" className="w-6 h-6" xmlns="http://www.w3.org/2000/svg">
                            <path d="M19.5 3h-15C3.12 3 2 4.12 2 5.5v13C2 19.88 3.12 21 4.5 21h15c1.38 0 2.5-1.12 2.5-2.5v-13C22 4.12 20.88 3 19.5 3z" fill="white" />
                            <path d="M22 5.5v13c0 1.38-1.12 2.5-2.5 2.5H19V11l-7 5.25L5 11v10H4.5C3.12 21 2 19.88 2 18.5v-13c0-.42.11-.81.3-1.16l9.7 7.27 9.7-7.27c.19.35.3.74.3 1.16z" fill="#EA4335" />
                            <path d="M19.5 3H19v8l-7 5.25L5 11V3h-.5C3.12 3 2 4.12 2 5.5v.35l10 7.5 10-7.5V5.5C22 4.12 20.88 3 19.5 3z" fill="#EA4335" opacity="0.1" />
                            <path d="M12 16.25l7-5.25V3h.5c.5 0 .96.15 1.35.4L12 10.15 3.15 3.4A2.46 2.46 0 0 1 4.5 3H5v8l7 5.25z" fill="#C5221F" />
                            <path d="M2 5.5v.35l10 7.5 10-7.5V5.5C22 4.12 20.88 3 19.5 3h-15C3.12 3 2 4.12 2 5.5z" fill="none" />
                            <g>
                                <path d="M20.5 3h-2.3L12 7.6 5.8 3H3.5C2.67 3 2 3.67 2 4.5v15c0 .83.67 1.5 1.5 1.5h4v-9l4.5 3.38L16.5 12v9h4c.83 0 1.5-.67 1.5-1.5v-15c0-.83-.67-1.5-1.5-1.5z" fill="none" />
                                <path d="M4.5 21h3.75V12L12 14.81 15.75 12v9h3.75c.41 0 .75-.34.75-.75v-10.9l-8.25 6.2-8.25-6.2v10.9c0 .41.34.75.75.75z" fill="#EA4335" />
                                <path d="M20.25 3H16.5L12 6.38 7.5 3H3.75C3.34 3 3 3.34 3 3.75v3.1l9 6.75 9-6.75v-3.1c0-.41-.34-.75-.75-.75z" fill="#C5221F" />
                                <path d="M3 6.85v-3.1C3 3.34 3.34 3 3.75 3H7.5l-4.5 3.85z" fill="#EA4335" />
                                <path d="M21 6.85l-4.5-3.85H20.25c.41 0 .75.34.75.75v3.1z" fill="#C5221F" />
                            </g>
                            <path d="M20.5 3h-2.3L12 7.6 5.8 3H3.5C2.67 3 2 3.67 2 4.5v15c0 .83.67 1.5 1.5 1.5h4v-9l4.5 3.38L16.5 12v9h4c.83 0 1.5-.67 1.5-1.5v-15c0-.83-.67-1.5-1.5-1.5z" fill="white" />
                            <path d="M5.8 3l6.2 4.6L18.2 3h2.3c.83 0 1.5.67 1.5 1.5v15c0 .83-.67 1.5-1.5 1.5h-4v-9l-4.5 3.38L7.5 12v9h-4c-.83 0-1.5-.67-1.5-1.5v-15c0-.83.67-1.5 1.5-1.5h2.3z" fill="none" />
                            <path d="M19.5 3h-15C3.12 3 2 4.12 2 5.5v13C2 19.88 3.12 21 4.5 21h15c1.38 0 2.5-1.12 2.5-2.5v-13C22 4.12 20.88 3 19.5 3z" fill="white" />
                            <path d="M21 5.5v13c0 .83-.67 1.5-1.5 1.5h-4v-9l-4.5 3.38L7.5 12v9h-4c-.83 0-1.5-.67-1.5-1.5v-13l9 6.75 9-6.75z" fill="#EA4335" />
                            <path d="M19.5 3H16.5L12 6.38 7.5 3H4.5C3.12 3 2 4.12 2 5.5v.35l10 7.5 10-7.5V5.5C22 4.12 20.88 3 19.5 3z" fill="#C5221F" />
                            <path d="M4.5 3H7.5L3 6.85V5.5C3 4.12 3.67 3 4.5 3z" fill="#EA4335" />
                            <path d="M19.5 3c.83 0 1.5 1.12 1.5 2.5v1.35L16.5 3h3z" fill="#C5221F" />
                        </svg>
                    </div>
                    <div className="w-12 h-12 rounded-full bg-white dark:bg-slate-800 border border-slate-200 dark:border-slate-700 flex items-center justify-center shadow-sm hover:shadow-md transition-shadow" title="Calendar">
                        <svg viewBox="0 0 24 24" className="w-6 h-6" xmlns="http://www.w3.org/2000/svg">
                            <path d="M19 4h-1V2h-2v2H8V2H6v2H5c-1.11 0-1.99.9-1.99 2L3 20a2 2 0 0 0 2 2h14c1.1 0 2-.9 2-2V6c0-1.1-.9-2-2-2zm0 16H5V10h14v10zm0-12H5V6h14v2zm-7 5h5v5h-5v-5z" fill="#4285F4" />
                            <rect x="5" y="6" width="14" height="2" fill="#34A853" />
                            <rect x="5" y="10" width="14" height="10" fill="white" />
                            <path d="M19 4h-1V2h-2v2H8V2H6v2H5c-1.11 0-1.99.9-1.99 2L3 20a2 2 0 0 0 2 2h14c1.1 0 2-.9 2-2V6c0-1.1-.9-2-2-2zm0 16H5V10h14v10zm0-12H5V6h14v2zm-7 5h5v5h-5v-5z" fill="none" />
                            <path d="M19 3h-1V1h-2v2H8V1H6v2H5c-1.1 0-2 .9-2 2v14c0 1.1.9 2 2 2h14c1.1 0 2-.9 2-2V5c0-1.1-.9-2-2-2zm0 16H5V8h14v11z" fill="#4285F4" />
                        </svg>
                    </div>
                    <div className="w-12 h-12 rounded-full bg-white dark:bg-slate-800 border border-slate-200 dark:border-slate-700 flex items-center justify-center shadow-sm hover:shadow-md transition-shadow" title="Voice">
                        <svg viewBox="0 0 24 24" className="w-6 h-6" fill="none" xmlns="http://www.w3.org/2000/svg">
                            <path d="M12 1a3 3 0 0 0-3 3v8a3 3 0 0 0 6 0V4a3 3 0 0 0-3-3z" fill="#4285F4" />
                            <path d="M19 10v6a7 7 0 0 1-14 0v-6" stroke="#EA4335" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
                            <path d="M12 19v4" stroke="#34A853" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
                            <path d="M8 23h8" stroke="#FBBC05" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
                        </svg>
                    </div>
                </motion.div>
            </div>
        </section>
    );
};

export default Hero;
