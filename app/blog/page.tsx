'use client'

import { useEffect, useState } from 'react'
import Link from 'next/link'
import { getBlogPosts } from '@/lib/blogStorage'
import { BlogPost } from '@/types/blog'

export default function BlogPage() {
  const [posts, setPosts] = useState<BlogPost[]>([])

  useEffect(() => {
    setPosts(getBlogPosts(false))
  }, [])

  return (
    <div className="min-h-screen midnight-bg pt-20">
      <nav className="fixed top-0 left-0 right-0 z-50 bg-midnight-base/80 backdrop-blur-md border-b border-midnight-indigo/30 shadow-lg">
        <div className="container mx-auto px-6 py-4">
          <div className="flex flex-wrap justify-between items-center gap-4">
            <Link href="/" className="text-2xl font-bold gradient-text">
              Anik.dev
            </Link>
            <div className="flex flex-wrap gap-4">
              <Link href="/" className="text-text-secondary hover:text-midnight-indigo-light transition-colors inline-flex items-center">
                ← Back to Portfolio
              </Link>
              <Link href="/blog/admin" className="btn-primary inline-block">
                Admin Login
              </Link>
            </div>
          </div>
        </div>
      </nav>

      <main className="container mx-auto px-6 py-12 max-w-6xl relative z-10">
        <h1 className="section-title text-center mb-12">Blog</h1>

        {posts.length === 0 ? (
          <div className="card text-center py-12">
            <p className="text-2xl text-text-tertiary mb-4">No blog posts yet</p>
            <p className="text-text-secondary">Check back soon for updates!</p>
          </div>
        ) : (
          <div className="space-y-8">
            {posts.map((post) => (
              <article key={post.id} className="card">
                <h2 className="text-3xl font-bold text-text-primary mb-3">
                  {post.title}
                </h2>
                
                <p className="text-sm text-text-tertiary mb-4">
                  {new Date(post.createdAt).toLocaleDateString('en-US', {
                    year: 'numeric',
                    month: 'long',
                    day: 'numeric'
                  })}
                </p>

                <p className="text-lg text-text-secondary mb-6 leading-relaxed">
                  {post.excerpt}
                </p>

                <div className="prose prose-invert max-w-none">
                  {post.content.split('\n\n').map((paragraph, idx) => (
                    <p key={idx} className="mb-4 text-text-secondary">
                      {paragraph}
                    </p>
                  ))}
                </div>
              </article>
            ))}
          </div>
        )}
      </main>
    </div>
  )
}
