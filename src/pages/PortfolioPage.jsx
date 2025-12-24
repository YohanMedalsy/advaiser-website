import React from 'react';
import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';
import { ExternalLink, Github, Gamepad2, TrendingUp, Brain, Shield, PenTool } from 'lucide-react';

const PortfolioPage = () => {
    const projects = [
        {
            title: "AI Social Marketing Platform",
            category: "GenAI & Automation",
            description: "Architected a multi-agent system for social media, featuring a 'Ghostwriter' that matches personal brand voice and a 'Restyling Agent' that scales employee advocacy. Automated 90% of manual copywriting.",
            image: "/images/oktopost.png",
            link: "/portfolio/oktopost",
            icon: <PenTool size={40} className="text-pink-300" />,
            stats: [
                { label: "Manual Effort", value: "-90%" },
                { label: "Content Output", value: "100x" }
            ],
            tags: ["LLMs", "LangChain", "Style Transfer", "Python"]
        },
        {
            title: "Cybersecurity Unicorn",
            category: "Cybersecurity & DL",
            description: "Engineered a real-time deep learning classifier to detect zero-day phishing and malware domains based on lexical features, protecting millions of users instantly.",
            image: "/images/guardio.png",
            link: "/portfolio/guardio",
            icon: <Shield size={40} className="text-blue-300" />,
            stats: [
                { label: "Latency", value: "<10ms" },
                { label: "Detection Rate", value: "99.9%" }
            ],
            tags: ["Deep Learning", "TensorFlow", "API", "Security"]
        },
        {
            title: "Mobile Gaming Network",
            category: "Gaming & RL",
            description: "Implemented a Contextual Bandit system for mobile games to adjust difficulty in real-time, optimizing for 'flow' state and maximizing player LTV.",
            image: "/images/spaceplay.png",
            link: "/portfolio/spaceplay",
            icon: <Gamepad2 size={40} className="text-emerald-300" />,
            stats: [
                { label: "Retention", value: "+15%" },
                { label: "Optimization", value: "8.7x" }
            ],
            tags: ["Reinforcement Learning", "Contextual Bandits", "OPE"]
        }
    ];

    return (
        <div className="pt-20 pb-32">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                <div className="text-center mb-20">
                    <motion.h1
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        className="text-4xl md:text-6xl font-bold text-white mb-6"
                    >
                        Selected Work
                    </motion.h1>
                    <motion.p
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ delay: 0.1 }}
                        className="text-xl text-gray-400 max-w-2xl mx-auto"
                    >
                        Real-world applications of AI delivering measurable business impact.
                    </motion.p>
                </div>

                <div className="space-y-20">
                    {projects.map((project, index) => (
                        <motion.div
                            key={index}
                            initial={{ opacity: 0, y: 40 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true, margin: "-100px" }}
                            transition={{ duration: 0.6 }}
                            className="group relative bg-surface rounded-3xl overflow-hidden border border-white/5 hover:border-white/10 transition-all"
                        >
                            <div className="grid grid-cols-1 lg:grid-cols-2 gap-0">
                                {/* Image/Visual Side */}
                                <div className="h-64 lg:h-auto min-h-[300px] relative overflow-hidden">
                                    <div className="absolute inset-0 bg-black/20 z-10"></div>
                                    <img
                                        src={project.image}
                                        alt={project.title}
                                        className="absolute inset-0 w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
                                    />
                                </div>

                                {/* Content Side */}
                                <div className="p-8 md:p-12 flex flex-col justify-center">
                                    <div className="flex items-center gap-3 mb-4">
                                        <span className="px-3 py-1 rounded-full bg-primary/10 text-primary text-sm font-medium border border-primary/20">
                                            {project.category}
                                        </span>
                                    </div>

                                    <h3 className="text-3xl font-bold text-white mb-4">{project.title}</h3>
                                    <p className="text-gray-400 text-lg mb-8 leading-relaxed">
                                        {project.description}
                                    </p>

                                    <div className="grid grid-cols-2 gap-6 mb-8">
                                        {project.stats.map((stat, i) => (
                                            <div key={i}>
                                                <div className="text-2xl font-bold text-white mb-1">{stat.value}</div>
                                                <div className="text-sm text-gray-500 uppercase tracking-wider">{stat.label}</div>
                                            </div>
                                        ))}
                                    </div>

                                    <div className="flex flex-wrap gap-2 mb-8">
                                        {project.tags.map((tag, i) => (
                                            <span key={i} className="text-sm text-gray-500 font-mono">
                                                #{tag}
                                            </span>
                                        ))}
                                    </div>

                                    <div className="flex gap-4">
                                        <Link to={project.link} className="flex items-center gap-2 text-white font-medium hover:text-primary transition-colors group/btn">
                                            View Case Study <ExternalLink size={18} className="group-hover/btn:translate-x-1 transition-transform" />
                                        </Link>
                                    </div>
                                </div>
                            </div>
                        </motion.div>
                    ))}
                </div>
            </div>
        </div>
    );
};

export default PortfolioPage;
