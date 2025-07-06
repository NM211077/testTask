"use client";
import React, {useRef, useState, useEffect} from "react";
import {useInView} from "framer-motion";
import {ParallaxProvider} from 'react-scroll-parallax';
import BackgroundLayer from "@/components/ui/BackgroundLayer";
import {sectionList} from "@/data/sectionsLiist";


export default function Home() {
    const sectionRefs = sectionList.map(() => useRef<HTMLElement | null>(null));
    const inViews = sectionRefs.map(ref => useInView(ref, {margin: '-40% 0px -40% 0px'}));

    const [activeSection, setActiveSection] = useState<string>(sectionList[0].id);
    const [prevSection, setPrevSection] = useState<string>(sectionList[0].id);
    const [scrollDirection, setScrollDirection] = useState<'up' | 'down' | null>(null);

    useEffect(() => {
        const firstInViewIdx = inViews.findIndex(Boolean);
        if (firstInViewIdx !== -1) {
            const newSection = sectionList[firstInViewIdx].id;
            setScrollDirection(
                sectionList.findIndex(s => s.id === newSection) < sectionList.findIndex(s => s.id === prevSection)
                    ? 'up'
                    : 'down'
            );
            setPrevSection(activeSection);
            setActiveSection(newSection);
        }
    }, [inViews.map(Boolean).join()]);

    const handleSectionChange= (id: string) => {
        setActiveSection(id);
        const idx = sectionList.findIndex(s => s.id === id);
        sectionRefs[idx]?.current?.scrollIntoView({behavior: 'smooth'});
    };

    return (
        <ParallaxProvider>
            <main className="snap-y snap-mandatory h-screen overflow-y-scroll">
                <BackgroundLayer activeSection={activeSection}/>
                {sectionList.map(({id, Component}, idx) => (
                    <section
                        key={id}
                        ref={sectionRefs[idx]}
                        className="snap-start min-h-screen flex flex-col justify-center"
                    >
                        <Component handleSectionChange={handleSectionChange} scrollDirection={scrollDirection} activeSection={activeSection} />
                    </section>
                ))}
            </main>
        </ParallaxProvider>
    );
}
