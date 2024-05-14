'use client';
import styles from "./section-hero.module.scss";
import buttonStyles from "@/components/gradient-button/gradient-button.module.scss";
import AnimatedCountersList from "@/app/components/section-hero/animated-counters-list/animated-counters-list";
import {useGSAP} from "@gsap/react";
import {gsap} from "gsap";
import AnimatedHeader from "@/app/components/section-hero/animated-header/animated-header";

const SectionHero = () => {
    useGSAP(() => {
        gsap.to('#header-animation-container',
            {
                scrollTrigger: {
                    trigger: '#hero-section',
                    start: '0% top',
                    end: '10% top',
                    scrub: 1,
                    // markers: true,
                },
                y: '-10%',
                color: 'white',
            });
    });

    return (
        <section id='hero-section'>
            <div className={styles.countersAnimationContainer}>
                <div id='header-animation-container' className={styles.heroSectionContainer}>
                    {/*<h1 id='hero-header' className={styles.heroHeader}>*/}
                    {/*    A new economic primitive <br/> for funding decentralized AI*/}
                    {/*</h1>*/}
                    <AnimatedHeader/>
                    <p>
                        We track, rank and pay for the best open source decentralized LLMs to compete against OpenAI
                    </p>
                    <div className={styles.heroButtonContainer}>
                        <button
                            className={buttonStyles.outlineButton}
                            data-content={'Buy Spice AI'}
                            onClick={() => {
                            }}
                        />

                        <button
                            className={buttonStyles.textButton}
                            data-content={'Try Now'}
                            onClick={() => {
                            }}
                        />
                    </div>
                </div>
                <AnimatedCountersList/>
            </div>
        </section>
    );
};

export default SectionHero;