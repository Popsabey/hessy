import React from 'react';
import { motion } from 'framer-motion';
import { MessageSquare, Calendar, BarChart, Clock, Brain, AlertCircle } from 'lucide-react';

const PainPoints = () => {
    const container = {
        hidden: { opacity: 0 },
        show: {
            opacity: 1,
            transition: {
                staggerChildren: 0.1
            }
        }
    };

    const item = {
        hidden: { opacity: 0, y: 20 },
        show: { opacity: 1, y: 0 }
    };

    return (
        <section className="py-24 relative overflow-hidden transition-colors duration-300">
            {/* Background Shapes (No Green) */}
            <div className="absolute top-0 left-0 w-full h-full overflow-hidden pointer-events-none">
                <div className="absolute top-[10%] left-[-5%] w-[500px] h-[500px] bg-blue-100/40 dark:bg-blue-900/10 rounded-full blur-[80px] mix-blend-multiply dark:mix-blend-screen" />
                <div className="absolute bottom-[10%] right-[-5%] w-[500px] h-[500px] bg-purple-100/40 dark:bg-purple-900/10 rounded-full blur-[80px] mix-blend-multiply dark:mix-blend-screen" />
            </div>

            <div className="container relative z-10">
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    className="text-center mb-12"
                >
                    <h2 className="text-2xl md:text-[28px] font-semibold mb-3 text-slate-900 dark:text-white tracking-tight">Your Workday Shouldn't Feel Like This</h2>
                    <p className="text-lg text-slate-600 dark:text-slate-400 max-w-2xl mx-auto font-light">
                        Knowledge workers lose 2.5 hours daily to context-switching. That's 650 hours per year.
                    </p>
                </motion.div>

                <motion.div
                    variants={container}
                    initial="hidden"
                    whileInView="show"
                    viewport={{ once: true }}
                    className="grid grid-cols-1 md:grid-cols-3 gap-6 max-w-5xl mx-auto"
                >
                    {/* Large Card */}
                    <motion.div variants={item} className="md:col-span-2 bg-white dark:bg-slate-900/80 dark:backdrop-blur-xl p-8 rounded-3xl shadow-sm border border-slate-100 dark:border-slate-800/60 relative overflow-hidden group hover:shadow-md transition-all duration-500 hover:-translate-y-1">
                        <div className="absolute top-0 right-0 p-8 opacity-[0.03] group-hover:opacity-[0.08] transition-opacity">
                            <MessageSquare size={120} className="text-blue-600 dark:text-blue-400" />
                        </div>
                        <div className="relative z-10">
                            <div className="w-12 h-12 rounded-2xl bg-blue-50 dark:bg-slate-800 flex items-center justify-center mb-6 text-blue-600 dark:text-blue-400">
                                <BarChart size={24} />
                            </div>
                            <h3 className="text-xl font-semibold mb-3 text-slate-900 dark:text-white">App Overload</h3>
                            <p className="text-slate-600 dark:text-slate-400 text-base leading-relaxed">You jump between 10+ apps 100 times a day. Lost 90 minutes just finding things across Slack, Email, and Jira.</p>
                        </div>
                    </motion.div>

                    {/* Tall Card */}
                    <motion.div variants={item} className="md:row-span-2 bg-white dark:bg-slate-900/80 dark:backdrop-blur-xl p-8 rounded-3xl shadow-sm border border-slate-100 dark:border-slate-800/60 relative overflow-hidden group hover:shadow-md transition-all duration-500 hover:-translate-y-1">
                        <div className="absolute bottom-0 right-0 p-8 opacity-[0.03] group-hover:opacity-[0.08] transition-opacity">
                            <Clock size={120} className="text-purple-600 dark:text-purple-400" />
                        </div>
                        <div className="relative z-10">
                            <div className="w-12 h-12 rounded-2xl bg-purple-50 dark:bg-slate-800 flex items-center justify-center mb-6 text-purple-600 dark:text-purple-400">
                                <Brain size={24} />
                            </div>
                            <h3 className="text-xl font-semibold mb-3 text-slate-900 dark:text-white">Mental Fog</h3>
                            <p className="text-slate-600 dark:text-slate-400 text-base mb-6">"Wait, what did Sarah say about the deadline?"</p>
                            <p className="text-slate-500 dark:text-slate-500 text-sm">5 minutes searching Slack. 10 minutes checking email. Still not sure.</p>
                        </div>
                    </motion.div>

                    {/* Medium Card */}
                    <motion.div variants={item} className="bg-white dark:bg-slate-900/80 dark:backdrop-blur-xl p-8 rounded-3xl shadow-sm border border-slate-100 dark:border-slate-800/60 relative overflow-hidden group hover:shadow-md transition-all duration-500 hover:-translate-y-1">
                        <div className="relative z-10">
                            <div className="w-12 h-12 rounded-2xl bg-red-50 dark:bg-slate-800 flex items-center justify-center mb-6 text-red-600 dark:text-red-400">
                                <AlertCircle size={24} />
                            </div>
                            <h3 className="text-xl font-semibold mb-3 text-slate-900 dark:text-white">Dropped Balls</h3>
                            <p className="text-slate-600 dark:text-slate-400 text-base">"Did I follow up with that client?" Another task slipped through.</p>
                        </div>
                    </motion.div>

                    {/* Medium Card */}
                    <motion.div variants={item} className="bg-white dark:bg-slate-900/80 dark:backdrop-blur-xl p-8 rounded-3xl shadow-sm border border-slate-100 dark:border-slate-800/60 relative overflow-hidden group hover:shadow-md transition-all duration-500 hover:-translate-y-1">
                        <div className="relative z-10">
                            <div className="w-12 h-12 rounded-2xl bg-orange-50 dark:bg-slate-800 flex items-center justify-center mb-6 text-orange-600 dark:text-orange-400">
                                <Calendar size={24} />
                            </div>
                            <h3 className="text-xl font-semibold mb-3 text-slate-900 dark:text-white">Burnout</h3>
                            <p className="text-slate-600 dark:text-slate-400 text-base">Exhausted from managing your work, not doing your work.</p>
                        </div>
                    </motion.div>
                </motion.div>
            </div>
        </section>
    );
};

export default PainPoints;
