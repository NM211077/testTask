"use client";
import React, {useRef, useState, useEffect} from "react";
import {ParallaxProvider} from 'react-scroll-parallax';
import BackgroundLayer from "@/components/ui/BackgroundLayer";
import {sectionList} from "@/data/sectionsLiist";
import ObserverSection from '@/components/ui/ObserverSection';


export default function Home() {
    const [activeSection, setActiveSection] = useState<string>(sectionList[0].id);
    const [prevSection, setPrevSection] = useState<string>(sectionList[0].id);
    const [scrollDirection, setScrollDirection] = useState<'up' | 'down' | null>(null);
    const [inViews, setInViews] = useState<Record<string, boolean>>({});
    const sectionRefs = useRef<Array<React.RefObject<HTMLElement | null>>>([]);
    if (sectionRefs.current.length !== sectionList.length) {
        sectionRefs.current = Array(sectionList.length)
            .fill(null)
            .map(() => React.createRef<HTMLElement>());
    }

    const handleInView = React.useCallback((id: string, inView: boolean) => {
        setInViews(prev => ({ ...prev, [id]: inView }));
    }, []);

    useEffect(() => {
        const firstInViewId = sectionList.find(s => inViews[s.id]);
        if (firstInViewId) {
            const newSection = firstInViewId.id;
            setScrollDirection(
                sectionList.findIndex(s => s.id === newSection) < sectionList.findIndex(s => s.id === prevSection)
                    ? 'up'
                    : 'down'
            );
            setPrevSection(activeSection);
            setActiveSection(newSection);
        }
    }, [Object.values(inViews).join()]);

    const handleSectionChange= (id: string) => {
        setActiveSection(id);
        const idx = sectionList.findIndex(s => s.id === id);
        const ref = sectionRefs.current[idx]?.current;
        if (ref) ref.scrollIntoView({behavior: 'smooth'});
    };

    return (
        <ParallaxProvider>
            <main className="snap-y snap-mandatory h-screen overflow-y-scroll">
                <BackgroundLayer activeSection={activeSection}/>
                {sectionList.map(({id, Component}, idx) => (
                    <ObserverSection
                        key={id}
                        id={id}
                        onInView={handleInView}
                        className="snap-start min-h-screen flex flex-col justify-center"
                        ref={sectionRefs.current[idx]}
                    >
                        <Component handleSectionChange={handleSectionChange} scrollDirection={scrollDirection} activeSection={activeSection} />
                    </ObserverSection>
                ))}
            </main>
        </ParallaxProvider>
    );
}
