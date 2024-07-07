import Navigation from '@/components/Navigation'
import styles from './page.module.css'

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
      </main>
    </>
  )
}
