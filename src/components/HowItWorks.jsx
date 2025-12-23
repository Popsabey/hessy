import React from 'react';
import { motion } from 'framer-motion';
import { Link, Mic, Clock } from 'lucide-react';

const HowItWorks = () => {
    return (
        <section id="how-it-works" className="py-24 relative overflow-hidden transition-colors duration-300">
            {/* Background Shapes */}
            <div className="absolute inset-0 pointer-events-none">
                <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[800px] bg-gradient-to-r from-blue-100/40 to-indigo-50/40 dark:from-blue-900/10 dark:to-indigo-900/10 rounded-full blur-3xl mix-blend-multiply dark:mix-blend-screen" />
            </div>

            <div className="container max-w-5xl mx-auto px-6 relative z-10">
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    className="text-center mb-12"
                >
                    <h2 className="text-2xl md:text-[28px] font-semibold mb-3 text-slate-900 dark:text-white tracking-tight">Three Simple Steps</h2>
                    <p className="text-lg text-slate-600 dark:text-slate-400">Get your time back in minutes.</p>
                </motion.div>

                <div className="grid grid-cols-1 md:grid-cols-3 gap-12 relative">
                    {/* Connecting Line (Desktop) */}
                    <div className="hidden md:block absolute top-8 left-[16%] right-[16%] h-0.5 bg-gradient-to-r from-slate-200 via-slate-300 to-slate-200 dark:from-slate-800 dark:via-slate-700 dark:to-slate-800" />

                    {/* Step 1 */}
                    <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        transition={{ delay: 0.1 }}
                        className="relative text-center group"
                    >
                        <div className="w-16 h-16 mx-auto bg-white dark:bg-slate-800 rounded-2xl border border-slate-100 dark:border-slate-700 flex items-center justify-center mb-6 relative z-10 shadow-md group-hover:scale-110 transition-transform duration-300">
                            <Link className="text-blue-600 dark:text-blue-400" size={24} />
                            <div className="absolute -top-2 -right-2 w-6 h-6 bg-blue-600 rounded-full flex items-center justify-center text-xs font-bold text-white shadow-md">1</div>
                        </div>
                        <h3 className="text-lg font-bold mb-2 text-slate-900 dark:text-white">Connect Your Tools</h3>
                        <p className="text-slate-600 dark:text-slate-400 mb-3 text-sm leading-relaxed">Link Gmail, Calendar, and Slack in 60 seconds.</p>
                        <p className="text-blue-600 dark:text-blue-400 text-xs font-medium">→ No new habits to build</p>
                    </motion.div>

                    {/* Step 2 */}
                    <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        transition={{ delay: 0.2 }}
                        className="relative text-center group"
                    >
                        <div className="w-16 h-16 mx-auto bg-white dark:bg-slate-800 rounded-2xl border border-slate-100 dark:border-slate-700 flex items-center justify-center mb-6 relative z-10 shadow-md group-hover:scale-110 transition-transform duration-300">
                            <Mic className="text-purple-600 dark:text-purple-400" size={24} />
                            <div className="absolute -top-2 -right-2 w-6 h-6 bg-purple-600 rounded-full flex items-center justify-center text-xs font-bold text-white shadow-md">2</div>
                        </div>
                        <h3 className="text-lg font-bold mb-2 text-slate-900 dark:text-white">Just Talk</h3>
                        <p className="text-slate-600 dark:text-slate-400 mb-3 text-sm leading-relaxed">"What's on my calendar?" "Did John respond?"</p>
                        <p className="text-purple-600 dark:text-purple-400 text-xs font-medium">→ Answers instantly</p>
                    </motion.div>

                    {/* Step 3 */}
                    <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        transition={{ delay: 0.3 }}
                        className="relative text-center group"
                    >
                        <div className="w-16 h-16 mx-auto bg-white dark:bg-slate-800 rounded-2xl border border-slate-100 dark:border-slate-700 flex items-center justify-center mb-6 relative z-10 shadow-md group-hover:scale-110 transition-transform duration-300">
                            <Clock className="text-amber-500 dark:text-amber-400" size={24} />
                            <div className="absolute -top-2 -right-2 w-6 h-6 bg-amber-500 rounded-full flex items-center justify-center text-xs font-bold text-white shadow-md">3</div>
                        </div>
                        <h3 className="text-lg font-bold mb-2 text-slate-900 dark:text-white">Let Hessie Remember</h3>
                        <p className="text-slate-600 dark:text-slate-400 mb-3 text-sm leading-relaxed">Get reminded at the right time with full context.</p>
                        <p className="text-amber-600 dark:text-amber-400 text-xs font-medium">→ Never miss a follow-up</p>
                    </motion.div>
                </div>
            </div>
        </section>
    );
};

export default HowItWorks;
