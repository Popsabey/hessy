import React, { useState } from 'react';
import { motion } from 'framer-motion';

const WaitlistSection = () => {
    const [formData, setFormData] = useState({
        name: '',
        email: '',
        role: 'Software Engineer'
    });
    const [submitted, setSubmitted] = useState(false);
    const [isSubmitting, setIsSubmitting] = useState(false);

    const handleChange = (e) => {
        setFormData({ ...formData, [e.target.name]: e.target.value });
    };

    const handleSubmit = async (e) => {
        e.preventDefault();
        setIsSubmitting(true);

        const scriptURL = 'https://script.google.com/macros/s/AKfycbxNUYjsyJhpEDbT9imYHjNem-JjWnhCVMyPDSqGXWM_4ZBDAT3ghFYnD5GUd2KEZLdZ/exec';

        const params = new URLSearchParams();
        params.append('Name', formData.name);
        params.append('Email', formData.email);
        params.append('Role', formData.role);

        try {
            await fetch(scriptURL, {
                method: 'POST',
                body: params,
                mode: 'no-cors'
            });
            setSubmitted(true);
        } catch (error) {
            console.error('Error!', error.message);
            alert("Something went wrong. Please try again.");
        } finally {
            setIsSubmitting(false);
        }
    };

    return (
        <section id="waitlist" className="py-20 bg-white dark:bg-slate-950 transition-colors duration-300">
            <div className="container max-w-6xl mx-auto px-6">
                <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-start">

                    {/* Left Column: Text Content */}
                    <div className="text-left">
                        <motion.h3
                            initial={{ opacity: 0, y: 20 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            transition={{ duration: 0.5 }}
                            className="text-3xl md:text-5xl font-bold text-slate-900 dark:text-white mb-6 tracking-tight leading-tight"
                        >
                            Take back your time
                        </motion.h3>
                        <motion.p
                            initial={{ opacity: 0, y: 20 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            transition={{ duration: 0.5, delay: 0.1 }}
                            className="text-lg md:text-xl text-slate-600 dark:text-slate-400 max-w-lg leading-relaxed"
                        >
                            Hessie assist with work so you focus on tasks that truly matters
                        </motion.p>
                    </div>

                    {/* Right Column: Form */}
                    <motion.div
                        initial={{ opacity: 0, x: 20 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.5, delay: 0.2 }}
                        className="bg-slate-50 dark:bg-slate-900 border border-slate-200 dark:border-slate-800 rounded-2xl p-8 shadow-sm"
                    >
                        {!submitted ? (
                            <form onSubmit={handleSubmit} className="space-y-4">
                                <div>
                                    <label htmlFor="name" className="block text-sm font-medium text-slate-700 dark:text-slate-300 mb-1">Name</label>
                                    <input
                                        type="text"
                                        id="name"
                                        name="name"
                                        value={formData.name}
                                        onChange={handleChange}
                                        placeholder="Jane Doe"
                                        className="w-full px-4 py-3 rounded-xl border border-slate-200 dark:border-slate-700 bg-white dark:bg-slate-800 text-slate-900 dark:text-white focus:border-blue-500 focus:ring-2 focus:ring-blue-500/20 outline-none transition-all"
                                        required
                                    />
                                </div>

                                <div>
                                    <label htmlFor="email" className="block text-sm font-medium text-slate-700 dark:text-slate-300 mb-1">Email Address</label>
                                    <input
                                        type="email"
                                        id="email"
                                        name="email"
                                        value={formData.email}
                                        onChange={handleChange}
                                        placeholder="you@company.com"
                                        className="w-full px-4 py-3 rounded-xl border border-slate-200 dark:border-slate-700 bg-white dark:bg-slate-800 text-slate-900 dark:text-white focus:border-blue-500 focus:ring-2 focus:ring-blue-500/20 outline-none transition-all"
                                        required
                                    />
                                </div>

                                <div>
                                    <label htmlFor="role" className="block text-sm font-medium text-slate-700 dark:text-slate-300 mb-1">Role</label>
                                    <div className="relative">
                                        <select
                                            id="role"
                                            name="role"
                                            value={formData.role}
                                            onChange={handleChange}
                                            className="w-full px-4 py-3 rounded-xl border border-slate-200 dark:border-slate-700 bg-white dark:bg-slate-800 text-slate-900 dark:text-white focus:border-blue-500 focus:ring-2 focus:ring-blue-500/20 outline-none transition-all appearance-none cursor-pointer"
                                        >
                                            <option value="Software Engineer">Software Engineer</option>
                                            <option value="Product Manager">Product Manager</option>
                                            <option value="Designer">Designer</option>
                                            <option value="VP">VP</option>
                                            <option value="Founder">Founder</option>
                                            <option value="Freelancer">Freelancer</option>
                                            <option value="Other">Other</option>
                                        </select>
                                        <div className="absolute right-4 top-1/2 -translate-y-1/2 pointer-events-none text-slate-500">
                                            <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M19 9l-7 7-7-7"></path></svg>
                                        </div>
                                    </div>
                                </div>

                                <button type="submit" disabled={isSubmitting} className="w-full btn btn-primary py-3.5 mt-2 font-medium text-base disabled:opacity-70 disabled:cursor-not-allowed transform active:scale-[0.98] transition-all">
                                    {isSubmitting ? 'Joining...' : 'Get Early Access'}
                                </button>

                                <p className="text-center text-xs text-slate-400 dark:text-slate-500 mt-4">
                                    first 100 gets early beta test for free
                                </p>
                            </form>
                        ) : (
                            <div className="text-center py-10">
                                <div className="w-16 h-16 bg-blue-100 dark:bg-blue-900/30 text-blue-600 dark:text-blue-400 rounded-full flex items-center justify-center mx-auto mb-6">
                                    <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7"></path></svg>
                                </div>
                                <h3 className="text-2xl font-bold text-slate-900 dark:text-white mb-2">You're on the list!</h3>
                                <p className="text-slate-600 dark:text-slate-400">Thanks for joining. We'll be in touch soon.</p>
                            </div>
                        )}
                    </motion.div>
                </div>
            </div>
        </section>
    );
};

export default WaitlistSection;
