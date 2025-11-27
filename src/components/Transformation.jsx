import React from 'react';
import { motion } from 'framer-motion';
import { Sun, Mic, Bell, CheckCircle } from 'lucide-react';

const steps = [
    {
        time: "9:00 AM",
        icon: Sun,
        title: "Morning Notification",
        quote: "Good morning, Alex. You have 5 tasks today, 3 meetings, and John needs feedback.",
        outcome: "You know exactly what matters in 30 seconds",
        color: "text-amber-600",
        bg: "bg-amber-50",
        border: "border-amber-200"
    },
    {
        time: "11:30 AM",
        icon: Mic,
        title: "Quick Voice Check-Ins",
        quote: "You: 'Did anyone respond about the budget?' Hessie: 'Yes, Sarah approved it in Slack.'",
        outcome: "No opening Slack. No scrolling. Instant answer.",
        color: "text-blue-600",
        bg: "bg-blue-50",
        border: "border-blue-200"
    },
    {
        time: "2:30 PM",
        icon: Bell,
        title: "Smart Reminder",
        quote: "Reminder: Call with client in 30 mins. Last time you discussed the Q4 roadmap.",
        outcome: "You walk into every meeting prepared",
        color: "text-purple-600",
        bg: "bg-purple-50",
        border: "border-purple-200"
    },
    {
        time: "6:00 PM",
        icon: CheckCircle,
        title: "End of Day",
        quote: "3 tasks completed today. 2 left—move to tomorrow?",
        outcome: "You leave work knowing nothing fell through the cracks",
        color: "text-indigo-600",
        bg: "bg-indigo-50",
        border: "border-indigo-200"
    }
];

const Transformation = () => {
    return (
        <section className="py-24 relative overflow-hidden transition-colors duration-300">
            {/* Background Gradient (No Green) */}
            <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_top,_var(--tw-gradient-stops))] from-blue-50/20 via-white to-white dark:from-blue-900/10 dark:via-slate-950 dark:to-slate-950 pointer-events-none" />

            <div className="container max-w-5xl mx-auto relative z-10">
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    className="text-center mb-16"
                >
                    <h2 className="text-2xl md:text-[28px] font-semibold mb-3 text-slate-900 dark:text-white">Imagine Starting Your Day Like This</h2>
                </motion.div>

                <div className="relative max-w-4xl mx-auto">
                    {/* Vertical Line */}
                    <div className="absolute left-[28px] md:left-1/2 top-0 bottom-0 w-px bg-slate-200 dark:bg-slate-800" />

                    <div className="space-y-12">
                        {steps.map((step, index) => (
                            <motion.div
                                key={index}
                                initial={{ opacity: 0, y: 20 }}
                                whileInView={{ opacity: 1, y: 0 }}
                                viewport={{ once: true, margin: "-100px" }}
                                transition={{ delay: index * 0.1 }}
                                className={`flex flex-col md:flex-row gap-8 items-start md:items-center ${index % 2 === 0 ? 'md:flex-row-reverse' : ''
                                    }`}
                            >
                                {/* Content Card */}
                                <div className="flex-1 w-full pl-16 md:pl-0">
                                    <div className={`bg-white dark:bg-slate-900 p-6 rounded-2xl border ${step.border} dark:border-slate-800 shadow-sm hover:shadow-md transition-all duration-300 group`}>
                                        <div className="flex items-center gap-3 mb-3">
                                            <div className={`p-2 rounded-lg ${step.bg} dark:bg-slate-800`}>
                                                <step.icon className={step.color} size={20} />
                                            </div>
                                            <h3 className="text-base font-bold text-slate-900 dark:text-white">{step.title}</h3>
                                        </div>
                                        <p className="text-slate-600 dark:text-slate-400 italic mb-3 font-light text-sm leading-relaxed">"{step.quote}"</p>
                                        <p className={`text-xs font-semibold uppercase tracking-wide ${step.color}`}>→ {step.outcome}</p>
                                    </div>
                                </div>

                                {/* Center Point & Time */}
                                <div className="absolute left-[14px] md:left-1/2 -translate-x-1/2 flex items-center justify-center z-10">
                                    {/* Circle */}
                                    <div className="w-8 h-8 rounded-full bg-white dark:bg-slate-900 border-4 border-slate-100 dark:border-slate-800 flex items-center justify-center shadow-sm relative">
                                        <div className={`w-2.5 h-2.5 rounded-full ${step.color.replace('text', 'bg')}`} />

                                        {/* Time Badge (Attached to Circle) */}
                                        <div className={`absolute top-1/2 -translate-y-1/2 whitespace-nowrap ${index % 2 === 0 ? 'right-full mr-4' : 'left-full ml-4'
                                            } hidden md:block`}>
                                            <span className="px-3 py-1 rounded-full bg-white dark:bg-slate-900 border border-slate-200 dark:border-slate-800 text-xs font-mono text-slate-500 dark:text-slate-400 font-medium shadow-sm">
                                                {step.time}
                                            </span>
                                        </div>

                                        {/* Mobile Time (Above circle) */}
                                        <div className="md:hidden absolute left-1/2 -translate-x-1/2 -top-8 whitespace-nowrap z-20">
                                            <span className="text-xs font-mono text-slate-400 dark:text-slate-500 font-medium bg-white dark:bg-slate-900 px-2 py-0.5 rounded-full border border-slate-100 dark:border-slate-800 shadow-sm">
                                                {step.time}
                                            </span>
                                        </div>
                                    </div>
                                </div>

                                {/* Empty Spacer for Balance */}
                                <div className="flex-1 hidden md:block" />
                            </motion.div>
                        ))}
                    </div>
                </div>
            </div>
        </section>
    );
};

export default Transformation;
