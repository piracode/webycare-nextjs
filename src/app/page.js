import Navigation from '../components/common/Navigation'
import styles from './page.module.css'
import ContactForm from '../components/common/ContactForm'
import Footer from '../components/common/Footer'
import HomeHero from '../components/homePage/HomeHero'
import WhoAreWeSection from '../components/homePage/WhoAreWeSection'
import ServicesSection from '../components/homePage/ServicesSection'
import OurWorkSection from '../components/homePage/WorkSection'
import OurProcessSection from '../components/homePage/OurProcessSection'

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
        <OurProcessSection />
        <OurWorkSection />
        <ContactForm />
        <Footer />
      </main>
    </>
  )
}
