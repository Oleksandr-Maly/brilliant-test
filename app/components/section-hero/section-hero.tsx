'use client';
import styles from "./section-hero.module.scss";
import buttonStyles from "@/components/gradient-button/gradient-button.module.scss";
import CountersList from "@/app/components/section-hero/counters/counters-list";

const SectionHero = () => {
    return (
        <section className={styles.heroSectionContainer}>
            {/*            <Image src={heroImage} alt={'moon image'} className={styles.heroImage} />
            <Image src={blob01} alt={'moon image'} className={styles.blob01} />
            <Image src={blob02} alt={'moon image'} className={styles.blob02} />*/}
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
            <CountersList/>
        </section>
    );
};

export default SectionHero;