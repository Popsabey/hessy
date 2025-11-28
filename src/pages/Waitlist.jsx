import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { ArrowLeft } from 'lucide-react';
import { Link } from 'react-router-dom';

const Waitlist = () => {
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

        // Use URLSearchParams for better compatibility with Google Apps Script
        const params = new URLSearchParams();
        params.append('Name', formData.name);
        params.append('Email', formData.email);
        params.append('Role', formData.role);

        try {
            // mode: 'no-cors' is essential for Google Apps Script to accept the request from a browser
            await fetch(scriptURL, {
                method: 'POST',
                body: params,
                mode: 'no-cors'
            });

            // With no-cors, we can't read the response status, so we assume success if it didn't throw.
            setSubmitted(true);
        } catch (error) {
            console.error('Error!', error.message);
            alert("Something went wrong. Please try again.");
        } finally {
            setIsSubmitting(false);
        }
    };

    if (submitted) {
        return (
            <div className="min-h-screen bg-white dark:bg-slate-950 flex flex-col items-center justify-center p-4 relative overflow-hidden transition-colors duration-300">
                <div className="container max-w-md mx-auto relative z-10 text-center">
                    <motion.div
                        initial={{ opacity: 0, scale: 0.9 }}
                        animate={{ opacity: 1, scale: 1 }}
                        className="bg-white/80 dark:bg-slate-900/80 backdrop-blur-xl border border-slate-200 dark:border-slate-800 rounded-3xl p-8 shadow-xl"
                    >
                        <h2 className="text-2xl font-bold text-slate-900 dark:text-white mb-4">You're on the list!</h2>
                        <p className="text-slate-600 dark:text-slate-400 mb-6">Thanks for joining. We'll be in touch soon.</p>
                        <Link to="/" className="btn btn-primary inline-flex items-center justify-center px-6 py-2">
                            Back to Home
                        </Link>
                    </motion.div>
                </div>
            </div>
        );
    }

    return (
        <div className="min-h-screen bg-white dark:bg-slate-950 flex flex-col items-center justify-center p-4 relative overflow-hidden transition-colors duration-300">
            {/* Background Effects */}
            <div className="absolute inset-0 pointer-events-none">
                <div className="absolute top-[-10%] left-[-10%] w-[600px] h-[600px] bg-blue-50/50 dark:bg-blue-900/20 rounded-full blur-[100px] mix-blend-multiply dark:mix-blend-screen" />
                <div className="absolute bottom-[-10%] right-[-10%] w-[600px] h-[600px] bg-purple-50/50 dark:bg-purple-900/20 rounded-full blur-[100px] mix-blend-multiply dark:mix-blend-screen" />
            </div>

            <div className="container max-w-md mx-auto relative z-10">
                <Link to="/" className="inline-flex items-center text-sm text-slate-500 dark:text-slate-400 hover:text-slate-900 dark:hover:text-white mb-8 transition-colors">
                    <ArrowLeft size={16} className="mr-2" /> Back to Home
                </Link>

                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    className="bg-white/80 dark:bg-slate-900/80 backdrop-blur-xl border border-slate-200 dark:border-slate-800 rounded-3xl p-8 shadow-xl"
                >
                    <div className="text-center mb-8">
                        <h2 className="text-3xl font-bold text-slate-900 dark:text-white mb-2">Join waitlist</h2>
                        <p className="text-slate-600 dark:text-slate-400">first 100 gets early beta test for free</p>
                    </div>

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
                            <label htmlFor="role" className="block text-sm font-medium text-slate-700 dark:text-slate-300 mb-1">Designation/Role</label>
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

                        <button type="submit" disabled={isSubmitting} className="w-full btn btn-primary py-3.5 mt-2 disabled:opacity-70 disabled:cursor-not-allowed">
                            {isSubmitting ? 'Joining...' : 'Get Early Access'}
                        </button>
                    </form>

                    <p className="mt-6 text-center text-xs text-slate-400 dark:text-slate-500">
                        We respect your privacy. No spam, ever.
                    </p>
                </motion.div>
            </div>
        </div>
    );
};

export default Waitlist;
