import {useInView} from 'framer-motion';
import React, {useRef, useEffect, forwardRef} from 'react';
import {ObserverSectionProps} from "@/types/components";


const ObserverSection = forwardRef<HTMLElement, ObserverSectionProps>(
    ({id, onInView, children, className}, ref) => {
        const localRef = useRef<HTMLElement>(null);
        const sectionRef = (ref as React.RefObject<HTMLElement>) || localRef;
        const inView = useInView(sectionRef, {margin: '-40% 0px -40% 0px'});

        useEffect(() => {
            onInView(id, inView);
        }, [inView, id, onInView]);

        return (
            <section ref={sectionRef} className={className} id={id}>
                {children}
            </section>
        );
    }
);

ObserverSection.displayName = "ObserverSection"

const MemoObserverSection = React.memo(ObserverSection);
MemoObserverSection.displayName = "ObserverSection";
export default MemoObserverSection; 