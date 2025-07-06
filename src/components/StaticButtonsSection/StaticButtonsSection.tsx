import React from 'react';
import { staticButtons } from "@/data/staticButtons";
import { motion, AnimatePresence } from "framer-motion";
import styles from './StaticButtonsSection.module.scss';
import type { StaticButtonsSectionProps } from '@/types/components';

const gradientBg = "linear-gradient(105.65deg, rgba(150,52,136,0.2) 0.15%, rgba(252,111,50,0.2) 130.58%, rgba(255,74,89,0.2) 263.64%)";

const StaticButtonsSection: React.FC<StaticButtonsSectionProps> = ({ show = false }) => {
    return (
        <AnimatePresence>
            {show && (
                <motion.div
                    id="staticButtonsSection"
                    initial={{ opacity: 0, y: 40 }}
                    animate={{ opacity: 1, y: 0 }}
                    exit={{ opacity: 0, y: 40 }}
                    transition={{ duration: 1.2, ease: [0.4, 0, 0.2, 1], delay: 0.15 }}
                    className="static-buttons-section w-full flex flex-col md:flex-row justify-center items-stretch gap-6 md:gap-8 mt-6 xl:mt-10 z-20"
                    style={{ minHeight: 0 }}
                >
                    {staticButtons.map(({ title, description }) => (
                        <div
                            key={title}
                            className={`flex-1 rounded-[60px] xl:rounded-[91px] py-6 md:p-4 lg:p-8 flex flex-col items-center focus:outline-none cursor-pointer ${styles.buttonGradientBg}`}
                            tabIndex={0}
                        >
                            <span className="font-inter text-4xl lg:text-5xl xl:text-6xl font-bold text-white">{title}</span>
                            <span className="font-inter text-base md:text-md lg:text-xl font-normal text-gray-300 mt-2">{description}</span>
                        </div>
                    ))}
                </motion.div>
            )}
        </AnimatePresence>
    );
};

export default StaticButtonsSection;