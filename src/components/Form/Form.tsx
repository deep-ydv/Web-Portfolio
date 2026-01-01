import { Container, ContainerSucces } from './styles'
import { useForm, ValidationError } from '@formspree/react'
import { toast, ToastContainer } from 'react-toastify'
import ReCAPTCHA from 'react-google-recaptcha'
import { useEffect, useState } from 'react'
import validator from 'validator'

export function Form() {
  const [state, handleSubmit] = useForm('xknkpqry')

  const [validEmail, setValidEmail] = useState(false)
  const [isHuman, setIsHuman] = useState(false)
  const [message, setMessage] = useState('')
  const [captchaToken, setCaptchaToken] = useState<string | null>(null)

  function verifyEmail(email: string) {
    setValidEmail(validator.isEmail(email))
  }

  useEffect(() => {
    if (state.succeeded) {
      toast.success('Email successfully sent!', {
        position: toast.POSITION.BOTTOM_LEFT,
        pauseOnFocusLoss: false,
        closeOnClick: true,
        hideProgressBar: false,
        toastId: 'succeeded',
      })
    }
  }, [state.succeeded])

  if (state.succeeded) {
    return (
      <ContainerSucces>
        <h3>Thanks for getting in touch!</h3>
        <button onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}>
          Back to the top
        </button>
        <ToastContainer />
      </ContainerSucces>
    )
  }

  return (
    <Container>
      <h2>Get in touch using the form</h2>

      <form onSubmit={handleSubmit}>
        <input
          placeholder="Email"
          id="email"
          type="email"
          name="email"
          required
          onChange={(e) => verifyEmail(e.target.value)}
        />

        <ValidationError prefix="Email" field="email" errors={state.errors} />

        <textarea
          required
          placeholder="Send a message to get started."
          id="message"
          name="message"
          onChange={(e) => setMessage(e.target.value)}
        />

        <ValidationError
          prefix="Message"
          field="message"
          errors={state.errors}
        />

        {/* ✅ reCAPTCHA v2 checkbox */}
        <ReCAPTCHA
          sitekey={process.env.REACT_APP_RECAPTCHA_SITE_KEY!}
          onChange={(token) => {
            setCaptchaToken(token)
            setIsHuman(!!token)
          }}
          onExpired={() => {
            setCaptchaToken(null)
            setIsHuman(false)
          }}
        />

        <button
          type="submit"
          disabled={
            state.submitting ||
            !validEmail ||
            !message ||
            !isHuman ||
            !captchaToken
          }
        >
          {state.submitting ? 'Sending...' : 'Submit'}
        </button>
      </form>

      <ToastContainer />
    </Container>
  )
}
