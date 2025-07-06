import { useEffect, useState, useCallback } from "react";
import debounce from "lodash/debounce";
import {DeviceType} from "@/types/components";

const breakpoints: [number, DeviceType][] = [
    [1440, "2xl"],
    [1024, "xl"],
    [768, "lg"],
    [640, "md"],
    [0, "sm"],
];

export const useBreakpoint = () => {
    const [breakpoint, setBreakpoint] = useState<DeviceType>("xl");

    const calc = useCallback(() => {
        const width = window.innerWidth;
        const found = breakpoints.find(([minWidth]) => width >= minWidth);
        if (found) setBreakpoint(found[1]);
    }, []);

    const debouncedCalc = useCallback(
        debounce(() => {
            calc();
        }, 150),
        [calc]
    );

    useEffect(() => {
        calc();

        window.addEventListener("resize", debouncedCalc);

        return () => {
            window.removeEventListener("resize", debouncedCalc);
        };
    }, [calc, debouncedCalc]);

    return breakpoint;
};
