import React from 'react';
import { motion } from 'framer-motion';
import { Check, Lock, EyeOff } from 'lucide-react';

const features = [
    "Voice Search Across Tools",
    "Smart Task Extraction",
    "Context Memory",
    "Daily Briefings",
    "Intelligent Reminders"
];

const Features = () => {
    return (
        <section className="py-24 relative overflow-hidden transition-colors duration-300">
            {/* CSS Illustrations / Blobs (No Green) */}
            <div className="absolute top-0 right-0 w-[600px] h-[600px] bg-gradient-to-br from-blue-50 to-purple-50 dark:from-blue-900/20 dark:to-purple-900/20 rounded-full blur-3xl opacity-60 pointer-events-none translate-x-1/3 -translate-y-1/4" />
            <div className="absolute bottom-0 left-0 w-[500px] h-[500px] bg-gradient-to-tr from-amber-50 to-orange-50 dark:from-amber-900/20 dark:to-orange-900/20 rounded-full blur-3xl opacity-60 pointer-events-none -translate-x-1/3 translate-y-1/4" />

            <div className="container max-w-5xl mx-auto relative z-10">
                <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
                    <motion.div
                        initial={{ opacity: 0, x: -20 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        viewport={{ once: true }}
                    >
                        <h2 className="text-2xl md:text-[28px] font-semibold mb-6 text-slate-900 dark:text-white leading-tight tracking-tight">Everything You Need to Work Smarter</h2>
                        <div className="space-y-4">
                            {features.map((feature, index) => (
                                <div key={index} className="flex items-center gap-4 group">
                                    <div className="w-8 h-8 rounded-full bg-slate-50 dark:bg-slate-800 border border-slate-100 dark:border-slate-700 flex items-center justify-center text-blue-500 dark:text-blue-400 group-hover:scale-110 transition-transform duration-300">
                                        <Check size={16} strokeWidth={3} />
                                    </div>
                                    <span className="text-lg text-slate-600 dark:text-slate-300 font-light">{feature}</span>
                                </div>
                            ))}
                        </div>

                        <div className="mt-10 flex flex-wrap gap-4">
                            <div className="px-5 py-2.5 rounded-full bg-white dark:bg-slate-900 border border-slate-200 dark:border-slate-700 flex items-center gap-2 text-sm text-slate-500 dark:text-slate-400 shadow-sm hover:shadow-md transition-shadow">
                                <Lock size={14} className="text-slate-400" /> Encrypted & Private
                            </div>
                            <div className="px-5 py-2.5 rounded-full bg-white dark:bg-slate-900 border border-slate-200 dark:border-slate-700 flex items-center gap-2 text-sm text-slate-500 dark:text-slate-400 shadow-sm hover:shadow-md transition-shadow">
                                <EyeOff size={14} className="text-slate-400" /> No Ad Data
                            </div>
                        </div>
                    </motion.div>

                    <motion.div
                        initial={{ opacity: 0, x: 20 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        viewport={{ once: true }}
                        className="relative flex justify-center lg:justify-end"
                    >
                        {/* Abstract Decorative Shapes behind the card */}
                        <div className="absolute -top-6 -right-6 w-24 h-24 bg-blue-100 dark:bg-blue-900/30 rounded-full mix-blend-multiply dark:mix-blend-screen filter blur-xl opacity-70 animate-blob" />
                        <div className="absolute -bottom-6 -left-6 w-24 h-24 bg-purple-100 dark:bg-purple-900/30 rounded-full mix-blend-multiply dark:mix-blend-screen filter blur-xl opacity-70 animate-blob animation-delay-2000" />

                        <div className="w-full max-w-sm aspect-square rounded-[2rem] bg-white dark:bg-slate-900 border border-slate-100 dark:border-slate-800 shadow-2xl flex items-center justify-center relative overflow-hidden group">
                            <div className="absolute inset-0 bg-gradient-to-br from-slate-50 to-white dark:from-slate-900 dark:to-slate-800 opacity-50" />

                            {/* Interactive UI Mockup */}
                            <div className="relative z-10 w-full h-full p-6 flex flex-col">
                                <div className="flex items-center justify-between mb-6">
                                    <div className="w-10 h-10 rounded-xl bg-slate-900 dark:bg-white flex items-center justify-center text-white dark:text-slate-900 font-bold text-sm">H</div>
                                    <div className="w-6 h-6 rounded-full bg-slate-100 dark:bg-slate-800" />
                                </div>

                                <div className="space-y-3 flex-1">
                                    <motion.div
                                        initial={{ width: "60%" }}
                                        whileInView={{ width: "80%" }}
                                        transition={{ duration: 2, repeat: Infinity, repeatType: "reverse" }}
                                        className="h-3 bg-slate-100 dark:bg-slate-800 rounded-full"
                                    />
                                    <div className="h-3 bg-slate-50 dark:bg-slate-800/50 rounded-full w-2/3" />
                                    <div className="h-3 bg-slate-50 dark:bg-slate-800/50 rounded-full w-1/2" />
                                </div>

                                {/* Floating Elements */}
                                <motion.div
                                    animate={{ y: [0, -8, 0] }}
                                    transition={{ duration: 4, repeat: Infinity }}
                                    className="absolute top-1/3 right-6 p-3 rounded-xl bg-white dark:bg-slate-800 shadow-lg border border-slate-100 dark:border-slate-700 max-w-[140px]"
                                >
                                    <div className="flex items-center gap-2 mb-1">
                                        <div className="w-1.5 h-1.5 rounded-full bg-blue-500" />
                                        <div className="text-[10px] font-semibold text-slate-700 dark:text-slate-200">Task Completed</div>
                                    </div>
                                    <div className="h-1.5 bg-slate-100 dark:bg-slate-700 rounded-full w-full" />
                                </motion.div>

                                <motion.div
                                    animate={{ y: [0, 8, 0] }}
                                    transition={{ duration: 5, repeat: Infinity, delay: 1 }}
                                    className="absolute bottom-1/4 left-6 p-3 rounded-xl bg-slate-900 dark:bg-slate-700 shadow-xl max-w-[160px]"
                                >
                                    <div className="text-[10px] text-slate-400 dark:text-slate-300 mb-0.5">Upcoming Meeting</div>
                                    <div className="text-xs font-semibold text-white">Product Review</div>
                                    <div className="text-[10px] text-slate-500 dark:text-slate-400 mt-1">10:00 AM • Zoom</div>
                                </motion.div>
                            </div>
                        </div>
                    </motion.div>
                </div>
            </div>
        </section>
    );
};

export default Features;
