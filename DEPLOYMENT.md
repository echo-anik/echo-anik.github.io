# Deployment Guide for GitHub Pages

## Repository Setup

Your portfolio will be deployed at: **https://echo-anik.github.io**

## Initial Setup Steps

### 1. Initialize Git Repository (if not already done)
```bash
cd "d:\FALL 2025\portfolio"
git init
git add .
git commit -m "Initial commit: Portfolio with Next.js"
```

### 2. Add Remote Repository
```bash
git remote add origin https://github.com/echo-anik/echo-anik.github.io.git
```

### 3. Push to GitHub
```bash
git branch -M main
git push -u origin main
```

### 4. Configure GitHub Pages
1. Go to your repository: https://github.com/echo-anik/echo-anik.github.io
2. Click on **Settings** → **Pages**
3. Under **Source**, select:
   - Source: **GitHub Actions**
4. The workflow will automatically trigger and deploy your site

## Automatic Deployment

Once set up, every time you push to the `main` branch, GitHub Actions will:
1. Build your Next.js application
2. Export it as static files
3. Deploy to GitHub Pages

## Manual Deployment

To manually trigger deployment:
1. Go to **Actions** tab in your repository
2. Click on "Deploy to GitHub Pages" workflow
3. Click "Run workflow"

## Local Build Test

Before pushing, test the build locally:
```bash
npm run build
```

This will create an `out` folder with your static site.

## Important Notes

- **Blog Storage**: Currently uses localStorage, which is client-side only
  - Blog posts will be stored in each user's browser
  - Consider using a backend service (like Supabase, Firebase) for persistent blog data
  
- **CV File**: Make sure `public/cv/Anik_CV.pdf` exists before deployment

- **Images**: Your profile photo at `public/profile.jpg` will be included

## Troubleshooting

### Build fails:
- Check the Actions tab for error logs
- Ensure all dependencies are in package.json
- Test `npm run build` locally first

### 404 errors:
- Ensure `.nojekyll` file exists in public folder
- Check that `output: 'export'` is in next.config.js

### Images not loading:
- Verify images are in the `public` folder
- Use paths like `/profile.jpg` (not `./profile.jpg`)

## Future Enhancements

Consider these upgrades for production:
1. Add a proper backend for blog management (Supabase, Firebase, or a CMS)
2. Set up analytics (Google Analytics, Vercel Analytics)
3. Add a contact form backend (Formspree, EmailJS)
4. Implement proper authentication for blog admin

## Your Portfolio URL
After deployment: **https://echo-anik.github.io**

Deployment usually takes 2-5 minutes after pushing to main branch.
