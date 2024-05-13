'use client';
import styles from "./section-hero.module.css";
import buttonStyles from "@/components/gradient-button/gradient-button.module.css";
import Image from 'next/image';
import heroImage from '../../../public/images/header-image.png';
import blob01 from '../../../public/images/blob-01.svg';
import blob02 from '../../../public/images/blob-02.svg';

const SectionHero = () => {
    return (
        <section className={styles.heroSectionContainer}>
            <Image src={heroImage} alt={'moon image'} className={styles.heroImage} />
            <Image src={blob01} alt={'moon image'} className={styles.blob01} />
            <Image src={blob02} alt={'moon image'} className={styles.blob02} />
            <h1 className={styles.heroHeader}>A new economic primitive <br/> for funding decentralized AI</h1>
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
        </section>
    );
};

export default SectionHero;