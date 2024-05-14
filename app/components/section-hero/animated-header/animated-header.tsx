import {useGSAP} from "@gsap/react";
import {gsap} from "gsap";
import styles from './animated-header.module.scss';

const AnimatedHeader = () => {
    useGSAP(() => {
        const heroSection = document.getElementById('hero-section');
        if (!heroSection) return;

        gsap.to('#hero-header',
            {
                scrollTrigger: {
                    trigger: heroSection,
                    start: '10% top',
                    end: '20% top',
                    scrub: 1,
                    // markers: true,
                },
                xScale: 0.7,
            });
    });

    return (
        <h1 id='hero-header' className={styles.heroHeader}>
            A new economic primitive <br/> for funding decentralized AI
        </h1>
    );
}

export default AnimatedHeader;