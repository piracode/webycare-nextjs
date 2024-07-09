'use client'

import { useState } from 'react'
import axios from 'axios'
import { useRouter } from 'next/navigation'

// This contact form implementation is based on the examples provided in the Form Carry documentation.
// https://formcarry.com/docs/code-examples/react

const ContactForm = () => {
  const [email, setEmail] = useState('')
  const [message, setMessage] = useState('')
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
          email,
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
    <form onSubmit={submit}>
      {error && <p>{error}</p>}
      <label htmlFor='email'>Email</label>
      <input
        id='email'
        type='email'
        value={email}
        onChange={(e) => setEmail(e.target.value)}
        required
      />

      <label htmlFor='message'>Message</label>
      <textarea
        id='message'
        value={message}
        onChange={(e) => setMessage(e.target.value)}
        required
      />

      <button type='submit'>Send</button>
    </form>
  )
}

export default ContactForm
