'use client';
import styles from "./header.module.scss";
import buttonStyles from "@/components/gradient-button/gradient-button.module.scss";

const Header = () => {
    const onMoveToTableButtonCLick = () => {
    };

    return (
        <header className={styles.header}>
            <button
                className={buttonStyles.textButton}
                data-content={'LLM Leaderboard'}
                onClick={onMoveToTableButtonCLick}/>
            <button
                className={buttonStyles.outlineButton}
                data-content={'Buy Spice AI'}
                onClick={() => {
                }}
            />
        </header>
    )
};
export default Header;