import styles from './footer.module.scss';

const Footer = () => {
    return (
        <footer className={styles.footerContainer}>
            <p className={styles.footerText}>
                Join our community and harvest $SALT
            </p>
        </footer>
    );
}

export default Footer;