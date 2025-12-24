import React from 'react';
import CaseStudyLayout from '../components/CaseStudyLayout';

const CaseStudySpacePlay = () => {
    return (
        <CaseStudyLayout
            title="Mobile Gaming Network"
            subtitle="Optimizing player retention and LTV with a Contextual Bandit system for dynamic difficulty adjustment."
            heroImage="/images/spaceplay.png"
            stats={[
                { label: "Retention Uplift", value: "+15%" },
                { label: "Optimization Factor", value: "8.7x" },
                { label: "User Sessions", value: "43K+" }
            ]}
            tags={["Reinforcement Learning", "Contextual Bandits", "PySpark", "A/B Testing", "Data Science"]}
            nextLink="/portfolio/oktopost"
            nextTitle="AI Social Marketing Platform"
        >
            <section>
                <h2 className="text-3xl font-bold text-white mb-6">The Challenge</h2>
                <p className="text-gray-300 leading-relaxed text-lg">
                    Game balance is notoriously difficult. Make a level too hard, and players quit (churn). Make it too easy, and they get bored. A top mobile ad-tech network's flagship runner game was bleeding users at "Level 5," identifying a critical difficulty spike that manual tuning couldn't fix for every player skill cap.
                </p>
                <p className="text-gray-300 leading-relaxed text-lg mt-4">
                    They needed a <strong>Dynamic Difficulty Adjustment (DDA)</strong> system that could "read" a player in real-time and subtly adjust the game environment to keep them in the "Flow State"—the zone where challenge perfectly matches skill.
                </p>
            </section>

            <section>
                <h2 className="text-3xl font-bold text-white mb-6">The Solution: Contextual Bandits</h2>
                <p className="text-gray-300 leading-relaxed text-lg mb-8">
                    We implemented a <strong>Contextual Bandit algorithm</strong> (a streamlined form of Reinforcement Learning). Unlike traditional A/B testing which creates static cohorts, this system learns and adapts continuously for <em>each individual user</em>.
                </p>

                <div className="my-12 bg-black/30 p-2 rounded-2xl border border-white/10">
                    <img src="/images/spaceplay-dashboard.png" alt="RL Analytics Dashboard" className="w-full rounded-xl" />
                    <p className="text-center text-sm text-gray-500 mt-4 italic">Figure 1: Real-Time Flow State Analytics</p>
                </div>

                <h3 className="text-2xl font-bold text-white mb-4">The "Brain" of the Game</h3>
                <ul className="list-disc list-outside pl-6 space-y-4 text-gray-300 mb-8">
                    <li>
                        <strong className="text-primary">State (Context):</strong> Before every level, the model analyzes the player's history: win rate, average reaction time, inventory loadout, and churn probability.
                    </li>
                    <li>
                        <strong className="text-primary">Action (Intervention):</strong> The model selects a difficulty configuration from thousands of permutations (e.g., "Spawn 20% fewer enemies," "Drop extra health pack," "Increase game speed").
                    </li>
                    <li>
                        <strong className="text-primary">Reward (Objective):</strong> The feedback loop. If the player completes the level <em>and</em> plays the next one, the model gets a positive reward. If they quit, it learns that the specific intervention was suboptimal for that player type.
                    </li>
                </ul>
            </section>

            <section>
                <h2 className="text-3xl font-bold text-white mb-6">The Outcome</h2>
                <p className="text-gray-300 leading-relaxed text-lg">
                    The experiment was a definitive success. By personalizing the difficulty curve, we smoothed out the "churn spike" at Level 5 and significantly extended the average user lifecycle.
                </p>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mt-8">
                    <div className="bg-white/5 p-6 rounded-xl border border-white/10">
                        <div className="text-4xl font-bold text-primary mb-2">+15%</div>
                        <div className="text-gray-400">Increase in Day-7 Retention rates vs. the control group.</div>
                    </div>
                    <div className="bg-white/5 p-6 rounded-xl border border-white/10">
                        <div className="text-4xl font-bold text-primary mb-2">Adaptive</div>
                        <div className="text-gray-400">System self-corrects difficulty without developer intervention.</div>
                    </div>
                </div>
            </section>
        </CaseStudyLayout>
    );
};

export default CaseStudySpacePlay;
