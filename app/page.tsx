import styles from "./page.module.css";
import Header from "@/app/components/header/header";
import SectionHero from "@/app/components/section-hero/section-hero";
import SectionAbout from "@/app/components/section-about/section-about";
import SectionLeaderboard from "@/app/components/section-leaderboard/section-leaderboard";
import SectionClients from "@/app/components/section-clients/section-clients";
import SectionContacts from "@/app/components/section-contacts/section-contacts";
import Footer from "@/app/components/footer/footer";

export default function Home() {
    return (
        <main className={styles.main}>
            <Header/>
            <SectionHero/>
            <SectionAbout/>
            <SectionLeaderboard/>
            <SectionClients/>
            <SectionContacts/>
            <Footer/>
        </main>
    );
};

