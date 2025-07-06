'use client';
import React from 'react';
import {sectionBgConfigs} from "@/data/sectionBgConfigs";
import {Parallax} from "react-scroll-parallax";
import {useBreakpoint} from "@/hooks/useBreakpoint";

const BackgroundLayer = ({ activeSection }: { activeSection: string }) => {
    const breakpoint = useBreakpoint();
    const config = sectionBgConfigs[activeSection]?.[breakpoint] ?? sectionBgConfigs['hero'].xl;

    return (
        <div className="bg-wrapp fixed inset-0 -z-10 pointer-events-none bg-black">
            <Parallax y={[-20, 20]}>
                <div className="planet absolute" style={config.planet} />
            </Parallax>

            <Parallax y={[-40, 40]}>
                <div className="red-spot absolute" style={config.redSpot} />
                <div className="blue-spot absolute" style={config.blueSpot} />
            </Parallax>
        </div>
    );
};

export default BackgroundLayer;