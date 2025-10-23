import { BlogPost } from '@/types/blog'

// Local storage keys
const STORAGE_KEYS = {
  POSTS: 'blog_posts',
  PASSWORD: 'blog_password',
}

// Default password (hashed version will be stored)
const DEFAULT_PASSWORD = 'admin123'

// Simple hash function (in production, use bcrypt)
function hashPassword(password: string): string {
  // Simple hash for demo - use bcrypt in production
  return btoa(password)
}

function verifyPassword(password: string, hash: string): boolean {
  return hashPassword(password) === hash
}

// Initialize password on first load
export function initializePassword(): void {
  if (typeof window === 'undefined') return
  
  const stored = localStorage.getItem(STORAGE_KEYS.PASSWORD)
  if (!stored) {
    localStorage.setItem(STORAGE_KEYS.PASSWORD, hashPassword(DEFAULT_PASSWORD))
  }
}

// Password management
export function checkPassword(password: string): boolean {
  if (typeof window === 'undefined') return false
  
  const storedHash = localStorage.getItem(STORAGE_KEYS.PASSWORD)
  if (!storedHash) {
    initializePassword()
    return checkPassword(password)
  }
  
  return verifyPassword(password, storedHash)
}

export function changePassword(oldPassword: string, newPassword: string): boolean {
  if (typeof window === 'undefined') return false
  
  if (!checkPassword(oldPassword)) {
    return false
  }
  
  localStorage.setItem(STORAGE_KEYS.PASSWORD, hashPassword(newPassword))
  return true
}

// Blog post management
export function getBlogPosts(includeUnpublished: boolean = false): BlogPost[] {
  if (typeof window === 'undefined') return []
  
  const stored = localStorage.getItem(STORAGE_KEYS.POSTS)
  if (!stored) return []
  
  const posts: BlogPost[] = JSON.parse(stored)
  
  if (includeUnpublished) {
    return posts
  }
  
  return posts.filter(post => post.published)
}

export function getBlogPost(id: string): BlogPost | null {
  const posts = getBlogPosts(true)
  return posts.find(post => post.id === id) || null
}

export function createBlogPost(post: Omit<BlogPost, 'id' | 'createdAt' | 'updatedAt'>): BlogPost {
  if (typeof window === 'undefined') throw new Error('Cannot create post on server')
  
  const newPost: BlogPost = {
    ...post,
    id: Date.now().toString(),
    createdAt: new Date().toISOString(),
    updatedAt: new Date().toISOString(),
  }
  
  const posts = getBlogPosts(true)
  posts.unshift(newPost)
  localStorage.setItem(STORAGE_KEYS.POSTS, JSON.stringify(posts))
  
  return newPost
}

export function updateBlogPost(id: string, updates: Partial<BlogPost>): BlogPost | null {
  if (typeof window === 'undefined') return null
  
  const posts = getBlogPosts(true)
  const index = posts.findIndex(post => post.id === id)
  
  if (index === -1) return null
  
  posts[index] = {
    ...posts[index],
    ...updates,
    updatedAt: new Date().toISOString(),
  }
  
  localStorage.setItem(STORAGE_KEYS.POSTS, JSON.stringify(posts))
  return posts[index]
}

export function deleteBlogPost(id: string): boolean {
  if (typeof window === 'undefined') return false
  
  const posts = getBlogPosts(true)
  const filtered = posts.filter(post => post.id !== id)
  
  if (filtered.length === posts.length) return false
  
  localStorage.setItem(STORAGE_KEYS.POSTS, JSON.stringify(filtered))
  return true
}
