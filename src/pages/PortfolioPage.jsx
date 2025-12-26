import React, { useMemo, useState } from 'react';
import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';
import { ExternalLink, Github, Gamepad2, TrendingUp, Brain, Shield, PenTool } from 'lucide-react';

const PortfolioPage = () => {
    const FILTERS = ["All", "LLM/Agents", "Production ML", "Growth Analytics"];
    const [activeFilter, setActiveFilter] = useState("All");

    const projects = [
        {
            title: "LLM Social Advocacy Agents",
            category: "LLM Agents (GenAI)",
            filterGroup: "LLM/Agents",
            description: "Architected a multi-agent system that learns an advocate’s style and restyles/generates LinkedIn posts at scale—automating ~90% of manual copywriting.",
            image: "/images/oktopost.png",
            link: "/portfolio/oktopost",
            icon: <PenTool size={40} className="text-pink-300" />,
            stats: [
                { label: "Manual Effort", value: "-90%" },
                { label: "Content Output", value: "100x" }
            ],
            tags: ["LLM Agents", "Style Transfer", "LangChain", "Python"]
        },

        {
            title: "LLM Ghostwriting Agent",
            category: "LLM Agents (GenAI)",
            filterGroup: "LLM/Agents",
            description: "Built an agentic ghostwriting workflow that drafts LinkedIn posts in an advocate’s voice with brand constraints, review loops, and quality guardrails.",
            image: "/images/oktopost.png",
            link: "/portfolio/oktopost",
            icon: <Brain size={40} className="text-violet-300" />,
            stats: [
                { label: "Draft Time", value: "-80%" },
                { label: "Consistency", value: "↑" }
            ],
            tags: ["LLM Agents", "OpenAI API", "Guardrails", "FastAPI"]
        },

        {
            title: "Cybersecurity Unicorn",
            category: "Deep Learning Systems",
            filterGroup: "Production ML",
            description: "Engineered a real-time deep learning classifier to detect phishing and malicious domains based on lexical features, protecting millions of users instantly.",
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
            category: "RL & Personalization",
            filterGroup: "Growth Analytics",
            description: "Implemented a contextual bandit system to personalize level difficulty in real time, optimizing for player flow and maximizing long-term value.",
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

    const filteredProjects = useMemo(() => {
        if (activeFilter === "All") return projects;
        return projects.filter((p) => p.filterGroup === activeFilter);
    }, [activeFilter, projects]);

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
                        LLM/agent systems and production ML delivering measurable business impact.
                    </motion.p>

                    {/* Filter */}
                    <motion.div
                        initial={{ opacity: 0, y: 12 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ delay: 0.2 }}
                        className="mt-8 flex flex-wrap items-center justify-center gap-3"
                        aria-label="Portfolio filters"
                    >
                        {FILTERS.map((filter) => {
                            const isActive = activeFilter === filter;
                            return (
                                <button
                                    key={filter}
                                    type="button"
                                    onClick={() => setActiveFilter(filter)}
                                    className={
                                        "px-4 py-2 rounded-full text-sm font-medium border transition-all " +
                                        (isActive
                                            ? "bg-primary/20 text-white border-primary/30"
                                            : "bg-white/5 text-gray-300 border-white/10 hover:bg-white/10")
                                    }
                                >
                                    {filter}
                                </button>
                            );
                        })}
                    </motion.div>
                </div>

                <div className="space-y-20">
                    {filteredProjects.map((project, index) => (
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
