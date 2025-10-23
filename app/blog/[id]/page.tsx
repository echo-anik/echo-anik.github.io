'use client'

import { useEffect, useState } from 'react'
import { useParams } from 'next/navigation'
import Link from 'next/link'
import { getBlogPost } from '@/lib/blogStorage'
import { BlogPost } from '@/types/blog'

export default function BlogPostPage() {
  const params = useParams()
  const [post, setPost] = useState<BlogPost | null>(null)

  useEffect(() => {
    if (params.id) {
      setPost(getBlogPost(params.id as string))
    }
  }, [params.id])

  if (!post) {
    return (
      <div className="min-h-screen midnight-bg pt-20">
        <div className="container mx-auto px-6 py-12 max-w-4xl relative z-10">
          <div className="card text-center py-12">
            <p className="text-2xl text-text-tertiary mb-4">Post not found</p>
            <Link href="/blog" className="btn-primary inline-block">
              ← Back to Blog
            </Link>
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
              Anik.dev
            </Link>
            <Link href="/blog" className="text-text-secondary hover:text-midnight-indigo-light transition-colors inline-flex items-center">
              ← Back to Blog
            </Link>
          </div>
        </div>
      </nav>

      <main className="container mx-auto px-6 py-12 max-w-4xl relative z-10">
        <article className="card">
          <h1 className="text-4xl md:text-5xl font-bold text-text-primary mb-4">
            {post.title}
          </h1>

          <p className="text-sm text-text-tertiary mb-8">
            Published on {new Date(post.createdAt).toLocaleDateString('en-US', {
              year: 'numeric',
              month: 'long',
              day: 'numeric'
            })}
            {post.updatedAt !== post.createdAt && (
              <span className="ml-4">
                (Updated on {new Date(post.updatedAt).toLocaleDateString('en-US', {
                  year: 'numeric',
                  month: 'long',
                  day: 'numeric'
                })})
              </span>
            )}
          </p>

          <div 
            className="prose prose-invert max-w-none"
            style={{
              color: 'var(--text-secondary)',
              lineHeight: '1.8'
            }}
          >
            {post.content.split('\n').map((paragraph, index) => (
              <p key={index} className="mb-4 text-lg text-text-secondary">
                {paragraph}
              </p>
            ))}
          </div>
        </article>
      </main>
    </div>
  )
}
