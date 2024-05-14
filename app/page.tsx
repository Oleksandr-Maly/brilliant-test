'use client';
import styles from "./page.module.css";
import Header from "@/app/components/header/header";
import SectionHero from "@/app/components/section-hero/section-hero";
import SectionAbout from "@/app/components/section-about/section-about";
import SectionLeaderboard from "@/app/components/section-leaderboard/section-leaderboard";
import SectionClients from "@/app/components/section-clients/section-clients";
import SectionContacts from "@/app/components/section-contacts/section-contacts";
import Footer from "@/app/components/footer/footer";
import blob01 from "../public/images/blob-01.svg";
import blob02 from "../public/images/blob-02.svg";
import AnimatedPlanetImage from "@/app/components/animated-planet-image/animated-planet-image";
import Image from "next/image";
import footerImage from "@/public/images/footer-image.png";
import {useGSAP} from "@gsap/react";
import {gsap} from "gsap";


export default function Home() {
    useGSAP(() => {
        const sections = gsap.utils.toArray(['section', 'footer']);
        const scrollContainer = document.querySelector('.softScroll') as HTMLElement | null;

        if (!sections.length || !scrollContainer) {
            return;
        }

        gsap.to(sections, {
                yPercent: -100 * (sections.length - 1),
                ease: 'none',
                scrollTrigger: {
                    trigger: '.softScroll',
                    pin: true,
                    scrub: 1,
                    snap: 1 / (sections.length - 1),
                    end: () => "+=" + scrollContainer.offsetHeight,
                }
            },
        );
    });

    return (
        <main className={styles.main}>
            <AnimatedPlanetImage/>
            <Image src={blob01} alt={'abstract image'} className={styles.blob01}/>
            <Image src={blob02} alt={'abstractt image'} className={styles.blob02}/>
            <Image
                alt="moon image"
                src={footerImage}
                placeholder="blur"
                quality={100}
                style={{position: 'absolute', bottom: 0, left: 0, right: 0}}
                objectFit={'contain'}
            />

            <Header/>
            <div className={'softScroll'}>
                <SectionHero/>
                <SectionAbout/>
                <SectionLeaderboard/>
                <SectionClients/>
                <SectionContacts/>
                <Footer/>
            </div>
        </main>
    );
};

