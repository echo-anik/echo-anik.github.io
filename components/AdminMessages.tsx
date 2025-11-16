'use client'

import { useState, useEffect } from 'react'
import { getMessages, markAsRead, deleteMessage, type Message } from '@/lib/messageStorage'
import { FaEnvelope, FaEnvelopeOpen, FaTrash, FaClock, FaUser } from 'react-icons/fa'

export default function AdminMessages() {
  const [messages, setMessages] = useState<Message[]>([])
  const [selectedMessage, setSelectedMessage] = useState<Message | null>(null)
  const [isAuthenticated, setIsAuthenticated] = useState(false)
  const [password, setPassword] = useState('')
  const [error, setError] = useState('')

  const ADMIN_PASSWORD = 'Plusmodiumx@1' // Change this to your preferred password

  useEffect(() => {
    if (isAuthenticated) {
      loadMessages()
    }
  }, [isAuthenticated])

  const loadMessages = () => {
    setMessages(getMessages())
  }

  const handleLogin = (e: React.FormEvent) => {
    e.preventDefault()
    if (password === ADMIN_PASSWORD) {
      setIsAuthenticated(true)
      setError('')
    } else {
      setError('Incorrect password')
    }
  }

  const handleMarkAsRead = (id: string) => {
    markAsRead(id)
    loadMessages()
    if (selectedMessage?.id === id) {
      setSelectedMessage({ ...selectedMessage, read: true })
    }
  }

  const handleDelete = (id: string) => {
    if (confirm('Are you sure you want to delete this message?')) {
      deleteMessage(id)
      loadMessages()
      if (selectedMessage?.id === id) {
        setSelectedMessage(null)
      }
    }
  }

  const formatDate = (isoString: string) => {
    return new Date(isoString).toLocaleString('en-US', {
      year: 'numeric',
      month: 'short',
      day: 'numeric',
      hour: '2-digit',
      minute: '2-digit'
    })
  }

  if (!isAuthenticated) {
    return (
      <div className="min-h-screen flex items-center justify-center px-6">
        <div className="card max-w-md w-full">
          <h1 className="text-3xl font-bold text-text-primary mb-6 text-center">Admin Access</h1>
          <form onSubmit={handleLogin} className="space-y-4">
            <div>
              <label htmlFor="password" className="block text-sm font-semibold text-text-primary mb-2">
                Password
              </label>
              <input
                type="password"
                id="password"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                className="w-full px-4 py-3 rounded-lg bg-midnight-ocean/20 border border-midnight-indigo/30 text-text-primary placeholder-text-tertiary focus:outline-none focus:border-midnight-indigo-light focus:ring-2 focus:ring-midnight-indigo/20 transition-all"
                placeholder="Enter admin password"
                autoFocus
              />
              {error && <p className="text-red-400 text-sm mt-2">{error}</p>}
            </div>
            <button type="submit" className="w-full btn-primary">
              Login
            </button>
          </form>
          <p className="text-text-tertiary text-sm text-center mt-4">
            Default password: MIC
          </p>
        </div>
      </div>
    )
  }

  return (
    <div className="min-h-screen py-20 px-6">
      <div className="container mx-auto max-w-7xl">
        <div className="flex justify-between items-center mb-8">
          <h1 className="text-4xl font-bold gradient-text">Message Dashboard</h1>
          <div className="flex items-center gap-4">
            <span className="text-text-secondary">
              {messages.filter(m => !m.read).length} unread
            </span>
            <button
              onClick={() => setIsAuthenticated(false)}
              className="btn-secondary"
            >
              Logout
            </button>
          </div>
        </div>

        {messages.length === 0 ? (
          <div className="card text-center py-12">
            <FaEnvelope className="text-6xl text-text-tertiary mx-auto mb-4" />
            <p className="text-xl text-text-secondary">No messages yet</p>
            <p className="text-text-tertiary mt-2">Messages from your contact form will appear here</p>
          </div>
        ) : (
          <div className="grid lg:grid-cols-2 gap-6">
            {/* Message List */}
            <div className="space-y-4">
              <h2 className="text-2xl font-bold text-text-primary mb-4">Messages ({messages.length})</h2>
              {messages.map((msg) => (
                <div
                  key={msg.id}
                  onClick={() => {
                    setSelectedMessage(msg)
                    if (!msg.read) handleMarkAsRead(msg.id)
                  }}
                  className={`card cursor-pointer transition-all ${
                    selectedMessage?.id === msg.id ? 'border-midnight-indigo-light' : ''
                  } ${!msg.read ? 'bg-midnight-indigo/10' : ''}`}
                >
                  <div className="flex items-start gap-3">
                    <div className="text-2xl text-midnight-indigo-light mt-1">
                      {msg.read ? <FaEnvelopeOpen /> : <FaEnvelope />}
                    </div>
                    <div className="flex-1 min-w-0">
                      <div className="flex items-center gap-2 mb-1">
                        <h3 className="font-semibold text-text-primary truncate">{msg.name}</h3>
                        {!msg.read && (
                          <span className="px-2 py-0.5 text-xs bg-midnight-indigo-light text-white rounded-full">
                            New
                          </span>
                        )}
                      </div>
                      <p className="text-sm text-text-tertiary mb-1 truncate">{msg.email}</p>
                      <p className="text-sm text-text-secondary line-clamp-2">{msg.message}</p>
                      <div className="flex items-center gap-1 text-xs text-text-tertiary mt-2">
                        <FaClock />
                        <span>{formatDate(msg.timestamp)}</span>
                      </div>
                    </div>
                  </div>
                </div>
              ))}
            </div>

            {/* Message Detail */}
            <div className="lg:sticky lg:top-24 h-fit">
              {selectedMessage ? (
                <div className="card">
                  <div className="flex justify-between items-start mb-4">
                    <h2 className="text-2xl font-bold text-text-primary">Message Details</h2>
                    <button
                      onClick={() => handleDelete(selectedMessage.id)}
                      className="text-red-400 hover:text-red-300 transition-colors p-2"
                      title="Delete message"
                    >
                      <FaTrash />
                    </button>
                  </div>
                  
                  <div className="space-y-4">
                    <div>
                      <label className="text-sm text-text-tertiary">From</label>
                      <div className="flex items-center gap-2 mt-1">
                        <FaUser className="text-midnight-indigo-light" />
                        <p className="text-text-primary font-semibold">{selectedMessage.name}</p>
                      </div>
                    </div>

                    <div>
                      <label className="text-sm text-text-tertiary">Email</label>
                      <p className="text-text-primary mt-1">
                        <a
                          href={`mailto:${selectedMessage.email}`}
                          className="text-midnight-indigo-light hover:underline"
                        >
                          {selectedMessage.email}
                        </a>
                      </p>
                    </div>

                    <div>
                      <label className="text-sm text-text-tertiary">Date</label>
                      <div className="flex items-center gap-2 mt-1">
                        <FaClock className="text-midnight-indigo-light" />
                        <p className="text-text-primary">{formatDate(selectedMessage.timestamp)}</p>
                      </div>
                    </div>

                    <div>
                      <label className="text-sm text-text-tertiary">Message</label>
                      <div className="mt-2 p-4 bg-midnight-ocean/20 rounded-lg border border-midnight-indigo/30">
                        <p className="text-text-primary whitespace-pre-wrap">{selectedMessage.message}</p>
                      </div>
                    </div>

                    <div className="pt-4 border-t border-midnight-indigo/30">
                      <a
                        href={`mailto:${selectedMessage.email}?subject=Re: Your message&body=Hi ${selectedMessage.name},%0D%0A%0D%0A`}
                        className="btn-primary w-full text-center inline-block"
                      >
                        Reply via Email
                      </a>
                    </div>
                  </div>
                </div>
              ) : (
                <div className="card text-center py-12">
                  <FaEnvelope className="text-6xl text-text-tertiary mx-auto mb-4" />
                  <p className="text-xl text-text-secondary">Select a message to view details</p>
                </div>
              )}
            </div>
          </div>
        )}
      </div>
    </div>
  )
}
