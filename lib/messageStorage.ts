// Local message storage utility
export interface Message {
  id: string
  name: string
  email: string
  message: string
  timestamp: string
  read: boolean
}

const STORAGE_KEY = 'portfolio_messages'

export function saveMessage(name: string, email: string, message: string): void {
  const messages = getMessages()
  const newMessage: Message = {
    id: Date.now().toString(),
    name,
    email,
    message,
    timestamp: new Date().toISOString(),
    read: false
  }
  messages.unshift(newMessage)
  localStorage.setItem(STORAGE_KEY, JSON.stringify(messages))
}

export function getMessages(): Message[] {
  if (typeof window === 'undefined') return []
  const stored = localStorage.getItem(STORAGE_KEY)
  return stored ? JSON.parse(stored) : []
}

export function markAsRead(id: string): void {
  const messages = getMessages()
  const message = messages.find(m => m.id === id)
  if (message) {
    message.read = true
    localStorage.setItem(STORAGE_KEY, JSON.stringify(messages))
  }
}

export function deleteMessage(id: string): void {
  const messages = getMessages().filter(m => m.id !== id)
  localStorage.setItem(STORAGE_KEY, JSON.stringify(messages))
}

export function getUnreadCount(): number {
  return getMessages().filter(m => !m.read).length
}
