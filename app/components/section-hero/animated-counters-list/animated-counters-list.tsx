import {useGSAP} from "@gsap/react";
import {gsap} from "gsap";
import styles from './animated-counters-list.module.scss';
import CountersList from "@/app/components/section-hero/animated-counters-list/counters-list/counters-list";

const AnimatedCountersList = () => {
    useGSAP(() => {
        const heroSection = document.getElementById('hero-section');
        const counters = gsap.utils.toArray('.counter');

        if (!heroSection || !counters.length) return;

        gsap.fromTo(
            counters,
            {alpha: 0, y: '0%'},
            {
                scrollTrigger: {
                    trigger: heroSection,
                    start: '10% top',
                    end: '30% top',
                    scrub: 1,
                    // markers: true,
                },
                stagger: 0.1,
                y: '-140%',
                opacity: 1,
            });
    });

    return (
        <div className={styles.animationContainer}>
            <CountersList/>
        </div>
    )
};

export default AnimatedCountersList;