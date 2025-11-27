import React from 'react';
import { motion } from 'framer-motion';
import { ArrowLeft } from 'lucide-react';
import { Link } from 'react-router-dom';

const Waitlist = () => {
    return (
        <div className="min-h-screen bg-white flex flex-col items-center justify-center p-4 relative overflow-hidden">
            {/* Background Effects */}
            <div className="absolute inset-0 pointer-events-none">
                <div className="absolute top-[-10%] left-[-10%] w-[600px] h-[600px] bg-blue-50/50 rounded-full blur-[100px] mix-blend-multiply" />
                <div className="absolute bottom-[-10%] right-[-10%] w-[600px] h-[600px] bg-purple-50/50 rounded-full blur-[100px] mix-blend-multiply" />
            </div>

            <div className="container max-w-md mx-auto relative z-10">
                <Link to="/" className="inline-flex items-center text-sm text-slate-500 hover:text-slate-900 mb-8 transition-colors">
                    <ArrowLeft size={16} className="mr-2" /> Back to Home
                </Link>

                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    className="bg-white/80 backdrop-blur-xl border border-slate-200 rounded-3xl p-8 shadow-xl"
                >
                    <div className="text-center mb-8">
                        <h1 className="text-3xl font-bold text-slate-900 mb-2">Join the Waitlist</h1>
                        <p className="text-slate-600">Be the first to experience Hessie.</p>
                    </div>

                    <form className="space-y-4">
                        <div>
                            <label htmlFor="email" className="block text-sm font-medium text-slate-700 mb-1">Email Address</label>
                            <input
                                type="email"
                                id="email"
                                placeholder="you@company.com"
                                className="w-full px-4 py-3 rounded-xl border border-slate-200 focus:border-blue-500 focus:ring-2 focus:ring-blue-500/20 outline-none transition-all"
                                required
                            />
                        </div>

                        <button type="submit" className="w-full btn btn-primary py-3.5">
                            Get Early Access
                        </button>
                    </form>

                    <p className="mt-6 text-center text-xs text-slate-400">
                        We respect your privacy. No spam, ever.
                    </p>
                </motion.div>
            </div>
        </div>
    );
};

export default Waitlist;
