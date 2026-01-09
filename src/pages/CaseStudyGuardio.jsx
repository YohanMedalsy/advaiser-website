import React from 'react';
import CaseStudyLayout from '../components/CaseStudyLayout';

const CaseStudyGuardio = () => {
    return (
        <CaseStudyLayout
            title="Cybersecurity Unicorn"
            subtitle="Engineered a real-time Deep Learning classifier to detect malicious domains in under 10 milliseconds."
            heroImage="/images/guardio.png"
            stats={[
                { label: "Inference Latency", value: "<10ms" },
                { label: "Detection Accuracy", value: "98.5%" },
                { label: "Daily Scans", value: "Millions" }
            ]}
            tags={["Deep Learning", "TensorFlow", "Cybersecurity", "CNN/LSTM", "Real-time API"]}
            nextLink="/portfolio/spaceplay"
            nextTitle="Mobile Gaming Network"
        >
            <section>
                <h2 className="text-3xl font-bold text-white mb-6">The Challenge</h2>
                <p className="text-gray-300 leading-relaxed text-lg">
                    In the cybersecurity arms race, speed is everything. <strong>Phishing sites and malware domains often exist for only minutes</strong>—just enough time to steal credentials before disappearing. Traditional blacklist-based solutions were too slow; by the time a domain was flagged, the damage was done.
                </p>
                <p className="text-gray-300 leading-relaxed text-lg mt-4">
                    The client, a leading consumer cybersecurity company, needed a proactive, predictive engine capable of analyzing a URL string itself and determining malicious intent in real-time, blocking the threat before the page even loaded for the user.
                </p>
            </section>

            <section>
                <h2 className="text-3xl font-bold text-white mb-6">The Solution: Lexical Deep Learning</h2>
                <p className="text-gray-300 leading-relaxed text-lg mb-8">
                    We moved beyond simple keyword matching and built a <strong>Character-Level Deep Neural Network</strong>. This model treats a URL not as text, but as a signal sequence, identifying subtle patterns indicative of DGA (Domain Generation Algorithms) and typosquatting.
                </p>

                <div className="my-12 bg-black/30 p-2 rounded-2xl border border-white/10">
                    <img src="/images/guardio-neural.png" alt="Deep Learning Neural Network Model" className="w-full rounded-xl" />
                    <p className="text-center text-sm text-gray-500 mt-4 italic">Figure 1: Hybrid CNN-LSTM Neural Architecture</p>
                </div>

                <h3 className="text-2xl font-bold text-white mb-4">Technical Breakdown</h3>
                <ul className="list-disc list-outside pl-6 space-y-4 text-gray-300 mb-8">
                    <li>
                        <strong className="text-primary">Hybrid Architecture:</strong> We combined <strong>CNNs (Convolutional Neural Networks)</strong> to detect local patterns (like "paypa1" vs "paypal") with <strong>LSTMs (Long Short-Term Memory)</strong> networks to understand the sequential structure of the URL path and subdomains.
                    </li>
                    <li>
                        <strong className="text-primary">Training on Chaos:</strong> The model was trained on a massive proprietary dataset of millions of benign and malicious URLs, utilizing technique like "Hard Negative Mining" to reduce false positives on confusing but safe domains.
                    </li>
                    <li>
                        <strong className="text-primary">Edge-Ready Latency:</strong> Inference was optimized using quantization techniques, achieving sub-10ms response times. This allowed the model to sit directly in the critical rendering path of the browser extension without degrading user experience.
                    </li>
                </ul>
            </section>

            <section>
                <h2 className="text-3xl font-bold text-white mb-6">The Outcome</h2>
                <p className="text-gray-300 leading-relaxed text-lg">
                    The deployed model became the bleeding-edge defense layer for millions of active users. It successfully identifies zero-day attacks that traditional scanners miss for hours or days.
                </p>
                <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mt-8">
                    <div className="bg-white/5 p-6 rounded-xl border border-white/10">
                        <div className="text-4xl font-bold text-primary mb-2">Real-Time</div>
                        <div className="text-gray-400">Protection logic runs instantly in-browser.</div>
                    </div>
                    <div className="bg-white/5 p-6 rounded-xl border border-white/10">
                        <div className="text-4xl font-bold text-primary mb-2">Zero-Day</div>
                        <div className="text-gray-400">Detects never-before-seen threats.</div>
                    </div>
                    <div className="bg-white/5 p-6 rounded-xl border border-white/10">
                        <div className="text-4xl font-bold text-primary mb-2">Scalable</div>
                        <div className="text-gray-400">Handles millions of queries daily.</div>
                    </div>
                </div>
            </section>
        </CaseStudyLayout>
    );
};

export default CaseStudyGuardio;
