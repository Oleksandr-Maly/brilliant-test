import heroImage from "@/public/images/hero-image.png";
import Image from "next/image";
import {useGSAP} from "@gsap/react";
import {gsap} from "gsap";
import {ScrollTrigger} from "gsap/ScrollTrigger";
import styles from './animated-planet-image.module.scss';

gsap.registerPlugin(ScrollTrigger)


const AnimatedPlanetImage = () => {
    useGSAP(() => {
        const startTrigger = document.querySelector('#hero-section');
        const endTrigger = document.querySelector('#section-leaderboard');
        if (!startTrigger || !endTrigger) {
            return;
        }

        gsap.to(startTrigger, {
            scrollTrigger: {
                trigger: '#planet-image', // start when the first section hits the top
                endTrigger: endTrigger, // end when the fourth section leaves the top
                start: 'top top',
                end: 'top bottom',
                scrub: 1,
                pin: true,
            },
        });
    });
    return (
        <Image id={'planet-image'} src={heroImage} alt={'planet image'} className={styles.heroImage}/>
    );
};
export default AnimatedPlanetImage;