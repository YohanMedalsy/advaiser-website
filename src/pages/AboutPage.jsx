import React from 'react';
import { motion } from 'framer-motion';
import { Code, Database, Brain, Award, Calendar } from 'lucide-react';

const AboutPage = () => {
    const skills = [
        { name: "Agentic Workflows", icon: <Brain size={24} /> },
        { name: "LLM Fine-Tuning", icon: <Code size={24} /> },
        { name: "Machine Learning", icon: <Brain size={24} /> },
        { name: "Deep Learning", icon: <Brain size={24} /> },
        { name: "RAG Systems", icon: <Database size={24} /> },
        { name: "Model Monitoring", icon: <Award size={24} /> },
        { name: "MLOps Pipelines", icon: <Code size={24} /> },
        { name: "Computer Vision", icon: <Brain size={24} /> },
        { name: "Reinforcement Learning", icon: <Brain size={24} /> },
        { name: "Big Data Architecture", icon: <Database size={24} /> },
        { name: "Advanced Statistics", icon: <Award size={24} /> },
        { name: "Strategic Advisory", icon: <Calendar size={24} /> },
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
                        Passionate about turning complex data problems into elegant, scalable solutions.
                        With over 10 years of experience, we bridge the gap between academic research and business value.
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
                        <h2 className="text-3xl font-bold text-white mb-4">Our Story</h2>
                        <p>
                            Founded by Yohan Medalsy, advAIser started with a simple mission: to make advanced artificial intelligence accessible and practical for businesses of all sizes.
                        </p>
                        <p>
                            We don't just build models; we build systems. Our approach is rooted in engineering rigor, ensuring that every solution is robust, scalable, and maintainable. From the early days of statistical modeling to the latest breakthroughs in Generative AI, we have stayed at the forefront of technology.
                        </p>
                        <p>
                            Whether you are a startup looking to build your first data product or an enterprise seeking to optimize operations, we bring the expertise and the hands-on capability to deliver results.
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

                {/* Timeline */}
                <div className="max-w-4xl mx-auto">
                    <h2 className="text-3xl font-bold text-white mb-12 text-center">Journey</h2>
                    <div className="space-y-8">
                        {[
                            { year: "2025", title: "advAIser Established", desc: "Formalized consulting services to help more businesses leverage AI." },
                            { year: "2020-2024", title: "Lead AI Engineer", desc: "Led ML teams at major tech companies, deploying systems serving millions of users." },
                            { year: "2015-2019", title: "Data Science & Analytics", desc: "Deep dive into predictive modeling and big data infrastructure." }
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
                                    {index !== 2 && <div className="w-0.5 h-full bg-white/10 my-2"></div>}
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
