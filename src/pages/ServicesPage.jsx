import React from 'react';
import { motion } from 'framer-motion';
import {
    Brain,
    Database,
    LineChart,
    Cpu,
    MessageSquare,
    Code2,
    ArrowRight,
    TrendingUp,
    Gamepad2,
    Bot,
    Building2,
    Briefcase,
    PenTool,
    FlaskConical
} from 'lucide-react';
import { Link } from 'react-router-dom';

const ServicesPage = () => {
    // Services are grouped to match the footer labels and guide visitors through
    // (1) LLM/Agents -> (2) Production ML -> (3) Growth/Experimentation.
    const servicesBySection = [
        {
            heading: "LLM/Agents",
            subheading: "LLM/agent systems (GenAI), RAG assistants, and automation workflows you can actually deploy.",
            items: [
                {
                    icon: <Bot size={32} />,
                    title: "LLM / Agent Systems (GenAI)",
                    description: "Tool‑using agents and multi‑step workflows that automate real work—integrations, structured outputs, guardrails, logging, and human review loops.",
                    tags: ["Tool-Using Agents", "Workflow Automation", "API Integrations"],
                    color: "from-cyan-500 to-blue-600",
                    colSpan: "md:col-span-2"
                },
                {
                    icon: <Building2 size={32} />,
                    title: "RAG Assistants & Automation",
                    description: "Private assistants over your docs/wiki/CRM/helpdesk—with citations, permissions, logging, and quality monitoring.",
                    tags: ["RAG", "Citations", "Access Controls"],
                    color: "from-sky-500 to-indigo-600",
                    colSpan: "md:col-span-1"
                },
                {
                    icon: <PenTool size={32} />,
                    title: "Content Agents & Workflows",
                    description: "Agentic ghostwriting/restyling pipelines that learn a voice, draft content, iterate with constraints, and automate review/scheduling.",
                    tags: ["Ghostwriting", "Restyling", "Brand/Voice"],
                    color: "from-violet-500 to-fuchsia-600",
                    colSpan: "md:col-span-2"
                },
                {
                    icon: <MessageSquare size={32} />,
                    title: "LLM Applications",
                    description: "LLM features built for real use: evaluation harnesses, safety/quality controls, and production deployment.",
                    tags: ["LLM Evaluation", "Guardrails", "Structured Outputs"],
                    color: "from-emerald-500 to-teal-500",
                    colSpan: "md:col-span-1"
                }
            ]
        },
        {
            heading: "Production ML",
            subheading: "Machine learning engineering and MLOps for reliable systems: data -> features -> models -> serving -> monitoring.",
            items: [
                {
                    icon: <Code2 size={32} />,
                    title: "Machine Learning Engineering",
                    description: "Feature pipelines, robust training/validation, and model-driven decisioning—built to integrate with your product and data stack.",
                    tags: ["Feature Engineering", "Modeling", "Production Readiness"],
                    color: "from-indigo-500 to-violet-500",
                    colSpan: "md:col-span-2"
                },
                {
                    icon: <Cpu size={32} />,
                    title: "MLOps (Deployment & Monitoring)",
                    description: "From prototype to production: APIs, batch scoring, monitoring, retraining loops, and reliable handover.",
                    tags: ["Model Serving", "Monitoring", "Retraining"],
                    color: "from-purple-500 to-pink-500",
                    colSpan: "md:col-span-1"
                },
                {
                    icon: <Database size={32} />,
                    title: "Data Engineering",
                    description: "Scalable pipelines and datasets that power ML: ingestion, transformations, quality checks, and analytics-ready tables.",
                    tags: ["ETL/ELT", "Warehousing", "Data Quality"],
                    color: "from-orange-500 to-red-500",
                    colSpan: "md:col-span-2"
                },
                {
                    icon: <Brain size={32} />,
                    title: "NLP & Deep Learning",
                    description: "Modern NLP for classification, ranking, embeddings, and text intelligence—built with measurable quality and production constraints.",
                    tags: ["Embeddings", "Text Classification", "Ranking"],
                    color: "from-rose-500 to-pink-600",
                    colSpan: "md:col-span-1"
                }
            ]
        },
        {
            heading: "Growth Analytics",
            subheading: "Experiment-driven optimization, causal/measurement thinking, and decisioning systems that move core KPIs.",
            items: [
                {
                    icon: <FlaskConical size={32} />,
                    title: "Data Science & Experimentation",
                    description: "KPI definitions, experiment design, incrementality thinking, and practical evaluation to keep work aligned with outcomes.",
                    tags: ["A/B Testing", "Causal Mindset", "KPI Design"],
                    color: "from-teal-500 to-emerald-600",
                    colSpan: "md:col-span-1"
                },
                {
                    icon: <TrendingUp size={32} />,
                    title: "Marketing Measurement (MMM)",
                    description: "Media Mix Modeling and budget allocation to improve ROAS, payback, and channel measurement.",
                    tags: ["MMM", "Budget Allocation", "Incrementality"],
                    color: "from-green-500 to-emerald-600",
                    colSpan: "md:col-span-2"
                },
                {
                    icon: <LineChart size={32} />,
                    title: "Predictive Modeling",
                    description: "Forecasting customer behavior and business outcomes with robust models and practical evaluation.",
                    tags: ["Churn", "LTV", "Propensity"],
                    color: "from-blue-500 to-primary",
                    colSpan: "md:col-span-1"
                },
                {
                    icon: <Cpu size={32} />,
                    title: "Optimization & Bandits",
                    description: "Constrained optimization and contextual bandits to improve decisioning and personalization—validated via experimentation.",
                    tags: ["Constrained Optimization", "Contextual Bandits", "Experimentation"],
                    color: "from-purple-500 to-pink-500",
                    colSpan: "md:col-span-1"
                },
                {
                    icon: <Gamepad2 size={32} />,
                    title: "Gaming Growth Analytics",
                    description: "Retention and monetization modeling for F2P games—segmentation, interventions, and ROI-driven decisioning.",
                    tags: ["Retention", "Monetization", "Personalization"],
                    color: "from-fuchsia-500 to-purple-600",
                    colSpan: "md:col-span-1"
                },
                {
                    icon: <Briefcase size={32} />,
                    title: "AI Strategy & Roadmapping",
                    description: "Build-vs-buy decisions, MVP scoping, and roadmaps that connect AI to measurable business outcomes.",
                    tags: ["Architecture", "Prioritization", "Execution Plan"],
                    color: "from-teal-500 to-emerald-600",
                    colSpan: "md:col-span-3"
                }
            ]
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
                        LLM/agent systems (GenAI) at the core—plus production ML, MLOps, and analytics to take ideas from prototype to reliable deployment.
                    </motion.p>
                </div>

                <div className="space-y-16">
                    {servicesBySection.map((section, sectionIndex) => (
                        <div key={section.heading}>
                            <div className="mb-6">
                                <h2 className="text-sm font-semibold tracking-wider text-gray-300 uppercase">
                                    {section.heading}
                                </h2>
                                <p className="text-gray-400 mt-2 max-w-3xl">
                                    {section.subheading}
                                </p>
                            </div>

                            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                                {section.items.map((service, index) => (
                                    <motion.div
                                        key={`${sectionIndex}-${index}-${service.title}`}
                                        initial={{ opacity: 0, y: 20 }}
                                        whileInView={{ opacity: 1, y: 0 }}
                                        viewport={{ once: true }}
                                        transition={{ delay: (sectionIndex * 0.15) + (index * 0.08) }}
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
                        </div>
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
