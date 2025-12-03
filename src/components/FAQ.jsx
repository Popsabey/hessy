import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Plus, Minus } from 'lucide-react';

const faqs = [
    {
        question: "How does Hessie integrate with my workflow?",
        answer: "Seamlessly. Hessie connects directly with your existing Google Workspace and Slack. There are no new apps to learn or complex dashboards to manage."
    },
    {
        question: "Is my data safe?",
        answer: "Absolutely. We use bank-level encryption and never sell your data. Hessie only accesses what you explicitly allow and never trains public models on your private information."
    },
    {
        question: "Can Hessie take actions on my behalf?",
        answer: "Yes. Unlike standard chatbots, Hessie can draft emails, schedule meetings, and send Slack replies. You always have final approval before anything is sent."
    },
    {
        question: "Does it work with Outlook?",
        answer: "Not yet, but it's on our roadmap! Currently, we support Google Workspace (Gmail, Calendar) and Slack."
    },
    {
        question: "How is this different from ChatGPT?",
        answer: "ChatGPT is a general-purpose AI. Hessie is a specialized work companion that understands your specific context—your calendar, your team, and your deadlines—without needing constant prompting."
    },
    {
        question: "What happens if I disconnect?",
        answer: "You retain full control. Disconnecting Hessie removes access instantly, and we delete your synced data from our servers."
    }
];

const FAQ = () => {
    const [openIndex, setOpenIndex] = useState(null);

    return (
        <section id="faq" className="py-24 relative overflow-hidden transition-colors duration-300">
            <div className="container max-w-5xl mx-auto px-6 relative z-10">
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    className="text-center mb-16"
                >
                    <h2 className="text-2xl md:text-[28px] font-semibold mb-3 text-slate-900 dark:text-white tracking-tight">Questions you likely have</h2>
                </motion.div>

                <div className="max-w-3xl mx-auto space-y-4">
                    {faqs.map((faq, index) => (
                        <motion.div
                            key={index}
                            initial={{ opacity: 0, y: 20 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            transition={{ delay: index * 0.1 }}
                            className="border border-slate-200 dark:border-slate-800 rounded-2xl overflow-hidden bg-white dark:bg-slate-900 hover:border-blue-200 dark:hover:border-blue-800 transition-colors duration-300"
                        >
                            <button
                                onClick={() => setOpenIndex(openIndex === index ? null : index)}
                                className="w-full flex items-center justify-between p-6 text-left"
                            >
                                <span className="font-medium text-slate-900 dark:text-white">{faq.question}</span>
                                <span className={`p-1 rounded-full ${openIndex === index ? 'bg-blue-100 dark:bg-blue-900/30 text-blue-600 dark:text-blue-400' : 'bg-slate-100 dark:bg-slate-800 text-slate-400'}`}>
                                    {openIndex === index ? <Minus size={16} /> : <Plus size={16} />}
                                </span>
                            </button>
                            <AnimatePresence>
                                {openIndex === index && (
                                    <motion.div
                                        initial={{ height: 0, opacity: 0 }}
                                        animate={{ height: 'auto', opacity: 1 }}
                                        exit={{ height: 0, opacity: 0 }}
                                        transition={{ duration: 0.3 }}
                                    >
                                        <div className="px-6 pb-6 text-slate-600 dark:text-slate-400 text-sm leading-relaxed">
                                            {faq.answer}
                                        </div>
                                    </motion.div>
                                )}
                            </AnimatePresence>
                        </motion.div>
                    ))}
                </div>
            </div>
        </section>
    );
};

export default FAQ;
