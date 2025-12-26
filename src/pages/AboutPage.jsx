import React from 'react';
import { motion } from 'framer-motion';
import { Code, Database, Brain, Award, Calendar } from 'lucide-react';

const AboutPage = () => {
    const skills = [
        { name: "LLM/Agent Systems", icon: <Brain size={24} /> },
        { name: "RAG Assistants", icon: <Database size={24} /> },
        { name: "Evaluation & Guardrails", icon: <Award size={24} /> },
        { name: "NLP & Embeddings", icon: <Brain size={24} /> },
        { name: "Production ML", icon: <Code size={24} /> },
        { name: "MLOps & Monitoring", icon: <Award size={24} /> },
        { name: "FastAPI Services", icon: <Code size={24} /> },
        { name: "Spark/Databricks", icon: <Database size={24} /> },
        { name: "Optimization", icon: <Award size={24} /> },
        { name: "Causal / Experimentation", icon: <Award size={24} /> },
        { name: "Time Series", icon: <Calendar size={24} /> },
        { name: "Contextual Bandits", icon: <Brain size={24} /> },
    ];

    // Helper for missing icon import
    function MessageSquare(props) {
        return (
            <svg
                {...props}
                xmlns="http://www.w3.org/2000/svg"
                width="24"
                height="24"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeWidth="2"
                strokeLinecap="round"
                strokeLinejoin="round"
            >
                <path d="M21 15a2 2 0 0 1-2 2H7l-4 4V5a2 2 0 0 1 2-2h14a2 2 0 0 1 2 2z" />
            </svg>
        )
    }

    return (
        <div className="pt-20 pb-32">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                {/* Header */}
                <div className="text-center mb-20">
                    <motion.h1
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        className="text-4xl md:text-6xl font-bold text-white mb-6"
                    >
                        About advAIser
                    </motion.h1>
                    <motion.p
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ delay: 0.1 }}
                        className="text-xl text-gray-400 max-w-3xl mx-auto leading-relaxed"
                    >
                        advAIser builds <span className="text-white">LLM/agent systems (GenAI)</span> and <span className="text-white">production ML</span> that ship to real workflows—
                        with evaluation, guardrails, and monitoring.
                        <span className="block mt-2">Founded and led by <span className="text-white">Yohan Medalsy</span> (10+ years across ML, growth analytics, and quantitative systems).</span>
                    </motion.p>
                </div>

                {/* Main Content Grid */}
                <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-start mb-24">
                    {/* Left: Story */}
                    <motion.div
                        initial={{ opacity: 0, x: -20 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        viewport={{ once: true }}
                        className="space-y-6 text-gray-300 text-lg leading-relaxed"
                    >
                        <h2 className="text-3xl font-bold text-white mb-4">My Approach</h2>
                        <p>
                            advAIser was created to solve a common problem: teams can prototype AI quickly, but turning it into a reliable system—one that integrates with tools, respects constraints,
                            and delivers measurable value—often falls apart.
                        </p>
                        <p>
                            I don’t just build models; I build <span className="text-white">systems</span>. That means clean interfaces, deterministic behavior where it matters, strong evaluation, and production
                            monitoring. In practice this includes <span className="text-white">LLM/agent workflows</span> (tool-using agents, RAG assistants, content automation) and <span className="text-white">production ML</span>
                            (predictive modeling, optimization, experimentation).
                        </p>
                        <p>
                            Recent builds include <span className="text-white">ghostwriting + restyling agentic flows</span> for social advocacy/creator workflows, plus growth ML systems for marketing and gaming.
                            Engagements are scoped and milestone-driven—so you always know what’s shipping next.
                        </p>
                    </motion.div>

                    {/* Right: Skills Grid */}
                    <motion.div
                        initial={{ opacity: 0, x: 20 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        viewport={{ once: true }}
                    >
                        <h2 className="text-3xl font-bold text-white mb-8">Technical Arsenal</h2>
                        <div className="grid grid-cols-2 sm:grid-cols-4 gap-4">
                            {skills.map((skill, index) => (
                                <div key={index} className="flex flex-col items-center justify-center p-4 bg-surface rounded-xl border border-white/5 hover:border-primary/30 hover:bg-white/5 transition-all text-center gap-3 group">
                                    <div className="text-primary group-hover:scale-110 transition-transform">
                                        {skill.icon}
                                    </div>
                                    <span className="text-sm font-medium text-gray-300">{skill.name}</span>
                                </div>
                            ))}
                        </div>
                    </motion.div>
                </div>

                {/* How I Work */}
                <div className="max-w-6xl mx-auto mb-24">
                    <h2 className="text-3xl font-bold text-white mb-10 text-center">How I Work</h2>
                    <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                        <div className="p-6 bg-surface rounded-2xl border border-white/5 hover:border-primary/30 hover:bg-white/5 transition-all">
                            <div className="flex items-center gap-3 mb-3">
                                <div className="text-primary"><Calendar size={22} /></div>
                                <h3 className="text-xl font-bold text-white">Blueprint</h3>
                            </div>
                            <p className="text-gray-400">Define success metrics, audit data, and produce an execution plan: architecture, milestones, risks, and a realistic timeline.</p>
                        </div>
                        <div className="p-6 bg-surface rounded-2xl border border-white/5 hover:border-primary/30 hover:bg-white/5 transition-all">
                            <div className="flex items-center gap-3 mb-3">
                                <div className="text-primary"><Code size={22} /></div>
                                <h3 className="text-xl font-bold text-white">Build & Validate</h3>
                            </div>
                            <p className="text-gray-400">Ship an MVP quickly with evaluation. Iterate using experiments and clear acceptance criteria (quality, latency, cost, reliability).</p>
                        </div>
                        <div className="p-6 bg-surface rounded-2xl border border-white/5 hover:border-primary/30 hover:bg-white/5 transition-all">
                            <div className="flex items-center gap-3 mb-3">
                                <div className="text-primary"><MessageSquare size={22} /></div>
                                <h3 className="text-xl font-bold text-white">Productionize</h3>
                            </div>
                            <p className="text-gray-400">Deploy via APIs, add monitoring/logging, implement guardrails, and document everything for handover—so the system stays useful.</p>
                        </div>
                    </div>
                    <div className="text-center mt-8">
                        <a href="/contact" className="inline-flex items-center justify-center px-6 py-3 rounded-xl bg-primary text-black font-semibold hover:opacity-90 transition-opacity">
                            Start a project
                        </a>
                        <p className="text-gray-500 mt-3">Prefer clarity over buzzwords: share your goal + data sources, and you’ll get a concrete milestone plan.</p>
                    </div>
                </div>

                {/* Timeline */}
                <div className="max-w-4xl mx-auto">
                    <h2 className="text-3xl font-bold text-white mb-12 text-center">Journey</h2>
                    <div className="space-y-8">
                        {[
                            { year: "2025–Today", title: "advAIser (Independent)", desc: "Building LLM/agent systems and production ML for clients—RAG assistants, automation pipelines, and end-to-end deployments with evaluation and monitoring." },
                            { year: "2021–2025", title: "Senior Data Scientist (Mobile Gaming)", desc: "Owned end-to-end growth ML: MMM + constrained optimization, deep learning churn/value modeling, and experimentation—shipped via Spark/Databricks + Airflow + AWS." },
                            { year: "2020–2021", title: "Tech Lead, Data Science", desc: "Built NLP systems and production pipelines for social analytics, classification, and discovery workflows." },
                            { year: "2016–2018", title: "Quantitative Analyst", desc: "Designed and automated systematic strategies and risk analytics—optimization, time series, and robust evaluation." }
                        ].map((item, index) => (
                            <motion.div
                                key={index}
                                initial={{ opacity: 0, y: 20 }}
                                whileInView={{ opacity: 1, y: 0 }}
                                viewport={{ once: true }}
                                transition={{ delay: index * 0.2 }}
                                className="flex gap-6"
                            >
                                <div className="flex flex-col items-center">
                                    <div className="w-12 h-12 rounded-full bg-primary/10 border border-primary/30 flex items-center justify-center text-primary font-bold">
                                        <Calendar size={20} />
                                    </div>
                                    {index !== 3 && <div className="w-0.5 h-full bg-white/10 my-2"></div>}
                                </div>
                                <div className="pb-8">
                                    <div className="text-primary font-bold mb-1">{item.year}</div>
                                    <h3 className="text-xl font-bold text-white mb-2">{item.title}</h3>
                                    <p className="text-gray-400">{item.desc}</p>
                                </div>
                            </motion.div>
                        ))}
                    </div>
                </div>
            </div>
        </div>
    );
};

export default AboutPage;
