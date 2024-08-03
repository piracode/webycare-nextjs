import Navigation from '../components/common/Navigation'
import styles from './page.module.css'
import ContactForm from '../components/common/ContactForm'
import HomeHero from '../components/homePage/HomeHero'
import WhoAreWeSection from '../components/homePage/WhoAreWeSection'
import ServicesSection from '../components/homePage/ServicesSection'
import OurWorkSection from '../components/homePage/WorkSection'

export default function Home() {
  return (
    <>
      <header>
        <Navigation />
      </header>
      <main className={styles.main}>
        <div className={styles.description}>
          <HomeHero />
        </div>
        <WhoAreWeSection />
        <ServicesSection />
        <OurWorkSection />
        <ContactForm />
      </main>
    </>
  )
}
