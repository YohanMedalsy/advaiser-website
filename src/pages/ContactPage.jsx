import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { Mail, MapPin, Phone, Send } from 'lucide-react';

const ContactPage = () => {
    const [formState, setFormState] = useState({
        name: '',
        email: '',
        message: '',
        projectType: '',
        timeline: '',
        budgetRange: '',
        dataAccess: ''
    });
    const [isSubmitting, setIsSubmitting] = useState(false);
    const [isSubmitted, setIsSubmitted] = useState(false);

    const handleSubmit = (e) => {
        e.preventDefault();
        setIsSubmitting(true);
        // Simulate API call
        setTimeout(() => {
            setIsSubmitting(false);
            setIsSubmitted(true);
            setFormState({
                name: '',
                email: '',
                message: '',
                projectType: '',
                timeline: '',
                budgetRange: '',
                dataAccess: ''
            });
        }, 1500);
    };

    const handleChange = (e) => {
        setFormState({
            ...formState,
            [e.target.name]: e.target.value
        });
    };

    return (
        <div className="pt-20 pb-32">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                <div className="grid grid-cols-1 lg:grid-cols-2 gap-16">

                    {/* Contact Info */}
                    <motion.div
                        initial={{ opacity: 0, x: -20 }}
                        animate={{ opacity: 1, x: 0 }}
                        className="space-y-8"
                    >
                        <div>
                            <h1 className="text-4xl md:text-5xl font-bold text-white mb-6">Let's Talk</h1>
                            <p className="text-xl text-gray-400 leading-relaxed">
                                Ready to build with AI? Whether you need an LLM/agent workflow (GenAI), a production ML model, or a full data-to-deployment system, I can help scope and ship it.
                            </p>
                        </div>

                        <div className="space-y-6">
                            <div className="flex items-start gap-4">
                                <div className="w-12 h-12 rounded-xl bg-surface border border-white/10 flex items-center justify-center text-primary shrink-0">
                                    <Mail size={24} />
                                </div>
                                <div>
                                    <h3 className="text-lg font-bold text-white mb-1">Email Us</h3>
                                    <p className="text-gray-400">advaiser.services@gmail.com</p>
                                </div>
                            </div>

                            <div className="flex items-start gap-4">
                                <div className="w-12 h-12 rounded-xl bg-surface border border-white/10 flex items-center justify-center text-primary shrink-0">
                                    <Phone size={24} />
                                </div>
                                <div>
                                    <h3 className="text-lg font-bold text-white mb-1">Call Us</h3>
                                    <p className="text-gray-400">+972-58-516-6516</p>
                                </div>
                            </div>

                            <div className="flex items-start gap-4">
                                <div className="w-12 h-12 rounded-xl bg-surface border border-white/10 flex items-center justify-center text-primary shrink-0">
                                    <MapPin size={24} />
                                </div>
                                <div>
                                    <h3 className="text-lg font-bold text-white mb-1">Location</h3>
                                    <p className="text-gray-400">Tel Aviv, Israel</p>
                                    <p className="text-gray-400">Available for Remote Work Worldwide</p>
                                </div>
                            </div>
                        </div>
                    </motion.div>

                    {/* Contact Form */}
                    <motion.div
                        initial={{ opacity: 0, x: 20 }}
                        animate={{ opacity: 1, x: 0 }}
                        className="bg-surface p-8 md:p-10 rounded-3xl border border-white/5"
                    >
                        {isSubmitted ? (
                            <div className="h-full flex flex-col items-center justify-center text-center py-12">
                                <div className="w-20 h-20 bg-green-500/10 rounded-full flex items-center justify-center text-green-500 mb-6">
                                    <Send size={40} />
                                </div>
                                <h3 className="text-2xl font-bold text-white mb-2">Message Sent!</h3>
                                <p className="text-gray-400">We'll get back to you within 24 hours.</p>
                                <button
                                    onClick={() => setIsSubmitted(false)}
                                    className="mt-8 text-primary hover:text-white transition-colors"
                                >
                                    Send another message
                                </button>
                            </div>
                        ) : (
                            <form onSubmit={handleSubmit} className="space-y-6">
                                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                                    <div className="space-y-2">
                                        <label htmlFor="name" className="text-sm font-medium text-gray-400">Name</label>
                                        <input
                                            type="text"
                                            id="name"
                                            name="name"
                                            required
                                            value={formState.name}
                                            onChange={handleChange}
                                            className="w-full px-4 py-3 bg-background border border-white/10 rounded-xl text-white focus:outline-none focus:border-primary focus:ring-1 focus:ring-primary transition-all"
                                            placeholder="John Doe"
                                        />
                                    </div>
                                    <div className="space-y-2">
                                        <label htmlFor="email" className="text-sm font-medium text-gray-400">Email</label>
                                        <input
                                            type="email"
                                            id="email"
                                            name="email"
                                            required
                                            value={formState.email}
                                            onChange={handleChange}
                                            className="w-full px-4 py-3 bg-background border border-white/10 rounded-xl text-white focus:outline-none focus:border-primary focus:ring-1 focus:ring-primary transition-all"
                                            placeholder="john@example.com"
                                        />
                                    </div>
                                </div>

                                {/* Optional qualifiers (keep friction low, improve lead quality) */}
                                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                                    <div className="space-y-2">
                                        <label htmlFor="projectType" className="text-sm font-medium text-gray-400">Project type (optional)</label>
                                        <select
                                            id="projectType"
                                            name="projectType"
                                            value={formState.projectType}
                                            onChange={handleChange}
                                            className="w-full px-4 py-3 bg-background border border-white/10 rounded-xl text-white focus:outline-none focus:border-primary focus:ring-1 focus:ring-primary transition-all"
                                        >
                                            <option value="">Not sure yet</option>
                                            <option value="llm-agents">LLM / Agent system</option>
                                            <option value="rag">RAG / Knowledge assistant</option>
                                            <option value="production-ml">Production ML model</option>
                                            <option value="mlops">MLOps / Deployment</option>
                                            <option value="data-engineering">Data engineering / Pipelines</option>
                                            <option value="other">Other</option>
                                        </select>
                                    </div>
                                    <div className="space-y-2">
                                        <label htmlFor="timeline" className="text-sm font-medium text-gray-400">Timeline (optional)</label>
                                        <select
                                            id="timeline"
                                            name="timeline"
                                            value={formState.timeline}
                                            onChange={handleChange}
                                            className="w-full px-4 py-3 bg-background border border-white/10 rounded-xl text-white focus:outline-none focus:border-primary focus:ring-1 focus:ring-primary transition-all"
                                        >
                                            <option value="">Not sure yet</option>
                                            <option value="asap">ASAP</option>
                                            <option value="2-4-weeks">2–4 weeks</option>
                                            <option value="1-2-months">1–2 months</option>
                                            <option value="flexible">Flexible</option>
                                        </select>
                                    </div>
                                    <div className="space-y-2">
                                        <label htmlFor="budgetRange" className="text-sm font-medium text-gray-400">Budget range (optional)</label>
                                        <select
                                            id="budgetRange"
                                            name="budgetRange"
                                            value={formState.budgetRange}
                                            onChange={handleChange}
                                            className="w-full px-4 py-3 bg-background border border-white/10 rounded-xl text-white focus:outline-none focus:border-primary focus:ring-1 focus:ring-primary transition-all"
                                        >
                                            <option value="">Not sure yet</option>
                                            <option value="3-5k">$3k–$5k</option>
                                            <option value="5-10k">$5k–$10k</option>
                                            <option value="10-20k">$10k–$20k</option>
                                            <option value="20k+">$20k+</option>
                                        </select>
                                    </div>
                                    <div className="space-y-2">
                                        <label htmlFor="dataAccess" className="text-sm font-medium text-gray-400">Data access (optional)</label>
                                        <select
                                            id="dataAccess"
                                            name="dataAccess"
                                            value={formState.dataAccess}
                                            onChange={handleChange}
                                            className="w-full px-4 py-3 bg-background border border-white/10 rounded-xl text-white focus:outline-none focus:border-primary focus:ring-1 focus:ring-primary transition-all"
                                        >
                                            <option value="">Not sure yet</option>
                                            <option value="yes">Yes</option>
                                            <option value="not-yet">Not yet</option>
                                            <option value="unsure">Not sure</option>
                                        </select>
                                    </div>
                                </div>

                                <div className="space-y-2">
                                    <label htmlFor="message" className="text-sm font-medium text-gray-400">What are you trying to achieve?</label>
                                    <textarea
                                        id="message"
                                        name="message"
                                        required
                                        rows={4}
                                        value={formState.message}
                                        onChange={handleChange}
                                        className="w-full px-4 py-3 bg-background border border-white/10 rounded-xl text-white focus:outline-none focus:border-primary focus:ring-1 focus:ring-primary transition-all resize-none"
                                        placeholder="Share your goal, success metric (if any), and constraints. If you're not sure, that's totally fine—I'll help you scope it."
                                    ></textarea>
                                    <p className="text-xs text-gray-500">Tip: If you don't know the answers to the optional fields above, leave them blank.</p>
                                </div>

                                <button
                                    type="submit"
                                    disabled={isSubmitting}
                                    className="w-full py-4 bg-primary hover:bg-blue-600 text-white rounded-xl font-bold text-lg transition-all shadow-lg shadow-primary/25 hover:shadow-primary/40 disabled:opacity-50 disabled:cursor-not-allowed flex items-center justify-center gap-2"
                                >
                                    {isSubmitting ? 'Sending...' : (
                                        <>
                                            Send Message <Send size={20} />
                                        </>
                                    )}
                                </button>
                            </form>
                        )}
                    </motion.div>
                </div>
            </div>
        </div>
    );
};

export default ContactPage;
