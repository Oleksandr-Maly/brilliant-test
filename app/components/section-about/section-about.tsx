'use client';
import styles from './section-about.module.scss';
import buttonStyles from '@/components/gradient-button/gradient-button.module.scss';

const SectionAbout = () => {
    return (
        <section className={styles.sectionContainer}>
            <h2 className={styles.sectionHeader}>
                Crowdsourcing our collective intelligence to build the best AI
            </h2>
            <p className={styles.sectionContent}>
                Open source AIs have been lagging in development behind OpenAI with billions of dollars.<br/>
                We run competitions between AI models to find and pay for the best AI model.<br/>
                Users will be able to access the best AI models.
            </p>
            <button
                className={buttonStyles.outlineButton}
                data-content={'Use the cutting edge AI'}
                onClick={() => {
                }}
            />
        </section>
    );
}
export default SectionAbout;