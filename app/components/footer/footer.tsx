import footerImage from '../../../public/images/footer-image.png';
import Image from 'next/image';
import styles from './footer.module.css';

const Footer = () => {
    return (
        <footer className={styles.footerContainer}>
            <Image
                alt="planet"
                src={footerImage}
                placeholder="blur"
                quality={100}
                fill
                sizes="100vw"
                style={{
                    objectFit: 'cover',
                    bottom: 0,
                    inset: 0,
                }}
            />
        <p className={styles.footerText}>
            Join our community and harvest $SALT
        </p>
        </footer>
    );
}

export default Footer;