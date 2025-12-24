import React from 'react';
import { motion } from 'framer-motion';
import { ArrowLeft, ArrowRight } from 'lucide-react';
import { Link } from 'react-router-dom';

const CaseStudyLayout = ({
    title,
    subtitle,
    heroImage,
    stats,
    tags,
    children,
    nextLink,
    nextTitle
}) => {

    // Scroll to top handled by ScrollToTop component

    return (
        <div className="pt-20 pb-32">
            {/* Hero Section */}
            <div className="relative h-[60vh] min-h-[500px] w-full mb-20">
                <div className="absolute inset-0">
                    <img src={heroImage} alt={title} className="w-full h-full object-cover" />
                    <div className="absolute inset-0 bg-gradient-to-t from-background via-background/80 to-transparent" />
                    <div className="absolute inset-0 bg-black/40" />
                </div>

                <div className="absolute inset-0 flex items-end pb-20">
                    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 w-full">
                        <motion.div
                            key={title}
                            initial={{ opacity: 0, y: 30 }}
                            animate={{ opacity: 1, y: 0 }}
                            transition={{ duration: 0.8 }}
                        >
                            <Link to="/portfolio" className="inline-flex items-center gap-2 text-primary hover:text-white mb-6 transition-colors font-medium">
                                <ArrowLeft size={20} /> Back to Portfolio
                            </Link>
                            <h1 className="text-4xl md:text-6xl font-bold text-white mb-4 max-w-4xl leading-tight">
                                {title}
                            </h1>
                            <p className="text-xl md:text-2xl text-gray-300 max-w-2xl font-light">
                                {subtitle}
                            </p>
                        </motion.div>
                    </div>
                </div>
            </div>

            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                <div className="grid grid-cols-1 lg:grid-cols-12 gap-12">

                    {/* Sidebar Stats */}
                    <div className="lg:col-span-4 space-y-12">
                        <motion.div
                            key={`stats-${title}`}
                            initial={{ opacity: 0, x: -20 }}
                            animate={{ opacity: 1, x: 0 }}
                            transition={{ duration: 0.6, delay: 0.2 }}
                            className="bg-surface p-8 rounded-3xl border border-white/5 sticky top-32"
                        >
                            <h3 className="text-lg font-bold text-white mb-6 uppercase tracking-wider">Project Impact</h3>
                            <div className="grid grid-cols-1 gap-6 mb-8">
                                {stats.map((stat, index) => (
                                    <div key={index} className="border-b border-white/5 pb-4 last:border-0 last:pb-0">
                                        <div className="text-3xl font-bold text-primary mb-1">{stat.value}</div>
                                        <div className="text-sm text-gray-400 font-medium">{stat.label}</div>
                                    </div>
                                ))}
                            </div>

                            <h3 className="text-lg font-bold text-white mb-4 uppercase tracking-wider mt-8">Tech Stack</h3>
                            <div className="flex flex-wrap gap-2">
                                {tags.map((tag, i) => (
                                    <span key={i} className="px-3 py-1 rounded-full bg-white/5 text-gray-300 text-sm border border-white/10">
                                        {tag}
                                    </span>
                                ))}
                            </div>
                        </motion.div>
                    </div>

                    {/* Main Content */}
                    <div className="lg:col-span-8">
                        <motion.div
                            key={`content-${title}`}
                            initial={{ opacity: 0, y: 20 }}
                            animate={{ opacity: 1, y: 0 }}
                            transition={{ duration: 0.6, delay: 0.3 }}
                            div className="prose prose-invert prose-lg max-w-none space-y-12"
                        >
                            {children}
                        </motion.div>

                        {/* Next Project Nav */}
                        {nextLink && (
                            <div className="mt-20 pt-10 border-t border-white/10">
                                <Link to={nextLink} className="group block">
                                    <div className="text-sm text-gray-500 uppercase tracking-wider mb-2">Next Case Study</div>
                                    <div className="flex items-center justify-between">
                                        <h3 className="text-3xl font-bold text-white group-hover:text-primary transition-colors">
                                            {nextTitle}
                                        </h3>
                                        <ArrowRight size={32} className="text-gray-500 group-hover:text-primary group-hover:translate-x-2 transition-all" />
                                    </div>
                                </Link>
                            </div>
                        )}
                    </div>

                </div>
            </div>
        </div>
    );
};

export default CaseStudyLayout;
