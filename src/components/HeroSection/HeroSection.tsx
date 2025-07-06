'use client';
import React, { useEffect, useState} from "react";
import GradientButton from "../ui/GradientButton";
import StaticButtonsSection from "@/components/StaticButtonsSection";
import styles from "./HeroSection.module.scss";
import type { HeroSectionProps } from '@/types/components';
const defaultGradient = 'linear-gradient(108.88deg, #B53EA4 -2.82%, #FC6F32 34.48%, #FF4A59 93.08%)';
const newGradient = 'linear-gradient(106.2deg, #FFD6F9 -12.33%, #FFCBB4 50.28%, #FFBEC3 114.17%)';

const HeroSection = ({ handleSectionChange, scrollDirection, activeSection }: HeroSectionProps) => {
    const [gradient, setGradient] = useState(defaultGradient);
    const [showStaticButtonsSection, setShowStaticButtonsSection] = useState(false);
    const [showPulseButtons, setShowPulseButtons] = useState(false);

    useEffect(() => {
        if (activeSection === 'hero' && scrollDirection === 'up') {
            setShowStaticButtonsSection(true);
            setGradient(newGradient);
            handleSectionChange("staticButtonsSection");
        }
    }, [activeSection, scrollDirection]);

    useEffect(() => {
        const timerPulse = setTimeout(() => {
            setShowPulseButtons(true);
        }, 700);
        const timer = setTimeout(() => {
            setShowStaticButtonsSection(true);
            setGradient(newGradient);
            handleSectionChange("staticButtonsSection");
            setShowPulseButtons(false);
        }, 1500);

        return () => {
            clearTimeout(timerPulse);
            clearTimeout(timer);
        };
    }, []);

    return (
        <section className="flex flex-col min-h-screen overflow-hidden">
            <nav className="flex justify-center items-center gap-6 px-10 pt-8 z-10 relative">
                <GradientButton variant="text" size="sm" className={showPulseButtons ? "animate-pulse" : "" }>How It Works</GradientButton>
                <GradientButton variant="border" size="sm">Buy Salt AI</GradientButton>
            </nav>

            <div className="flex flex-1 flex-col items-start justify-center px-10 xl:px-0 py-16 sm:max-w-[600px] md:max-w-[900px] lg:max-w-[1200px] xl:max-w-[1630px] mx-auto relative z-10 min-h-0">
                <h1
                    className={`font-clash inline-block text-4xl md:text-[50px] lg:text-7xl 2xl:text-[128px] font-medium mb-7 leading-[115%] 2xl:leading-[142px] ${gradient === defaultGradient ? styles.heroGradient : styles.heroGradientActive}`}
                >
                    A new economic primitive<br/>for funding decentralized AI
                </h1>
                <p className="font-inter text-base md:text-md lg:text-xl xl:text-2xl text-gray-200 mb-8 leading-[29px] font-normal">
                    We track, rank and pay for the best open source decentralized LLMs to compete against OpenAI
                </p>
                <div className="flex gap-4 mb-12">
                    <GradientButton variant="border" size="lg">Buy Salt AI</GradientButton>
                    <GradientButton variant="text" size="lg" className={showPulseButtons ? "animate-pulse" : "" }>Try Now</GradientButton>
                </div>
                <StaticButtonsSection show={showStaticButtonsSection}/>
            </div>
        </section>
    );
};

export default HeroSection;
