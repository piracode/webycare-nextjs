import Navigation from '@/components/Navigation'
import styles from './page.module.css'
import ContactForm from '@/components/ContactForm'
import SwipeCarousel from '@/components/SwipeCarousel'
import HomeHero from '@/components/HomeHero'
import WhoAreWeSection from '@/components/WhoAreWeSection'
import ServicesSection from '@/components/ServicesSection'

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
        <SwipeCarousel />
        <ContactForm />
      </main>
    </>
  )
}
