import React from 'react';
import { motion } from 'framer-motion';
import { Clock, Target, Briefcase, Smile, Zap, Star } from 'lucide-react';

const outcomes = [
    { icon: Clock, title: "Reclaim 10+ Hours", desc: "Stop app-hopping. Just ask and get answers.", color: "text-blue-600", bg: "bg-blue-50", cardBg: "bg-blue-50/50" },
    { icon: Target, title: "Never Drop the Ball", desc: "Every ask becomes a task. Smart reminders.", color: "text-red-600", bg: "bg-red-50", cardBg: "bg-red-50/50" },
    { icon: Briefcase, title: "Show Up Prepared", desc: "Context-aware reminders before every meeting.", color: "text-purple-600", bg: "bg-purple-50", cardBg: "bg-purple-50/50" },
    { icon: Smile, title: "End Work Anxiety", desc: "Daily briefings. You always know what matters.", color: "text-amber-600", bg: "bg-amber-50", cardBg: "bg-amber-50/50" },
    { icon: Zap, title: "Stay in Flow State", desc: "No more 'just checking Slack'. Voice queries.", color: "text-orange-600", bg: "bg-orange-50", cardBg: "bg-orange-50/50" },
    { icon: Star, title: "Executive Assistant", desc: "Premium productivity without the premium price.", color: "text-indigo-600", bg: "bg-indigo-50", cardBg: "bg-indigo-50/50" }
];

const Outcomes = () => {
    return (
        <section className="py-24 transition-colors duration-300">
            <div className="container max-w-5xl mx-auto px-6">
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    className="text-center mb-16"
                >
                    <h2 className="text-2xl md:text-[28px] font-semibold mb-3 text-slate-900 dark:text-white tracking-tight">Why Hessie?</h2>
                    <p className="text-lg text-slate-600 dark:text-slate-400">Hessie gives you 2 hours of your workday back</p>
                </motion.div>

                <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                    {outcomes.map((item, index) => (
                        <motion.div
                            key={index}
                            initial={{ opacity: 0, y: 20 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            transition={{ delay: index * 0.1 }}
                            className={`p-8 rounded-2xl border ${item.color.replace('text', 'border').replace('600', '100')} dark:border-slate-800 ${item.color.replace('text', 'dark:hover:border')} bg-white dark:bg-slate-900 hover:shadow-lg transition-all duration-300`}
                        >
                            <div className={`w-12 h-12 rounded-xl ${item.bg} dark:bg-slate-800 flex items-center justify-center mb-6`}>
                                <item.icon className={`w-6 h-6 ${item.color} dark:text-white`} />
                            </div>
                            <h3 className="text-lg font-bold mb-3 text-slate-900 dark:text-white">{item.title}</h3>
                            <p className="text-slate-600 dark:text-slate-400 text-sm leading-relaxed">{item.desc}</p>
                        </motion.div>
                    ))}
                </div>
            </div>
        </section>
    );
};

export default Outcomes;
