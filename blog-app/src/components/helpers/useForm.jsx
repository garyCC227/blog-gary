import { useState, useEffect, useCallback } from 'react'

const useForm = () => {
  const [submitting, setSubmitting] = useState(false)
  const [submitted, setSubmitted] = useState(false)
  const [values, setValues] = useState({})
  const [success, setSuccess] = useState(false)

  const handleSubmit = e => {
    e.preventDefault()
    setSubmitting(true)
    const data = new FormData(e.target)
    const newValues = {}
    for (var pair of data.entries()) {
      newValues[pair[0]] = pair[1]
    }
    setValues(newValues)
    setSubmitted(true)
  }

  const sendValues = useCallback(() => {
    /**
     * Code for submitting form values
     * via an external API goes here.
     */
    setTimeout(function() {
      console.log(values)
      setSuccess(true)
      setSubmitting(false)
    }, 2000)
  }, [values])

  useEffect(() => {
    if (submitted) {
      sendValues()
    }
  }, [submitted, sendValues])

  return {
    handleSubmit,
    submitting,
    submitted,
    success
  }
}

export default useForm
