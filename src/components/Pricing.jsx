import React from 'react';
import { motion } from 'framer-motion';
import { Check } from 'lucide-react';

const Pricing = () => {
    return (
        <section id="pricing" className="py-24 transition-colors duration-300">
            <div className="container max-w-5xl mx-auto px-6">
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    className="text-center mb-16"
                >
                    <h2 className="text-2xl md:text-[28px] font-semibold mb-3 text-slate-900 dark:text-white">Simple, Transparent Pricing</h2>
                    <p className="text-lg text-slate-600 dark:text-slate-400">Invest in your time.</p>
                </motion.div>

                <div className="max-w-md mx-auto">
                    {/* Pro Tier */}
                    <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        className="p-8 rounded-3xl bg-slate-900 dark:bg-blue-600 text-white shadow-xl relative overflow-hidden"
                    >
                        <div className="absolute top-0 right-0 bg-blue-500 text-white text-xs font-bold px-3 py-1 rounded-bl-xl">POPULAR</div>
                        <h3 className="text-xl font-bold mb-2">Pro</h3>
                        <div className="text-4xl font-bold mb-6">$TBD<span className="text-lg text-slate-400 dark:text-blue-200 font-normal">/mo</span></div>
                        <ul className="space-y-4 mb-8">
                            <li className="flex items-center gap-3 text-slate-300 dark:text-blue-100">
                                <Check size={18} className="text-blue-400 dark:text-white" /> Unlimited Voice Commands
                            </li>
                            <li className="flex items-center gap-3 text-slate-300 dark:text-blue-100">
                                <Check size={18} className="text-blue-400 dark:text-white" /> Full Workspace Sync
                            </li>
                            <li className="flex items-center gap-3 text-slate-300 dark:text-blue-100">
                                <Check size={18} className="text-blue-400 dark:text-white" /> Advanced Context Memory
                            </li>
                            <li className="flex items-center gap-3 text-slate-300 dark:text-blue-100">
                                <Check size={18} className="text-blue-400 dark:text-white" /> Priority Support
                            </li>
                        </ul>
                        <button className="w-full py-3 rounded-xl bg-blue-600 dark:bg-white text-white dark:text-blue-600 font-medium hover:bg-blue-500 dark:hover:bg-blue-50 transition-colors">
                            Join Waitlist
                        </button>
                    </motion.div>
                </div>
            </div>
        </section>
    );
};

export default Pricing;
