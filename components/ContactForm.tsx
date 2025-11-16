'use client'

import { useState } from 'react'
import { FaPaperPlane } from 'react-icons/fa'
import { saveMessage } from '@/lib/messageStorage'

export default function ContactForm() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    message: ''
  })
  const [status, setStatus] = useState<'idle' | 'sending' | 'success' | 'error'>('idle')

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()
    setStatus('sending')

    // Save message to local storage
    try {
      saveMessage(formData.name, formData.email, formData.message)
      setStatus('success')
      setFormData({ name: '', email: '', message: '' })
      setTimeout(() => setStatus('idle'), 5000)
    } catch (error) {
      setStatus('error')
      setTimeout(() => setStatus('idle'), 5000)
    }
  }

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    })
  }

  return (
    <div className="card max-w-2xl mx-auto mt-12">
      <div className="text-center mb-8">
        <h3 className="text-3xl font-bold text-text-primary mb-3">Send Me a Message</h3>
        <p className="text-text-secondary">
          Got a question or want to work together? Drop me a message!
        </p>
      </div>

      <form onSubmit={handleSubmit} className="space-y-6">
        <div>
          <label htmlFor="name" className="block text-sm font-semibold text-text-primary mb-2">
            Your Name *
          </label>
          <input
            type="text"
            id="name"
            name="name"
            value={formData.name}
            onChange={handleChange}
            required
            className="w-full px-4 py-3 rounded-lg bg-midnight-ocean/20 border border-midnight-indigo/30 text-text-primary placeholder-text-tertiary focus:outline-none focus:border-midnight-indigo-light focus:ring-2 focus:ring-midnight-indigo/20 transition-all"
            placeholder="John Doe"
          />
        </div>

        <div>
          <label htmlFor="email" className="block text-sm font-semibold text-text-primary mb-2">
            Your Email *
          </label>
          <input
            type="email"
            id="email"
            name="email"
            value={formData.email}
            onChange={handleChange}
            required
            className="w-full px-4 py-3 rounded-lg bg-midnight-ocean/20 border border-midnight-indigo/30 text-text-primary placeholder-text-tertiary focus:outline-none focus:border-midnight-indigo-light focus:ring-2 focus:ring-midnight-indigo/20 transition-all"
            placeholder="john@example.com"
          />
        </div>

        <div>
          <label htmlFor="message" className="block text-sm font-semibold text-text-primary mb-2">
            Your Message *
          </label>
          <textarea
            id="message"
            name="message"
            value={formData.message}
            onChange={handleChange}
            required
            rows={6}
            className="w-full px-4 py-3 rounded-lg bg-midnight-ocean/20 border border-midnight-indigo/30 text-text-primary placeholder-text-tertiary focus:outline-none focus:border-midnight-indigo-light focus:ring-2 focus:ring-midnight-indigo/20 transition-all resize-none"
            placeholder="Tell me about your project or idea..."
          />
        </div>

        <button
          type="submit"
          disabled={status === 'sending'}
          className="w-full btn-primary flex items-center justify-center gap-3 disabled:opacity-50 disabled:cursor-not-allowed"
        >
          {status === 'sending' ? (
            <>
              <div className="animate-spin rounded-full h-5 w-5 border-b-2 border-white"></div>
              Sending...
            </>
          ) : status === 'success' ? (
            <>
              ✓ Message Sent!
            </>
          ) : status === 'error' ? (
            <>
              ✗ Failed to Send
            </>
          ) : (
            <>
              <FaPaperPlane />
              Send Message
            </>
          )}
        </button>

        {status === 'success' && (
          <div className="text-center p-4 bg-green-500/10 border border-green-500/30 rounded-lg">
            <p className="text-green-400 font-semibold">
              Message sent successfully! I'll get back to you soon.
            </p>
          </div>
        )}

        {status === 'error' && (
          <div className="text-center p-4 bg-red-500/10 border border-red-500/30 rounded-lg">
            <p className="text-red-400 font-semibold">
              Oops! Something went wrong. Please try again or email me directly.
            </p>
          </div>
        )}
      </form>
    </div>
  )
}
