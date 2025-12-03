import React from 'react';
import { motion } from 'framer-motion';
import { Star, Quote } from 'lucide-react';

const SocialProof = () => {
    return (
        <section className="py-24 bg-slate-50 dark:bg-slate-950 border-y border-slate-200 dark:border-slate-800 transition-colors duration-300">
            <div className="container max-w-5xl mx-auto px-6">
                <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                    <motion.div
                        initial={{ opacity: 0, scale: 0.95 }}
                        whileInView={{ opacity: 1, scale: 1 }}
                        viewport={{ once: true }}
                        className="p-8 rounded-2xl bg-white dark:bg-slate-900 shadow-sm border border-slate-100 dark:border-slate-800 relative"
                    >
                        <Quote className="absolute top-8 right-8 text-blue-100 dark:text-blue-900/30 w-10 h-10" />
                        <div className="flex gap-1 text-yellow-400 mb-6">
                            {[...Array(5)].map((_, i) => <Star key={i} size={16} fill="currentColor" />)}
                        </div>
                        <p className="text-lg text-slate-700 dark:text-slate-300 font-medium italic mb-8 relative z-10">"I used to spend 30 minutes just figuring out what to do. Now Hessie tells me in 30 seconds."</p>
                        <div className="flex items-center gap-4">
                            <div className="w-10 h-10 rounded-full bg-blue-100 dark:bg-blue-900/50 flex items-center justify-center text-blue-600 dark:text-blue-400 font-bold">SC</div>
                            <div>
                                <div className="font-bold text-slate-900 dark:text-white">Sarah Chen</div>
                                <div className="text-sm text-slate-500 dark:text-slate-400">Product Designer</div>
                            </div>
                        </div>
                    </motion.div>

                    <motion.div
                        initial={{ opacity: 0, scale: 0.95 }}
                        whileInView={{ opacity: 1, scale: 1 }}
                        viewport={{ once: true }}
                        transition={{ delay: 0.1 }}
                        className="p-8 rounded-2xl bg-white dark:bg-slate-900 shadow-sm border border-slate-100 dark:border-slate-800 relative"
                    >
                        <Quote className="absolute top-8 right-8 text-purple-100 dark:text-purple-900/30 w-10 h-10" />
                        <div className="flex gap-1 text-yellow-400 mb-6">
                            {[...Array(5)].map((_, i) => <Star key={i} size={16} fill="currentColor" />)}
                        </div>
                        <p className="text-lg text-slate-700 dark:text-slate-300 font-medium italic mb-8 relative z-10">"My manager commented on how on top of things I've been. Hessie is the reason."</p>
                        <div className="flex items-center gap-4">
                            <div className="w-10 h-10 rounded-full bg-purple-100 dark:bg-purple-900/50 flex items-center justify-center text-purple-600 dark:text-purple-400 font-bold">MJ</div>
                            <div>
                                <div className="font-bold text-slate-900 dark:text-white">Marcus Johnson</div>
                                <div className="text-sm text-slate-500 dark:text-slate-400">Software Engineer</div>
                            </div>
                        </div>
                    </motion.div>

                    <motion.div
                        initial={{ opacity: 0, scale: 0.95 }}
                        whileInView={{ opacity: 1, scale: 1 }}
                        viewport={{ once: true }}
                        transition={{ delay: 0.2 }}
                        className="p-8 rounded-2xl bg-white dark:bg-slate-900 shadow-sm border border-slate-100 dark:border-slate-800 relative"
                    >
                        <Quote className="absolute top-8 right-8 text-green-100 dark:text-green-900/30 w-10 h-10" />
                        <div className="flex gap-1 text-yellow-400 mb-6">
                            {[...Array(5)].map((_, i) => <Star key={i} size={16} fill="currentColor" />)}
                        </div>
                        <p className="text-lg text-slate-700 dark:text-slate-300 font-medium italic mb-8 relative z-10">"The voice search is magic. Saves me hours every week and keeps me in flow."</p>
                        <div className="flex items-center gap-4">
                            <div className="w-10 h-10 rounded-full bg-green-100 dark:bg-green-900/50 flex items-center justify-center text-green-600 dark:text-green-400 font-bold">PP</div>
                            <div>
                                <div className="font-bold text-slate-900 dark:text-white">Priya Patel</div>
                                <div className="text-sm text-slate-500 dark:text-slate-400">Engineering Manager</div>
                            </div>
                        </div>
                    </motion.div>
                </div>
            </div>
        </section>
    );
};

export default SocialProof;
