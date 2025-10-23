# 🎨 CUSTOMIZATION GUIDE

This guide will help you personalize your portfolio with your own information.

---

## 📝 Quick Customizations

### 1. Update Profile Picture

**Current**: Showing placeholder with initial "A"

**To Update**:
1. Add your photo to `public/images/profile.jpg`
2. Open `components/Hero.tsx`
3. Find line ~16 (the placeholder div)
4. Replace with:
```tsx
<img 
  src="/images/profile.jpg" 
  alt="Anik Khandoker" 
  className="w-full h-full object-cover"
/>
```

---

### 2. Update Current Status

**File**: `components/Hero.tsx` (line ~36)

**Change**:
```tsx
<p className="text-lg text-text-tertiary mt-4">
  <span className="font-semibold text-midnight-indigo-light">Currently:</span> 
  YOUR_CURRENT_STATUS_HERE
</p>
```

---

### 3. Add New Projects

**File**: `components/Projects.tsx`

**Add to the `projects` array** (line ~3):
```tsx
{
  title: 'Your New Project',
  status: 'Live', // or 'In Development', 'Completed', 'Research'
  statusColor: 'bg-green-500', // color for the badge
  liveUrl: 'https://yourproject.com', // optional
  description: 'Brief description of your project',
  features: [
    'Feature 1',
    'Feature 2',
    'Feature 3'
  ],
  tech: ['React', 'Node.js', 'MongoDB'], // tech stack
  duration: 'Month Year - Present'
}
```

---

### 4. Update Skills

**File**: `components/Skills.tsx`

**Modify skill levels** (line ~6-58):
```tsx
{ name: 'Your Skill', level: 85 } // level 0-100
```

**Add new skill category**:
```tsx
{
  title: 'Your Category',
  skills: [
    { name: 'Skill 1', level: 80 },
    { name: 'Skill 2', level: 75 }
  ]
}
```

---

### 5. Update Contact Info

**File**: `components/Contact.tsx`

**Change email** (line ~16):
```tsx
<a href="mailto:YOUR_EMAIL@gmail.com" ...>
```

**Change phone** (line ~27):
```tsx
<a href="tel:+YOUR_PHONE_NUMBER" ...>
```

**Change location** (line ~42):
```tsx
<p className="text-text-secondary text-sm">
  Your Address<br />Your City, Your Country
</p>
```

**Update social links** (line ~55-80):
```tsx
<a href="https://github.com/YOUR_USERNAME" ...>
<a href="https://linkedin.com/in/YOUR_PROFILE" ...>
```

---

### 6. Update About Section

**File**: `components/About.tsx`

**Change bio paragraphs** (line ~21-44)
**Add/Remove interests** (line ~13)
**Modify "What I Do"** (line ~4-11)

---

### 7. Add Your CV

**Steps**:
1. Create folder: `public/cv/`
2. Add your CV: `public/cv/Anik_CV.pdf`
3. Update link in `components/Hero.tsx` (line ~58):
```tsx
<a href="/cv/YOUR_CV_FILENAME.pdf" download className="btn-secondary">
```

---

## 🎨 Theme Customization

### Change Colors

**File**: `tailwind.config.ts`

```typescript
colors: {
  midnight: {
    base: '#000000',      // Background
    indigo: '#6366f1',    // Primary color
    'indigo-light': '#818cf8',  // Secondary
    'indigo-pale': '#a5b4fc',   // Accent
  }
}
```

### Change Fonts

**File**: `app/globals.css` (line ~10)

```css
body {
  font-family: 'Your Font', sans-serif;
}
```

---

## 📱 Add More Sections

### Example: Add Testimonials Section

1. Create `components/Testimonials.tsx`:
```tsx
export default function Testimonials() {
  return (
    <section id="testimonials" className="py-20 px-6">
      <div className="container mx-auto max-w-6xl">
        <h2 className="section-title text-center mb-12">
          Testimonials
        </h2>
        {/* Add your testimonials here */}
      </div>
    </section>
  )
}
```

2. Add to `app/page.tsx`:
```tsx
import Testimonials from '@/components/Testimonials'

// Add in the return:
<Testimonials />
```

3. Add to navigation in `components/Navigation.tsx`:
```tsx
<a href="#testimonials">Testimonials</a>
```

---

## 🔧 Advanced Customizations

### Add Animations

Install Framer Motion (already included):
```powershell
# Already installed!
```

Use in components:
```tsx
import { motion } from 'framer-motion'

<motion.div
  initial={{ opacity: 0, y: 20 }}
  animate={{ opacity: 1, y: 0 }}
  transition={{ duration: 0.5 }}
>
  Your content
</motion.div>
```

### Add More Blog Features

**File**: `lib/blogStorage.ts`

Add tags, categories, or other metadata to blog posts:
```typescript
export interface BlogPost {
  id: string
  title: string
  content: string
  excerpt: string
  createdAt: string
  updatedAt: string
  published: boolean
  tags?: string[]  // Add this
  category?: string // Add this
}
```

---

## 🎯 SEO Optimization

**File**: `app/layout.tsx`

Update metadata:
```tsx
export const metadata: Metadata = {
  title: 'Your Name - Your Title',
  description: 'Your custom description',
  keywords: ['Your', 'Keywords', 'Here'],
}
```

Add Open Graph image:
1. Add image to `public/og-image.jpg`
2. Update metadata:
```tsx
openGraph: {
  images: ['/og-image.jpg'],
}
```

---

## 📊 Add Analytics

### Google Analytics
1. Get your GA tracking ID
2. Create `components/GoogleAnalytics.tsx`:
```tsx
import Script from 'next/script'

export default function GoogleAnalytics({ gaId }: { gaId: string }) {
  return (
    <>
      <Script src={`https://www.googletagmanager.com/gtag/js?id=${gaId}`} />
      <Script id="google-analytics">
        {`
          window.dataLayer = window.dataLayer || [];
          function gtag(){dataLayer.push(arguments);}
          gtag('js', new Date());
          gtag('config', '${gaId}');
        `}
      </Script>
    </>
  )
}
```
3. Add to `app/layout.tsx`

---

## 🌍 Multi-language Support

Create language files:
```
lib/
  i18n/
    en.json
    bn.json (for Bengali)
```

Use in components:
```tsx
import en from '@/lib/i18n/en.json'

const t = en // or your language selector

<h1>{t.hero.title}</h1>
```

---

## 💾 Backup Your Content

### Export Blog Posts
Add to `lib/blogStorage.ts`:
```typescript
export function exportPosts(): string {
  const posts = getBlogPosts(true)
  return JSON.stringify(posts, null, 2)
}
```

### Import Blog Posts
```typescript
export function importPosts(jsonData: string): boolean {
  try {
    const posts = JSON.parse(jsonData)
    localStorage.setItem(STORAGE_KEYS.POSTS, JSON.stringify(posts))
    return true
  } catch {
    return false
  }
}
```

---

## 🚀 Performance Tips

1. **Optimize Images**: Use Next.js Image component
2. **Lazy Load**: Load components when needed
3. **Minimize Bundle**: Remove unused dependencies
4. **Cache**: Use proper caching headers
5. **Compress**: Enable compression on server

---

## 📱 Mobile Optimization

The portfolio is already responsive, but you can:

1. Test on different devices
2. Adjust breakpoints in Tailwind config
3. Add mobile-specific features
4. Optimize touch interactions

---

## 🔒 Security Improvements

For production blog:

1. **Use Backend**: Implement API routes
2. **Hash Passwords**: Use bcrypt properly
3. **Add HTTPS**: Enable SSL/TLS
4. **Rate Limiting**: Prevent brute force
5. **Input Validation**: Sanitize user input

---

## ✅ Pre-Deployment Checklist

- [ ] Update all personal information
- [ ] Add your profile picture
- [ ] Upload your CV
- [ ] Change default blog password
- [ ] Test all links
- [ ] Test on mobile devices
- [ ] Optimize images
- [ ] Add analytics
- [ ] Set up custom domain
- [ ] Test contact form (if added)

---

## 🎉 You're Ready!

Make these changes, refresh your browser, and see your personalized portfolio come to life!

For more help, check:
- README.md - Full documentation
- QUICK_START.md - Getting started guide
