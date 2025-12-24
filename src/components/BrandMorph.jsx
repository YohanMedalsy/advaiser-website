import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';

const BrandMorph = () => {
    const [isExpanded, setIsExpanded] = useState(false);

    useEffect(() => {
        // Start animation loop
        const interval = setInterval(() => {
            setIsExpanded(prev => !prev);
        }, 5000); // Format: 5s hold state

        return () => clearInterval(interval);
    }, []);

    const letterVariants = {
        hidden: {
            width: 0,
            opacity: 0,
            x: -10
        },
        visible: {
            width: "auto",
            opacity: 1,
            x: 0,
            transition: {
                duration: 0.6,
                ease: "easeOut"
            }
        },
        exit: {
            width: 0,
            opacity: 0,
            x: -5,
            transition: { duration: 0.4, ease: "easeInOut" }
        }
    };

    return (
        <div className="flex items-center justify-center">
            {/* adv -> advanced */}
            <span className="text-white font-bold">adv</span>
            <AnimatePresence>
                {isExpanded && (
                    <motion.div
                        variants={letterVariants}
                        initial="hidden"
                        animate="visible"
                        exit="exit"
                        className="overflow-hidden text-primary font-bold"
                    >
                        anced
                    </motion.div>
                )}
            </AnimatePresence>

            {/* AI */}
            <span className="text-secondary font-bold mx-[1px]">AI</span>

            {/* ser -> service */}
            <span className="text-white font-bold">ser</span>
            <AnimatePresence>
                {isExpanded && (
                    <motion.div
                        variants={letterVariants}
                        initial="hidden"
                        animate="visible"
                        exit="exit"
                        className="overflow-hidden text-primary font-bold"
                    >
                        vice
                    </motion.div>
                )}
            </AnimatePresence>
        </div>
    );
};

export default BrandMorph;
