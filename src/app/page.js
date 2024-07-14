import Navigation from '@/components/Navigation'
import styles from './page.module.css'
import ContactForm from '@/components/ContactForm'
import SwipeCarousel from '@/components/SwipeCarousel'

export default function Home() {
  return (
    <>
      <header>
        <Navigation />
      </header>
      <main className={styles.main}>
        <div className={styles.description}>
          <h1>Hello!!!</h1>
        </div>
        <ContactForm />
        <SwipeCarousel />
      </main>
    </>
  )
}
