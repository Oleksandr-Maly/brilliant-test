import styles from './section-leaderboard.module.scss';
import buttonStyles from '@/components/gradient-button/gradient-button.module.scss';
import LeaderboardTable from "@/app/components/section-leaderboard/leaderboard-table/leaderboard-table";


const SectionLeaderboard = () => {
    return (
        <section id={'section-leaderboard'} >
            <div className={styles.sectionContainer}>
                <div className={styles.headerContainer}>
                    <h2 className={styles.sectionHeader}>LLM Leaderboard</h2>
                    <button className={buttonStyles.outlineButton} data-content={'Submit your model'}/>
                </div>

                <p className={styles.sectionContent}>
                    We evaluate LLMs on key benchmarks using the Eleuther AI, a framework to test LLMs on a large number
                    of
                    different evaluation tasks.
                    The higher the score, the better the LLM.
                </p>

                <LeaderboardTable/>
            </div>

        </section>
    );
};
export default SectionLeaderboard;