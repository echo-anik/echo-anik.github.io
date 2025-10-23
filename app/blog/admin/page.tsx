'use client'

import { useEffect, useState } from 'react'
import { useRouter } from 'next/navigation'
import Link from 'next/link'
import { 
  checkPassword, 
  changePassword, 
  getBlogPosts, 
  createBlogPost, 
  updateBlogPost, 
  deleteBlogPost,
  initializePassword 
} from '@/lib/blogStorage'
import { BlogPost } from '@/types/blog'

export default function AdminPage() {
  const router = useRouter()
  const [isAuthenticated, setIsAuthenticated] = useState(false)
  const [password, setPassword] = useState('')
  const [error, setError] = useState('')
  const [posts, setPosts] = useState<BlogPost[]>([])
  const [showEditor, setShowEditor] = useState(false)
  const [showSettings, setShowSettings] = useState(false)
  const [editingPost, setEditingPost] = useState<BlogPost | null>(null)

  // Form states
  const [title, setTitle] = useState('')
  const [excerpt, setExcerpt] = useState('')
  const [content, setContent] = useState('')
  const [published, setPublished] = useState(true)

  // Settings states
  const [oldPassword, setOldPassword] = useState('')
  const [newPassword, setNewPassword] = useState('')
  const [confirmPassword, setConfirmPassword] = useState('')
  const [settingsError, setSettingsError] = useState('')
  const [settingsSuccess, setSettingsSuccess] = useState('')

  useEffect(() => {
    initializePassword()
  }, [])

  useEffect(() => {
    if (isAuthenticated) {
      loadPosts()
    }
  }, [isAuthenticated])

  const loadPosts = () => {
    setPosts(getBlogPosts(true))
  }

  const handleLogin = (e: React.FormEvent) => {
    e.preventDefault()
    setError('')

    if (checkPassword(password)) {
      setIsAuthenticated(true)
      setPassword('')
    } else {
      setError('Invalid password')
    }
  }

  const handleLogout = () => {
    setIsAuthenticated(false)
    setShowEditor(false)
    setShowSettings(false)
    setEditingPost(null)
  }

  const handleNewPost = () => {
    setEditingPost(null)
    setTitle('')
    setExcerpt('')
    setContent('')
    setPublished(true)
    setShowEditor(true)
    setShowSettings(false)
  }

  const handleEditPost = (post: BlogPost) => {
    setEditingPost(post)
    setTitle(post.title)
    setExcerpt(post.excerpt)
    setContent(post.content)
    setPublished(post.published)
    setShowEditor(true)
    setShowSettings(false)
  }

  const handleSavePost = (e: React.FormEvent) => {
    e.preventDefault()

    if (editingPost) {
      updateBlogPost(editingPost.id, { title, excerpt, content, published })
    } else {
      createBlogPost({ title, excerpt, content, published })
    }

    loadPosts()
    setShowEditor(false)
    setEditingPost(null)
  }

  const handleDeletePost = (id: string) => {
    if (confirm('Are you sure you want to delete this post?')) {
      deleteBlogPost(id)
      loadPosts()
    }
  }

  const handleChangePassword = (e: React.FormEvent) => {
    e.preventDefault()
    setSettingsError('')
    setSettingsSuccess('')

    if (newPassword !== confirmPassword) {
      setSettingsError('New passwords do not match')
      return
    }

    if (newPassword.length < 6) {
      setSettingsError('New password must be at least 6 characters')
      return
    }

    if (changePassword(oldPassword, newPassword)) {
      setSettingsSuccess('Password changed successfully!')
      setOldPassword('')
      setNewPassword('')
      setConfirmPassword('')
    } else {
      setSettingsError('Current password is incorrect')
    }
  }

  if (!isAuthenticated) {
    return (
      <div className="min-h-screen midnight-bg flex items-center justify-center px-6 pt-20">
        <div className="card max-w-md w-full relative z-10">
          <h1 className="text-3xl font-bold gradient-text mb-8 text-center">Blog Admin Login</h1>

          <form onSubmit={handleLogin} className="space-y-6">
            <div>
              <label className="block text-text-secondary mb-2 font-semibold">Password</label>
              <input
                type="password"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                className="w-full px-4 py-3 bg-midnight-indigo/10 border border-midnight-indigo/30 rounded-lg text-text-primary focus:outline-none focus:border-midnight-indigo-light transition-colors"
                placeholder="Enter admin password"
                required
              />
            </div>

            {error && (
              <div className="bg-red-500/10 border border-red-500/30 rounded-lg px-4 py-3 text-red-400">
                {error}
              </div>
            )}

            <button type="submit" className="btn-primary w-full">
              Login
            </button>

            <div className="text-center">
              <Link href="/blog" className="text-text-tertiary hover:text-midnight-indigo-light transition-colors">
                ← Back to Blog
              </Link>
            </div>
          </form>

          <div className="mt-6 pt-6 border-t border-midnight-indigo/30">
            <p className="text-sm text-text-tertiary text-center">
              Default password: <code className="bg-midnight-indigo/20 px-2 py-1 rounded">admin123</code>
            </p>
            <p className="text-xs text-text-muted text-center mt-2">
              (You can change this in settings after logging in)
            </p>
          </div>
        </div>
      </div>
    )
  }

  return (
    <div className="min-h-screen midnight-bg pt-20">
      <nav className="fixed top-0 left-0 right-0 z-50 bg-midnight-base/80 backdrop-blur-md border-b border-midnight-indigo/30 shadow-lg">
        <div className="container mx-auto px-6 py-4">
          <div className="flex flex-wrap justify-between items-center gap-4">
            <Link href="/" className="text-2xl font-bold gradient-text">
              Anik.dev - Admin
            </Link>
            <div className="flex flex-wrap gap-4">
              <button
                onClick={() => {
                  setShowEditor(false)
                  setShowSettings(false)
                }}
                className="text-text-secondary hover:text-midnight-indigo-light transition-colors"
              >
                Dashboard
              </button>
              <button
                onClick={() => {
                  setShowSettings(true)
                  setShowEditor(false)
                }}
                className="text-text-secondary hover:text-midnight-indigo-light transition-colors"
              >
                Settings
              </button>
              <Link href="/blog" className="text-text-secondary hover:text-midnight-indigo-light transition-colors inline-flex items-center">
                View Blog
              </Link>
              <button onClick={handleLogout} className="btn-secondary inline-block">
                Logout
              </button>
            </div>
          </div>
        </div>
      </nav>

      <main className="container mx-auto px-6 py-12 max-w-6xl relative z-10">
        {showSettings ? (
          <div className="max-w-2xl mx-auto">
            <h2 className="text-4xl font-bold text-text-primary mb-8">Settings</h2>

            <div className="card">
              <h3 className="text-2xl font-bold text-midnight-indigo-light mb-6">Change Password</h3>

              <form onSubmit={handleChangePassword} className="space-y-4">
                <div>
                  <label className="block text-text-secondary mb-2 font-semibold">Current Password</label>
                  <input
                    type="password"
                    value={oldPassword}
                    onChange={(e) => setOldPassword(e.target.value)}
                    className="w-full px-4 py-3 bg-midnight-indigo/10 border border-midnight-indigo/30 rounded-lg text-text-primary focus:outline-none focus:border-midnight-indigo-light"
                    required
                  />
                </div>

                <div>
                  <label className="block text-text-secondary mb-2 font-semibold">New Password</label>
                  <input
                    type="password"
                    value={newPassword}
                    onChange={(e) => setNewPassword(e.target.value)}
                    className="w-full px-4 py-3 bg-midnight-indigo/10 border border-midnight-indigo/30 rounded-lg text-text-primary focus:outline-none focus:border-midnight-indigo-light"
                    required
                    minLength={6}
                  />
                </div>

                <div>
                  <label className="block text-text-secondary mb-2 font-semibold">Confirm New Password</label>
                  <input
                    type="password"
                    value={confirmPassword}
                    onChange={(e) => setConfirmPassword(e.target.value)}
                    className="w-full px-4 py-3 bg-midnight-indigo/10 border border-midnight-indigo/30 rounded-lg text-text-primary focus:outline-none focus:border-midnight-indigo-light"
                    required
                    minLength={6}
                  />
                </div>

                {settingsError && (
                  <div className="bg-red-500/10 border border-red-500/30 rounded-lg px-4 py-3 text-red-400">
                    {settingsError}
                  </div>
                )}

                {settingsSuccess && (
                  <div className="bg-green-500/10 border border-green-500/30 rounded-lg px-4 py-3 text-green-400">
                    {settingsSuccess}
                  </div>
                )}

                <button type="submit" className="btn-primary">
                  Change Password
                </button>
              </form>
            </div>
          </div>
        ) : showEditor ? (
          <div className="max-w-4xl mx-auto">
            <h2 className="text-4xl font-bold text-text-primary mb-8">
              {editingPost ? 'Edit Post' : 'New Post'}
            </h2>

            <form onSubmit={handleSavePost} className="card space-y-6">
              <div>
                <label className="block text-text-secondary mb-2 font-semibold">Title</label>
                <input
                  type="text"
                  value={title}
                  onChange={(e) => setTitle(e.target.value)}
                  className="w-full px-4 py-3 bg-midnight-indigo/10 border border-midnight-indigo/30 rounded-lg text-text-primary focus:outline-none focus:border-midnight-indigo-light"
                  required
                />
              </div>

              <div>
                <label className="block text-text-secondary mb-2 font-semibold">Excerpt</label>
                <textarea
                  value={excerpt}
                  onChange={(e) => setExcerpt(e.target.value)}
                  className="w-full px-4 py-3 bg-midnight-indigo/10 border border-midnight-indigo/30 rounded-lg text-text-primary focus:outline-none focus:border-midnight-indigo-light h-24"
                  required
                />
              </div>

              <div>
                <label className="block text-text-secondary mb-2 font-semibold">Content</label>
                <textarea
                  value={content}
                  onChange={(e) => setContent(e.target.value)}
                  className="w-full px-4 py-3 bg-midnight-indigo/10 border border-midnight-indigo/30 rounded-lg text-text-primary focus:outline-none focus:border-midnight-indigo-light h-96"
                  required
                />
              </div>

              <div className="flex items-center gap-3">
                <input
                  type="checkbox"
                  id="published"
                  checked={published}
                  onChange={(e) => setPublished(e.target.checked)}
                  className="w-5 h-5"
                />
                <label htmlFor="published" className="text-text-secondary font-semibold">
                  Publish immediately
                </label>
              </div>

              <div className="flex gap-4">
                <button type="submit" className="btn-primary">
                  {editingPost ? 'Update Post' : 'Create Post'}
                </button>
                <button
                  type="button"
                  onClick={() => setShowEditor(false)}
                  className="btn-secondary"
                >
                  Cancel
                </button>
              </div>
            </form>
          </div>
        ) : (
          <div>
            <div className="flex justify-between items-center mb-8">
              <h2 className="text-4xl font-bold text-text-primary">All Posts</h2>
              <button onClick={handleNewPost} className="btn-primary">
                + New Post
              </button>
            </div>

            {posts.length === 0 ? (
              <div className="card text-center py-12">
                <p className="text-2xl text-text-tertiary mb-4">No posts yet</p>
                <button onClick={handleNewPost} className="btn-primary">
                  Create Your First Post
                </button>
              </div>
            ) : (
              <div className="grid gap-6">
                {posts.map((post) => (
                  <div key={post.id} className="card">
                    <div className="flex justify-between items-start mb-4">
                      <div>
                        <h3 className="text-2xl font-bold text-text-primary mb-2">{post.title}</h3>
                        <p className="text-sm text-text-tertiary">
                          {new Date(post.createdAt).toLocaleDateString()}
                          {!post.published && (
                            <span className="ml-3 px-2 py-1 bg-yellow-500/20 text-yellow-400 rounded text-xs">
                              Draft
                            </span>
                          )}
                        </p>
                      </div>
                      <div className="flex gap-2">
                        <button
                          onClick={() => handleEditPost(post)}
                          className="px-4 py-2 bg-midnight-indigo/20 text-midnight-indigo-light rounded hover:bg-midnight-indigo/30 transition-colors"
                        >
                          Edit
                        </button>
                        <button
                          onClick={() => handleDeletePost(post.id)}
                          className="px-4 py-2 bg-red-500/20 text-red-400 rounded hover:bg-red-500/30 transition-colors"
                        >
                          Delete
                        </button>
                      </div>
                    </div>
                    <p className="text-text-secondary">{post.excerpt}</p>
                  </div>
                ))}
              </div>
            )}
          </div>
        )}
      </main>
    </div>
  )
}
