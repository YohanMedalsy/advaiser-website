import React from 'react';
import CaseStudyLayout from '../components/CaseStudyLayout';

const CaseStudyOktopost = () => {
    return (
        <CaseStudyLayout
            title="AI Social Marketing Platform"
            subtitle="Scaling authentic social media advocacy with a multi-agent AI ghostwriting architecture."
            heroImage="/images/oktopost.png"
            stats={[
                { label: "Manual Effort Reduction", value: "90%" },
                { label: "Content Output", value: "100x" },
                { label: "Style Matching Accuracy", value: "96%" }
            ]}
            tags={["Large Language Models", "LangChain", "Prompt Engineering", "Fine-tuning", "Python"]}
            nextLink="/portfolio/guardio"
            nextTitle="Cybersecurity Unicorn"
        >
            <section>
                <h2 className="text-3xl font-bold text-white mb-6">The Challenge</h2>
                <p className="text-gray-300 leading-relaxed text-lg">
                    A leading B2B social media management platform faced a critical bottleneck: <strong>Employee Advocacy</strong>. While their platform allowed employees to share company content, the captions were often generic, leading to low engagement.
                </p>
                <p className="text-gray-300 leading-relaxed text-lg mt-4">
                    The "Blank Page Problem" paralyzed users. Marketing teams couldn't manually rewrite thousands of posts for every employee's unique voice. They needed a solution that could <strong>autonomously generate high-quality, personalized content</strong> at scale, indistinguishable from a human expert.
                </p>
            </section>

            <section>
                <h2 className="text-3xl font-bold text-white mb-6">The Solution: "Ghostwriter" Agent Hive</h2>
                <p className="text-gray-300 leading-relaxed text-lg mb-8">
                    We architected a bespoke <strong>Multi-Agent System</strong> designed to deconstruct, analyze, and replicate personal writing styles. Unlike generic GPT wrappers, this system treats "Voice" as a first-class citizen.
                </p>

                <div className="my-12 bg-black/30 p-2 rounded-2xl border border-white/10">
                    <img src="/images/oktopost-workflow.png" alt="Multi-Agent AI Workflow" className="w-full rounded-xl" />
                    <p className="text-center text-sm text-gray-500 mt-4 italic">Figure 1: The Multi-Agent Orchestration Pipeline</p>
                </div>

                <h3 className="text-2xl font-bold text-white mb-4">Architecture Highlights</h3>
                <ul className="list-disc list-outside pl-6 space-y-4 text-gray-300 mb-8">
                    <li>
                        <strong className="text-primary">Style DNA Extractor:</strong> A specialized agent analyzes a user's LinkedIn history, extracting 15+ linguistic features (e.g., emoji usage, sentence length variance, active vs. passive voice) to create a "Style Profile" vector.
                    </li>
                    <li>
                        <strong className="text-primary">Content Restylist:</strong> Using RAG (Retrieval Augmented Generation), the system retrieves the source article and the user's Style Profile. A fine-tuned Llama-2-70b model then "translates" the corporate announcement into the user's authentic voice.
                    </li>
                    <li>
                        <strong className="text-primary">The Critic Loop:</strong> A separate "Judge" agent evaluates the generated draft against brand safety guidelines and the original style profile, rejecting hallucinations or "AI-sounding" fluff before the user ever sees it.
                    </li>
                </ul>
            </section>

            <section>
                <h2 className="text-3xl font-bold text-white mb-6">The Outcome</h2>
                <p className="text-gray-300 leading-relaxed text-lg">
                    The system was integrated directly into the client's platform. The results were immediate and transformative. A process that used to take marketing teams weeks—creating custom copy for executives and sales teams—became instantaneous.
                </p>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mt-8">
                    <div className="bg-white/5 p-6 rounded-xl border border-white/10">
                        <div className="text-4xl font-bold text-primary mb-2">100x</div>
                        <div className="text-gray-400">Increase in content output capacity per social media manager.</div>
                    </div>
                    <div className="bg-white/5 p-6 rounded-xl border border-white/10">
                        <div className="text-4xl font-bold text-primary mb-2">Eliminated</div>
                        <div className="text-gray-400">The "Blank Page Syndrome" for thousands of employee advocates.</div>
                    </div>
                </div>
            </section>
        </CaseStudyLayout>
    );
};

export default CaseStudyOktopost;
