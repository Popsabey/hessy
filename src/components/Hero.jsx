import React from 'react';
import { motion } from 'framer-motion';
import { ArrowRight, Slack, Mail, Calendar, Mic } from 'lucide-react';
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
                    Hessie is your voice-first work assistant. Ask questions about work like 'What did Sarah say about the deadline?' and Hessie extracts this info and responds with it
                </motion.p>

                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.6, delay: 0.6 }}
                    className="flex flex-col sm:flex-row items-center justify-center gap-4"
                >
                    <a href="#waitlist" className="btn btn-primary text-base px-8 py-3.5 group shadow-lg shadow-blue-500/20 hover:shadow-blue-500/30 w-full sm:w-auto inline-flex items-center justify-center">
                        Get Early Access
                        <ArrowRight className="ml-2 w-4 h-4 group-hover:translate-x-1 transition-transform" />
                    </a>
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
                    <div className="w-10 h-10 rounded-full bg-white dark:bg-slate-800 border border-slate-200 dark:border-slate-700 flex items-center justify-center shadow-sm text-slate-600 dark:text-slate-400" title="Slack">
                        <Slack size={20} />
                    </div>
                    <div className="w-10 h-10 rounded-full bg-white dark:bg-slate-800 border border-slate-200 dark:border-slate-700 flex items-center justify-center shadow-sm text-slate-600 dark:text-slate-400" title="Gmail">
                        <Mail size={20} />
                    </div>
                    <div className="w-10 h-10 rounded-full bg-white dark:bg-slate-800 border border-slate-200 dark:border-slate-700 flex items-center justify-center shadow-sm text-slate-600 dark:text-slate-400" title="Calendar">
                        <Calendar size={20} />
                    </div>
                    <div className="w-10 h-10 rounded-full bg-white dark:bg-slate-800 border border-slate-200 dark:border-slate-700 flex items-center justify-center shadow-sm text-slate-600 dark:text-slate-400" title="Voice">
                        <Mic size={20} />
                    </div>
                </motion.div>
            </div>
        </section>
    );
};

export default Hero;
