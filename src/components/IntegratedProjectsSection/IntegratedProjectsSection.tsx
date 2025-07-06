'use client';
import {integratedProjects} from "@/data/integratedProjects";
import Marquee from "react-fast-marquee";
import {motion, useAnimation, useInView} from "framer-motion";
import {useRef, useEffect} from "react";
import styles from './IntegratedProjectsSection.module.scss';

export default function IntegratedProjectsSection() {
    const ref = useRef(null);
    const inView = useInView(ref, {once: true, margin: "-100px"});
    const controls = useAnimation();

    useEffect(() => {
        if (inView) {
            controls.start({opacity: 1, y: 0, transition: {duration: 1.2, ease: [0.4, 0, 0.2, 1]}});
        }
    }, [inView, controls]);

    return (
        <motion.section
            ref={ref}
            initial={{opacity: 0, y: 40}}
            animate={controls}
            className="py-20 text-white flex flex-col justify-center min-h-screen"
        >
            <div className=" container mx-auto px-4">
                <h2 className="font-clash text-center text-4xl md:text-[55px] lg:text-[40px] xl:text-[55px] 2xl:text-[64px] xl:leading-[79px] mb-1 font-medium">
                    Projects integrated into the Arrakis AI Ecosystem
                </h2>

                <Marquee autoFill
                         pauseOnHover
                         speed={40}
                         gradient={false}
                         className="py-8"
                >
                    {integratedProjects.map(({name, file}) => (
                        <div
                            key={name}
                            className={styles.projectLogo}
                            style={{backgroundImage: `url(${file})`}}
                        />
                    ))}
                </Marquee>
            </div>
        </motion.section>
    );
}
