import React from 'react';
import { motion } from 'framer-motion';
import { Brain, Database, LineChart, Cpu, MessageSquare, Code2, ArrowRight, TrendingUp, Gamepad2, Bot, ShieldCheck, BadgeDollarSign, Building2, Briefcase, Layers } from 'lucide-react';
import { Link } from 'react-router-dom';

const ServicesPage = () => {
    const services = [
        {
            icon: <LineChart size={32} />,
            title: "Predictive Modeling",
            description: "Forecasting customer behavior, sales trends, and business outcomes with high-precision models.",
            tags: ["Churn Prediction", "Demand Forecasting", "Risk Assessment"],
            color: "from-blue-500 to-primary",
            colSpan: "md:col-span-2"
        },
        {
            icon: <Cpu size={32} />,
            title: "Reinforcement Learning",
            description: "Optimizing complex decision-making systems using contextual bandits and policy optimization.",
            tags: ["Dynamic Pricing", "Personalization", "A/B Testing"],
            color: "from-purple-500 to-pink-500",
            colSpan: "md:col-span-1"
        },
        {
            icon: <MessageSquare size={32} />,
            title: "LLM Solutions",
            description: "Custom fine-tuning and RAG systems for domain-specific applications.",
            tags: ["Chatbots", "Content Gen", "Knowledge Bases"],
            color: "from-emerald-500 to-teal-500",
            colSpan: "md:col-span-1"
        },
        {
            icon: <Database size={32} />,
            title: "Data Analytics",
            description: "Turning raw data into actionable insights through advanced visualization and BI.",
            tags: ["Dashboards", "ETL Pipelines", "Data Warehousing"],
            color: "from-orange-500 to-red-500",
            colSpan: "md:col-span-2"
        },
        {
            icon: <TrendingUp size={32} />,
            title: "Marketing Analytics",
            description: "Maximize ROAS and optimize budget allocation with advanced Media Mix Modeling (MMM).",
            tags: ["MMM", "User Acquisition", "Budget Optimization"],
            color: "from-green-500 to-emerald-600",
            colSpan: "md:col-span-2"
        },
        {
            icon: <Gamepad2 size={32} />,
            title: "Gaming Analytics",
            description: "Deep player insights to increase retention and monetization.",
            tags: ["Churn", "LTV Modeling", "Contextual Bandits"],
            color: "from-fuchsia-500 to-purple-600",
            colSpan: "md:col-span-1"
        },
        {
            icon: <Code2 size={32} />,
            title: "ML Engineering",
            description: "End-to-end MLOps: from model development to production deployment and monitoring.",
            tags: ["Model Serving", "CI/CD for ML", "Drift Monitoring"],
            color: "from-indigo-500 to-violet-500",
            colSpan: "md:col-span-1"
        },
        {
            icon: <Bot size={32} />,
            title: "Agentic AI Systems",
            description: "Deploy autonomous AI agents that work 24/7 to research, execute tasks, and self-heal code.",
            tags: ["AutoGPT", "Customer Ops", "Automated SDRs"],
            color: "from-cyan-500 to-blue-600",
            colSpan: "md:col-span-2"
        },
        {
            icon: <BadgeDollarSign size={32} />,
            title: "Algorithmic Pricing",
            description: "Dynamic pricing engines that adjust in real-time to maximize margin and revenue.",
            tags: ["Dynamic Pricing", "Market Simulation", "Demand Elasticity"],
            color: "from-yellow-500 to-amber-600",
            colSpan: "md:col-span-1"
        },
        {
            icon: <Layers size={32} />,
            title: "Digital Twins & Sim",
            description: "Simulate supply chains and factory floors to test scenarios before implementation.",
            tags: ["Process Sim", "Supply Chain", "Risk Analysis"],
            color: "from-slate-500 to-gray-600",
            colSpan: "md:col-span-2"
        },
        {
            icon: <ShieldCheck size={32} />,
            title: "Fraud & Protection",
            description: "Real-time anomaly detection to protect revenue and ensure trust and safety.",
            tags: ["Anomaly Detection", "Trust & Safety", "Bot Detection"],
            color: "from-red-500 to-rose-600",
            colSpan: "md:col-span-1"
        },
        {
            icon: <Building2 size={32} />,
            title: "Custom Enterprise AI",
            description: "Secure, internal RAG systems that let your team chat with company documents safely.",
            tags: ["RAG", "Internal Tools", "Secure LLMs"],
            color: "from-sky-500 to-indigo-600",
            colSpan: "md:col-span-2"
        },
        {
            icon: <Briefcase size={32} />,
            title: "Fractional CAIO",
            description: "Executive-level AI strategy, build-vs-buy analysis, and implementation roadmaps.",
            tags: ["AI Strategy", "Executive Advisory", "Roadmapping"],
            color: "from-teal-500 to-emerald-600",
            colSpan: "md:col-span-3"
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
                        Our Expertise
                    </motion.h1>
                    <motion.p
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ delay: 0.1 }}
                        className="text-xl text-gray-400 max-w-2xl mx-auto"
                    >
                        Comprehensive AI solutions tailored to your business needs, from strategy to execution.
                    </motion.p>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                    {services.map((service, index) => (
                        <motion.div
                            key={index}
                            initial={{ opacity: 0, y: 20 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            transition={{ delay: index * 0.1 }}
                            className={`group relative p-8 rounded-3xl bg-surface border border-white/5 overflow-hidden hover:border-white/10 transition-all ${service.colSpan}`}
                        >
                            <div className={`absolute inset-0 bg-gradient-to-br ${service.color} opacity-0 group-hover:opacity-5 transition-opacity duration-500`}></div>

                            <div className="relative z-10 h-full flex flex-col">
                                <div className={`w-14 h-14 rounded-2xl bg-gradient-to-br ${service.color} flex items-center justify-center text-white mb-6 shadow-lg`}>
                                    {service.icon}
                                </div>

                                <h3 className="text-2xl font-bold text-white mb-4">{service.title}</h3>
                                <p className="text-gray-400 mb-8 flex-grow leading-relaxed">
                                    {service.description}
                                </p>

                                <div className="flex flex-wrap gap-2 mt-auto">
                                    {service.tags.map((tag, i) => (
                                        <span key={i} className="px-3 py-1 rounded-full bg-white/5 text-sm text-gray-300 border border-white/5">
                                            {tag}
                                        </span>
                                    ))}
                                </div>
                            </div>
                        </motion.div>
                    ))}
                </div>

                <div className="mt-20 text-center">
                    <div className="inline-block p-8 rounded-3xl bg-gradient-to-br from-primary/10 to-secondary/10 border border-white/5">
                        <h3 className="text-2xl font-bold text-white mb-4">Need something specific?</h3>
                        <p className="text-gray-400 mb-6">
                            We build custom solutions for unique challenges. Let's talk about your data.
                        </p>
                        <Link
                            to="/contact"
                            className="inline-flex items-center gap-2 px-6 py-3 bg-white text-background rounded-xl font-bold hover:bg-gray-100 transition-colors"
                        >
                            Schedule a Consultation <ArrowRight size={18} />
                        </Link>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default ServicesPage;
