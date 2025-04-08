"use client"

import type React from "react"

import { useState } from "react"
import ReCAPTCHA from "react-google-recaptcha"

const RECAPTCHA_SITE_KEY = "6LcqgpApAAAAAGC_BqoQtYx6H2W8tHqgRyiM_a4I" // Replace with your actual site key

export default function Contact() {
  const [formData, setFormData] = useState({
    fullName: "",
    email: "",
    company: "",
    subject: "",
    message: "",
  })
  const [captchaToken, setCaptchaToken] = useState<string | null>(null)

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target
    setFormData((prevState) => ({
      ...prevState,
      [name]: value,
    }))
  }

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()
    if (!captchaToken) {
      alert("Please complete the reCAPTCHA")
      return
    }

    try {
      // Here you would typically send the form data to your backend
      const response = await fetch("/api/contact", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          ...formData,
          captchaToken,
        }),
      })

      if (response.ok) {
        setFormData({
          fullName: "",
          email: "",
          company: "",
          subject: "",
          message: "",
        })
        setCaptchaToken(null)
        alert("Message sent successfully!")
      } else {
        throw new Error("Failed to send message")
      }
    } catch (error) {
      alert("Failed to send message. Please try again.")
    }
  }

  return (
    <div className="max-w-4xl mx-auto px-4 py-8">
      <h1 className="text-4xl font-bold mb-8 text-center heading-special bg-clip-text text-transparent bg-gradient-to-r from-pink-500 to-purple-400">
        Do I Wanna Know?
      </h1>
      <div className="grid md:grid-cols-2 gap-8">
        <div className="text-foreground">
          <h2 className="text-2xl font-semibold mb-4">Contact Information</h2>
          <p className="mb-2">Johncarlo Ababa</p>
          <p className="mb-2">+639-995-526-4668</p>
          <p className="mb-2">itsmejesse@jcababa.me</p>
          <p>Kalaoman Street, Poblacion Talibon, Bohol 6325</p>
        </div>
        <form onSubmit={handleSubmit} className="space-y-4">
          <input
            type="text"
            name="fullName"
            value={formData.fullName}
            onChange={handleChange}
            placeholder="FULL NAME"
            className="w-full p-2 border border-input rounded bg-background text-foreground"
            required
          />
          <input
            type="email"
            name="email"
            value={formData.email}
            onChange={handleChange}
            placeholder="EMAIL"
            className="w-full p-2 border border-input rounded bg-background text-foreground"
            required
          />
          <input
            type="text"
            name="company"
            value={formData.company}
            onChange={handleChange}
            placeholder="COMPANY"
            className="w-full p-2 border border-input rounded bg-background text-foreground"
          />
          <input
            type="text"
            name="subject"
            value={formData.subject}
            onChange={handleChange}
            placeholder="SUBJECT"
            className="w-full p-2 border border-input rounded bg-background text-foreground"
            required
          />
          <textarea
            name="message"
            value={formData.message}
            onChange={handleChange}
            placeholder="MESSAGE"
            className="w-full p-2 border border-input rounded bg-background text-foreground h-32"
            required
          />
          <div className="flex justify-center">
            <ReCAPTCHA sitekey={RECAPTCHA_SITE_KEY} onChange={(token) => setCaptchaToken(token)} theme="dark" />
          </div>
          <button
            type="submit"
            className="w-full bg-purple-600 text-white py-2 rounded hover:bg-purple-700 transition-colors duration-300"
            disabled={!captchaToken}
          >
            Commit
          </button>
        </form>
      </div>
    </div>
  )
}

