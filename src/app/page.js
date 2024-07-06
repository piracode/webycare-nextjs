import Navigation from '@/components/Navigation'
import styles from './page.module.css'

export default function Home() {
  return (
    <main className={styles.main}>
      <Navigation />
      <div className={styles.description}>
        <h1>Hello!!!</h1>
      </div>
    </main>
  )
}
