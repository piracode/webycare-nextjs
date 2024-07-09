'use client'

import Head from 'next/head'
import { useRouter } from 'next/navigation'

const ThankYou = () => {
  const router = useRouter()

  const handleReturn = () => {
    console.log('cclicked on button')
    router.push('/')
  }

  console.log('Rendering thnak you page')
  return (
    <div>
      <Head>
        <title>Thank You</title>
      </Head>
      <main>
        <h1>Thank You</h1>
        <p>
          We've received your message, thank you for contacting us! We are
          working on it and will get back to you as soon as possible!
        </p>
        <button
          style={{
            padding: '10px 20px',
            margin: '20px 0',
            backgroundColor: '#0070f3',
            color: 'white',
            border: 'none',
            borderRadius: '5px',
            cursor: 'pointer',
            fontSize: '16px',
          }}
          onClick={handleReturn}
        >
          Return to Main Page
        </button>
      </main>
    </div>
  )
}

export default ThankYou
