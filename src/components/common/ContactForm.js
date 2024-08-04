'use client'

import { useState } from 'react'
import axios from 'axios'
import { useRouter } from 'next/navigation'
import styles from '../../styles/common/contactForm.module.scss'

const ContactForm = () => {
  const [email, setEmail] = useState('')
  const [message, setMessage] = useState('')
  const [name, setName] = useState('')
  const [website, setWebsite] = useState('')
  const [error, setError] = useState('')
  const router = useRouter()

  const submit = async (e) => {
    e.preventDefault()

    console.log('Form Carry', process.env.NEXT_PUBLIC_FORM_CARRY_API)
    console.log({ email })
    console.log({ message })
    try {
      const response = await axios.post(
        process.env.NEXT_PUBLIC_FORM_CARRY_API,
        {
          name,
          email,
          website,
          message,
        },
        {
          headers: {
            Accept: 'application/json',
          },
        }
      )

      if (response.data.code === 200) {
        router.push('/thank-you')
      } else {
        setError(response.data.message)
      }
    } catch (error) {
      setError(error.toString())
    }
  }

  return (
    <section className={styles['form-section']}>
      <h2>Contact us</h2>
      <form onSubmit={submit} className={styles.form}>
        {error && <p>{error}</p>}
        <label htmlFor='name'>Name</label>
        <input
          id='name'
          type='text'
          value={name}
          onChange={(e) => setName(e.target.value)}
          required
        />

        <label htmlFor='email'>Email</label>
        <input
          id='email'
          type='email'
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          required
        />

        <label htmlFor='website'>Website</label>
        <input
          id='website'
          type='url'
          value={website}
          onChange={(e) => setWebsite(e.target.value)}
        />

        <label htmlFor='message'>Tell us about your project</label>
        <textarea
          id='message'
          value={message}
          onChange={(e) => setMessage(e.target.value)}
          required
        />

        <button type='submit'>Send</button>
      </form>
    </section>
  )
}

export default ContactForm
