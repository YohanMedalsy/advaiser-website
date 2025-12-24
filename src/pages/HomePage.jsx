import React from 'react';
import { Link } from 'react-router-dom';
import { motion, AnimatePresence } from 'framer-motion';
import { ArrowRight, CheckCircle, Code, Cpu, BarChart } from 'lucide-react';
import Logo from '../components/Logo';
import BrandMorph from '../components/BrandMorph';

const HomePage = () => {

    return (
        <div className="overflow-hidden">
            {/* Hero Section */}
            <section className="relative min-h-screen flex items-center justify-center pt-20 pb-32 overflow-hidden">
                {/* Abstract Background */}
                {/* Abstract Background - Removed to show global background */}
                <div className="absolute inset-0 pointer-events-none">
                    {/* Radial gradient removed as requested */}
                </div>

                <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
                    <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.8 }}
                    >

                        <div className="mb-2 flex justify-center text-2xl md:text-4xl">
                            <BrandMorph />
                        </div>

                        <h2 className="text-2xl md:text-3xl text-primary font-medium tracking-wide mb-12">
                            The Advantageous AI Service
                        </h2>

                        <h1 className="text-5xl md:text-7xl font-bold text-white mb-6 tracking-tight leading-tight">
                            AI Solutions That <br />
                            <span className="text-transparent bg-clip-text bg-gradient-to-r from-primary to-cyan-200">
                                Drive Results
                            </span>
                        </h1>

                        <p className="text-2xl md:text-3xl text-white font-semibold mb-6">
                            More Than an Adviser. Your AI Advantage.
                        </p>

                        <p className="text-xl text-gray-400 mb-10 max-w-3xl mx-auto leading-relaxed">
                            Transforming businesses through advanced intelligence. Over a decade of expertise delivering high-impact Data Science, Analytics, and Agentic AI solutions.
                        </p>
                        <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
                            <Link
                                to="/contact"
                                className="px-8 py-4 bg-primary hover:bg-cyan-400 text-gray-950 rounded-xl font-semibold text-lg transition-all shadow-lg shadow-primary/25 hover:shadow-primary/40 hover:-translate-y-1 flex items-center gap-2"
                            >
                                Get Started <ArrowRight size={20} />
                            </Link>
                            <Link
                                to="/services"
                                className="px-8 py-4 bg-white/5 hover:bg-white/10 text-white rounded-xl font-semibold text-lg transition-all border border-white/10 hover:border-white/20 backdrop-blur-sm"
                            >
                                View Services
                            </Link>
                        </div>
                    </motion.div>
                </div>
            </section>

            {/* Stats Section */}
            <section className="py-20 border-y border-white/5 bg-surface/30 backdrop-blur-sm">
                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                    <div className="grid grid-cols-1 md:grid-cols-3 gap-8 text-center">
                        {[
                            { value: '10+', label: 'Years Experience' },
                            { value: '30+', label: 'Projects Delivered' },
                            { value: '100%', label: 'Client Satisfaction' },
                        ].map((stat, index) => (
                            <motion.div
                                key={index}
                                initial={{ opacity: 0, y: 20 }}
                                whileInView={{ opacity: 1, y: 0 }}
                                viewport={{ once: true }}
                                transition={{ delay: index * 0.2 }}
                                className="p-6"
                            >
                                <div className="text-5xl font-bold text-transparent bg-clip-text bg-gradient-to-br from-white to-gray-500 mb-2">
                                    {stat.value}
                                </div>
                                <div className="text-gray-400 font-medium">{stat.label}</div>
                            </motion.div>
                        ))}
                    </div>
                </div>
            </section>

            {/* Features Preview */}
            <section className="py-32 relative">
                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                    <div className="text-center mb-20">
                        <h2 className="text-3xl md:text-5xl font-bold text-white mb-6">Why Work With advAIser</h2>
                        <p className="text-xl text-gray-400 max-w-2xl mx-auto">
                            Expertise, precision, and a results-driven approach to solving your most complex data challenges.
                        </p>
                    </div>

                    <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                        {[
                            {
                                icon: <Code size={32} />,
                                title: "Hands-On Expertise",
                                desc: "Deep practical experience building production-ready AI systems and analytics pipelines."
                            },
                            {
                                icon: <Cpu size={32} />,
                                title: "Cutting-Edge Methods",
                                desc: "Leveraging the latest advances in ML, RL, and LLMs to solve complex business problems."
                            },
                            {
                                icon: <BarChart size={32} />,
                                title: "Data-Driven Results",
                                desc: "Every solution is backed by rigorous statistical analysis and validated performance metrics."
                            }
                        ].map((feature, index) => (
                            <motion.div
                                key={index}
                                initial={{ opacity: 0, y: 20 }}
                                whileInView={{ opacity: 1, y: 0 }}
                                viewport={{ once: true }}
                                transition={{ delay: index * 0.2 }}
                                className="group p-8 rounded-2xl bg-surface border border-white/5 hover:border-primary/50 transition-all hover:shadow-2xl hover:shadow-primary/10 relative overflow-hidden"
                            >
                                <div className="absolute inset-0 bg-gradient-to-br from-primary/5 to-transparent opacity-0 group-hover:opacity-100 transition-opacity"></div>
                                <div className="relative z-10">
                                    <div className="w-14 h-14 bg-white/5 rounded-xl flex items-center justify-center text-primary mb-6 group-hover:scale-110 transition-transform duration-300 border border-white/10">
                                        {feature.icon}
                                    </div>
                                    <h3 className="text-2xl font-bold text-white mb-4">{feature.title}</h3>
                                    <p className="text-gray-400 leading-relaxed">
                                        {feature.desc}
                                    </p>
                                </div>
                            </motion.div>
                        ))}
                    </div>
                </div>
            </section>

            {/* CTA Section */}
            <section className="py-32 relative overflow-hidden">
                <div className="absolute inset-0 bg-gradient-to-b from-background to-primary/10"></div>
                <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center relative z-10">
                    <h2 className="text-4xl md:text-5xl font-bold text-white mb-8">
                        Ready to Transform Your Business?
                    </h2>
                    <p className="text-xl text-gray-400 mb-10">
                        Let's discuss how AI can solve your specific challenges and drive growth.
                    </p>
                    <Link
                        to="/contact"
                        className="inline-flex items-center gap-2 px-10 py-5 bg-white text-background rounded-xl font-bold text-lg hover:bg-gray-100 transition-all shadow-xl hover:shadow-2xl hover:-translate-y-1"
                    >
                        Start a Conversation <ArrowRight size={20} />
                    </Link>
                </div>
            </section>
        </div>
    );
};

export default HomePage;
