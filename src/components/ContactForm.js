'use client'

import { useState } from 'react'
import axios from 'axios'

// This contact form implementation is based on the examples provided in the Form Carry documentation.
// https://formcarry.com/docs/code-examples/react

const ContactForm = () => {
  const [email, setEmail] = useState('')
  const [message, setMessage] = useState('')
  const [submitted, setSubmitted] = useState(false)
  const [error, setError] = useState('')

  const submit = async (e) => {
    e.preventDefault()

    try {
      const response = await axios.post(
        process.env.FORM_CARRY_API,
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
        setSubmitted(true)
      } else {
        setError(response.data.message)
      }
    } catch (error) {
      setError(error.toString())
    }
  }

  if (submitted) {
    return (
      <p>
        We've received your message, thank you for contacting us! Please allow
        up to 48 hours to get a response.
      </p>
    )
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
