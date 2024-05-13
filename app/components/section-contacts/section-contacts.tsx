'use client';
import styles from './section-contacts.module.css';
import Image from "next/image";
import footerImage from "@/public/images/contact-section-image.png";

const SectionContacts = () => {
    return (
        <section className={styles.contactsContainer}>
            <Image alt="moon"
                   className={styles.contactsImage}
                   src={footerImage}
                   placeholder="blur"
                   quality={100}
                   sizes="484px"/>
            <h3 className={styles.contactsHeader}>Join our community</h3>
            <p className={styles.contactsText}>
                Join us on our mission to to the moon & revolutionize open source AI development so that we can build a
                permissionless, democratized, and decentralized AI.
                <br/>
                Let the fate of AI be in our hands and not that of big tech companies.
            </p>
            <div className={styles.contactsButtonContainer}>
                <button>telegram</button>
                <button>X</button>
            </div>
        </section>
    );
};
export default SectionContacts;