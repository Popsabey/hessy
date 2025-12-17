import React from 'react';
import { motion } from 'framer-motion';
import { ArrowRight, Calendar, User, Tag } from 'lucide-react';

const blogPosts = [
    {
        id: 1,
        title: "The Rise of the AI Executive Assistant",
        excerpt: "How AI is transforming the role of executive support, managing calendars, and streamlining communication for busy leaders.",
        category: "Executive Assistant",
        date: "Dec 12, 2025",
        author: "Sarah Jenkins",
        image: "from-blue-500 to-indigo-600"
    },
    {
        id: 2,
        title: "Voice as the New Interface: Human-Computer Interaction",
        excerpt: "Why typing is becoming obsolete. Explore the cognitive benefits of voice-first interactions in the modern workspace.",
        category: "HCI",
        date: "Dec 10, 2025",
        author: "David Chen",
        image: "from-purple-500 to-pink-600"
    },
    {
        id: 3,
        title: "Boosting Productivity with Intelligent Assistants",
        excerpt: "Identify the biggest time-wasters in your day and learn how an intelligent assistant can reclaim 10+ hours a week.",
        category: "Productivity",
        date: "Dec 08, 2025",
        author: "Alex Morgan",
        image: "from-amber-500 to-orange-600"
    },
    {
        id: 4,
        title: "The Future of Voice Assistants in the Enterprise",
        excerpt: "Moving beyond simple commands. How enterprise-grade voice assistants are handling complex workflows and data analysis.",
        category: "Voice Assistant",
        date: "Dec 05, 2025",
        author: "Sarah Jenkins",
        image: "from-emerald-500 to-teal-600"
    },
    {
        id: 5,
        title: "Context-Aware AI: Why It Matters",
        excerpt: "Understanding the difference between a chatbot and a context-aware assistant that knows your team, projects, and deadlines.",
        category: "AI Technology",
        date: "Dec 01, 2025",
        author: "David Chen",
        image: "from-blue-600 to-cyan-500"
    },
    {
        id: 6,
        title: "Designing for Voice: UX Best Practices",
        excerpt: "Key principles for designing intuitive voice interfaces that feel natural and reduce cognitive load for users.",
        category: "HCI",
        date: "Nov 28, 2025",
        author: "Alex Morgan",
        image: "from-indigo-500 to-purple-600"
    },
    {
        id: 7,
        title: "From Task Manager to Co-Pilot",
        excerpt: "The evolution of productivity tools. How simple to-do lists are evolving into proactive agents that help you get work done.",
        category: "Productivity",
        date: "Nov 25, 2025",
        author: "Sarah Jenkins",
        image: "from-rose-500 to-orange-500"
    },
    {
        id: 8,
        title: "Privacy in the Age of AI Assistants",
        excerpt: "Navigating the security challenges of AI in the workplace. How to ensure your data remains private and secure.",
        category: "Security",
        date: "Nov 22, 2025",
        author: "David Chen",
        image: "from-slate-600 to-slate-800"
    },
    {
        id: 9,
        title: "The Psychology of Voice Interaction",
        excerpt: "Why speaking to an assistant feels more personal and how it builds trust and engagement in software usage.",
        category: "Voice Assistant",
        date: "Nov 18, 2025",
        author: "Alex Morgan",
        image: "from-violet-500 to-fuchsia-600"
    },
    {
        id: 10,
        title: "Automating the Mundane: A Case Study",
        excerpt: "Real-world examples of how teams reduced admin time by 40% using specialized AI automation tools.",
        category: "Case Study",
        date: "Nov 15, 2025",
        author: "Sarah Jenkins",
        image: "from-cyan-500 to-blue-500"
    }
];

const Blog = () => {
    return (
        <div className="min-h-screen pt-20 transition-colors duration-300">
            {/* Hero Section */}
            <section className="relative py-20 px-6 overflow-hidden">
                <div className="absolute inset-0 z-0 overflow-hidden pointer-events-none">
                    <div className="absolute top-[-20%] left-[-10%] w-[600px] h-[600px] bg-blue-100/40 dark:bg-blue-900/10 rounded-full blur-[100px] mix-blend-multiply dark:mix-blend-screen opacity-70 animate-blob" />
                    <div className="absolute bottom-[-20%] right-[-10%] w-[600px] h-[600px] bg-purple-100/40 dark:bg-purple-900/10 rounded-full blur-[100px] mix-blend-multiply dark:mix-blend-screen opacity-70 animate-blob animation-delay-2000" />
                </div>

                <div className="container max-w-5xl mx-auto relative z-10 text-center">
                    <motion.h1
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        className="text-4xl md:text-5xl font-bold mb-6 text-slate-900 dark:text-white tracking-tight"
                    >
                        The Hessie Blog
                    </motion.h1>
                    <motion.p
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ delay: 0.1 }}
                        className="text-lg text-slate-600 dark:text-slate-400 max-w-2xl mx-auto"
                    >
                        Insights on the future of work, voice interfaces, and AI productivity.
                    </motion.p>
                </div>
            </section>

            {/* Blog Grid */}
            <section className="pb-24 px-6">
                <div className="container max-w-6xl mx-auto">
                    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                        {blogPosts.map((post, index) => (
                            <motion.article
                                key={post.id}
                                initial={{ opacity: 0, y: 20 }}
                                whileInView={{ opacity: 1, y: 0 }}
                                viewport={{ once: true }}
                                transition={{ delay: index * 0.05 }}
                                className="group flex flex-col bg-white dark:bg-slate-900 rounded-2xl border border-slate-200 dark:border-slate-800 overflow-hidden shadow-sm hover:shadow-lg transition-all duration-300 hover:-translate-y-1"
                            >
                                {/* Image Placeholder */}
                                <div className={`h-48 w-full bg-gradient-to-br ${post.image} opacity-90 group-hover:opacity-100 transition-opacity p-6 flex flex-col justify-end`}>
                                    <span className="inline-block px-3 py-1 bg-white/20 backdrop-blur-md text-white text-xs font-medium rounded-full w-fit mb-2 border border-white/30">
                                        {post.category}
                                    </span>
                                </div>

                                <div className="p-6 flex-1 flex flex-col">
                                    <div className="flex items-center gap-4 text-xs text-slate-500 dark:text-slate-400 mb-3">
                                        <div className="flex items-center gap-1">
                                            <Calendar size={12} />
                                            {post.date}
                                        </div>
                                        <div className="flex items-center gap-1">
                                            <User size={12} />
                                            {post.author}
                                        </div>
                                    </div>

                                    <h3 className="text-xl font-bold text-slate-900 dark:text-white mb-3 line-clamp-2 group-hover:text-blue-600 dark:group-hover:text-blue-400 transition-colors">
                                        {post.title}
                                    </h3>

                                    <p className="text-slate-600 dark:text-slate-400 text-sm mb-4 line-clamp-3 flex-1">
                                        {post.excerpt}
                                    </p>

                                    <div className="mt-auto pt-4 border-t border-slate-100 dark:border-slate-800">
                                        <span className="inline-flex items-center text-sm font-medium text-blue-600 dark:text-blue-400 group-hover:translate-x-1 transition-transform">
                                            Read Article
                                            <ArrowRight size={16} className="ml-1" />
                                        </span>
                                    </div>
                                </div>
                            </motion.article>
                        ))}
                    </div>
                </div>
            </section>
        </div>
    );
};

export default Blog;
