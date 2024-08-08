import Navigation from '@/components/common/HeaderNav/Navigation'
import Footer from '@/components/common/Footer'
import styles from '../page.module.css'
import AboutHero from '@/components/aboutPage/AboutHero'

export default function About() {
  return (
    <>
      <header>
        <Navigation />
      </header>
      <main className={styles.main}>
        <AboutHero />
      </main>
      <Footer />
    </>
  )
}
