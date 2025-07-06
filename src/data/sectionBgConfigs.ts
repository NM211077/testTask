"use client";

import React from "react";
import {DESKTOP_PLANET, MOBILE_PLANET} from "@/constants/imagePath";
import {DeviceType} from "@/types/components";

const baseSpot: Partial<React.CSSProperties> = {
    width: 504.81,
    height: 795.74,
    filter: "blur(100px)",
    position: "absolute",
};

const baseRedSpot: Partial<React.CSSProperties> = {
    background:
        "linear-gradient(173.65deg, rgba(252, 111, 50, 0.2) -0.71%, rgba(255, 74, 89, 0.2) 86.87%)",
    opacity: 0.7,
};

const baseBlueSpot: Partial<React.CSSProperties> = {
    background:
        "linear-gradient(166.79deg, rgba(50, 191, 252, 0.2) -15.02%, rgba(0, 85, 119, 0.2) 83.46%)",
    opacity: 0.8,
};

const basePlanet: Partial<React.CSSProperties> = {
    width: 1016,
    height: 1016,
    background: DESKTOP_PLANET,
    position: "absolute",
};

const red = (style: Partial<React.CSSProperties>): React.CSSProperties => ({
    ...baseSpot,
    ...baseRedSpot,
    ...style,
});

const blue = (style: Partial<React.CSSProperties>): React.CSSProperties => ({
    ...baseSpot,
    ...baseBlueSpot,
    ...style,
});

const planet = (style: Partial<React.CSSProperties>): React.CSSProperties => ({
    ...basePlanet,
    ...style,
});

export const sectionBgConfigs: Record<string, Record<DeviceType, {
    redSpot: React.CSSProperties;
    blueSpot: React.CSSProperties;
    planet: React.CSSProperties;
}>> = {
    hero: {
        sm: {
            redSpot: red({width: 254.81, height: 395.74, left: -114.32, top: "60vh", transform: "rotate(-112.47deg)"}),
            blueSpot: blue({left: 70.83, top: -556.99, transform: "rotate(-124.02deg)"}),
            planet: planet({
                width: 415,
                height: 415,
                right: -76.02,
                top: 100.02,
                background: MOBILE_PLANET,
                transform: "matrix(-1, -0.05, -0.05, 1, 0, 0)"
            }),
        },
        md: {
            redSpot: red({left: -114.32, top: "60vh", transform: "rotate(-112.47deg)"}),
            blueSpot: blue({left: 70.83, top: -556.99, transform: "rotate(-124.02deg)"}),
            planet: planet({
                width: 615,
                height: 615,
                right: -76.02,
                top: 100.02,
                background: MOBILE_PLANET,
                transform: "matrix(-1, -0.05, -0.05, 1, 0, 0)"
            }),
        },
        lg: {
            redSpot: red({left: -274.32, top: 732.49, transform: "rotate(-112.47deg)"}),
            blueSpot: blue({left: 150.83, top: -496.99, transform: "rotate(-124.02deg)"}),
            planet: planet({
                width: 515,
                height: 515,
                right: -96.02,
                top: 320.02,
                transform: "matrix(-1, -0.05, -0.05, 1, 0, 0)"
            }),
        },
        xl: {
            redSpot: red({left: -274.32, top: 532.49, transform: "rotate(-112.47deg)"}),
            blueSpot: blue({left: 120.83, top: -496.99, transform: "rotate(-124.02deg)"}),
            planet: planet({
                width: 615,
                height: 615,
                right: -96.02,
                top: 120.02,
                transform: "matrix(-1, -0.05, -0.05, 1, 0, 0)"
            }),
        },
        "2xl": {
            redSpot: red({left: -214.32, top: 632.49, transform: "rotate(-112.47deg)"}),
            blueSpot: blue({left: 350.83, top: -296.99, transform: "rotate(-124.02deg)"}),
            planet: planet({right: -66.02, top: 100.02, transform: "matrix(-1, -0.05, -0.05, 1, 0, 0)"}),
        },
    },
    staticButtonsSection: {
        sm: {
            redSpot: red({left: 82.22, top: 719.48, transform: "rotate(-64.68deg)"}),
            blueSpot: blue({left: 551.82, top: -383.87, transform: "rotate(-82.13deg)"}),
            planet: planet({
                width: 415,
                height: 415,
                right: -80.91,
                top: 125,
                background: MOBILE_PLANET,
                transform: "matrix(-1, 0.04, 0.04, 1, 0, 0)",
                filter: "brightness(90%)"
            }),
        },
        md: {
            redSpot: red({left: -154.32, top: "55vh", transform: "rotate(-112.47deg)"}),
            blueSpot: blue({left: 170.83, top: -756.99, transform: "rotate(-124.02deg)"}),
            planet: planet({
                width: 715,
                height: 715,
                right: -76.02,
                top: 100.02,
                background: MOBILE_PLANET,
                transform: "matrix(-1, -0.05, -0.05, 1, 0, 0)"
            }),
        },
        lg: {
            redSpot: red({left: -74.32, top: 532.49, transform: "rotate(-64.68deg)"}),
            blueSpot: blue({left: 150.83, top: -496.99, transform: "rotate(-82.13deg)"}),
            planet: planet({
                width: 615,
                height: 615,
                right: -96.02,
                top: 220.02,
                transform: "matrix(-1, -0.05, -0.05, 1, 0, 0)"
            }),
        },
        xl: {
            redSpot: red({left: 82.22, top: 519.48, transform: "rotate(-64.68deg)"}),
            blueSpot: blue({left: 251.82, top: -583.87, transform: "rotate(-82.13deg)"}),
            planet: planet({
                width: 715,
                height: 715,
                right: -70.91,
                top: 25,
                transform: "matrix(-1, 0.04, 0.04, 1, 0, 0)"
            }),
        },
        "2xl": {
            redSpot: red({left: 82.22, top: 819.48, transform: "rotate(-64.68deg)"}),
            blueSpot: blue({left: 551.82, top: -383.87, transform: "rotate(-82.13deg)"}),
            planet: planet({right: -70.91, top: 25, transform: "matrix(-1, 0.04, 0.04, 1, 0, 0)"}),
        },
    },
    integrated: {
        sm: {
            redSpot: red({width: 300, height: 400, left: 42.22, top: "30vh", transform: "rotate(-64.68deg)"}),
            blueSpot: blue({left: 551.82, top: -383.87, transform: "rotate(-82.13deg)"}),
            planet: planet({
                width: 415,
                height: 415,
                right: -80.91,
                top: 35,
                background: MOBILE_PLANET,
                transform: "matrix(-1, 0.04, 0.04, 1, 0, 0)",
                filter: "brightness(90%)"
            }),
        },
        md: {
            redSpot: red({width: 300, height: 400, left: "25vw", top: "35vh", transform: "rotate(-46.26deg)"}),
            blueSpot: blue({left: -70.83, top: -656.99, transform: "rotate(-61.68deg)"}),
            planet: planet({
                width: 615,
                height: 615,
                right: -86.02,
                top: 50.02,
                background: MOBILE_PLANET,
                transform: "matrix(-1, -0.05, -0.05, 1, 0, 0)"
            }),
        },
        lg: {
            redSpot: red({width: 300, height: 400, left: "20vw", top: "40vh", transform: "rotate(-46.26deg)"}),
            blueSpot: blue({left: 100.83, top: -656.99, transform: "rotate(-61.68deg)"}),
            planet: planet({
                width: 615,
                height: 615,
                right: -96.02,
                top: 10.02,
                transform: "matrix(-1, -0.05, -0.05, 1, 0, 0)"
            }),
        },
        xl: {
            redSpot: red({width: 300, height: 400, left: "20vw", top: "40vh", transform: "rotate(-46.26deg)"}),
            blueSpot: blue({left: 100.83, top: -656.99, transform: "rotate(-61.68deg)"}),
            planet: planet({
                width: 615,
                height: 615,
                right: -96.02,
                top: 10.02,
                transform: "matrix(-1, -0.05, -0.05, 1, 0, 0)"
            }),
        },
        "2xl": {
            redSpot: red({width: 300, height: 400, left: "20vw", top: "40vh", transform: "rotate(-46.26deg)"}),
            blueSpot: blue({left: 100.83, top: -656.99, transform: "rotate(-61.68deg)"}),
            planet: planet({right: -70.91, top: -20.91, transform: "matrix(-1, 0.04, 0.04, 1, 0, 0)"}),
        },
    },
};
