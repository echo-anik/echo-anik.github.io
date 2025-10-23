# Anik's Portfolio Website

A modern, responsive portfolio website for Khandoker Wahiduzzaman Anik - Full Stack Developer & ML Researcher.

## Features

### ✨ Portfolio Features
- **Responsive Design** - Works perfectly on all devices
- **Midnight Mist Theme** - Beautiful dark theme with gradient accents
- **Project Showcase** - Card-based project display with status badges
- **Skills Section** - Interactive skill bars showing proficiency levels
- **Work Experience** - Timeline-style experience display
- **Education** - Comprehensive educational background
- **Contact Section** - Multiple ways to get in touch

### 📝 Blog System
- **Password-Protected Admin** - Secure admin panel (no email required)
- **Create/Edit/Delete Posts** - Full CRUD functionality
- **Draft/Published Status** - Control post visibility
- **Password Management** - Change admin password from settings
- **Local Storage** - All data stored in browser localStorage

## Tech Stack

- **Framework**: Next.js 14 with App Router
- **Language**: TypeScript
- **Styling**: Tailwind CSS
- **Icons**: React Icons
- **Authentication**: Simple password-based (localStorage)
- **Data Storage**: Browser localStorage

## Getting Started

### Installation

1. **Install Dependencies**
```powershell
cd portfolio
npm install
```

2. **Run Development Server**
```powershell
npm run dev
```

3. **Open in Browser**
Navigate to `http://localhost:3000`

### Build for Production

```powershell
npm run build
npm start
```

## Blog Administration

### Default Credentials
- **Password**: `admin123`
- **Admin URL**: `http://localhost:3000/blog/admin`

### Change Password
1. Login to admin panel
2. Click "Settings" in the navigation
3. Enter current password
4. Enter new password (minimum 6 characters)
5. Confirm new password
6. Click "Change Password"

### Managing Blog Posts

#### Create a New Post
1. Login to admin panel
2. Click "+ New Post"
3. Fill in title, excerpt, and content
4. Check "Publish immediately" to make it live
5. Click "Create Post"

#### Edit a Post
1. Find the post in the admin dashboard
2. Click "Edit" button
3. Modify the content
4. Click "Update Post"

#### Delete a Post
1. Find the post in the admin dashboard
2. Click "Delete" button
3. Confirm deletion

## Project Structure

```
portfolio/
├── app/
│   ├── layout.tsx          # Root layout
│   ├── page.tsx            # Home page
│   ├── globals.css         # Global styles
│   └── blog/
│       ├── page.tsx        # Blog listing
│       ├── [id]/page.tsx   # Individual blog post
│       └── admin/page.tsx  # Admin panel
├── components/
│   ├── Navigation.tsx      # Main navigation
│   ├── Hero.tsx           # Hero section
│   ├── About.tsx          # About section
│   ├── Projects.tsx       # Projects showcase
│   ├── Skills.tsx         # Skills display
│   ├── Experience.tsx     # Work experience
│   ├── Education.tsx      # Education history
│   └── Contact.tsx        # Contact section
├── lib/
│   └── blogStorage.ts     # Blog data management
├── types/
│   └── blog.ts            # TypeScript types
└── public/
    └── cv/                # CV files (add your CV here)
```

## Customization

### Update Personal Information
Edit the content directly in each component file:
- `components/Hero.tsx` - Name, title, current status
- `components/About.tsx` - Bio and interests
- `components/Projects.tsx` - Project details
- `components/Skills.tsx` - Skills and proficiency
- `components/Experience.tsx` - Work history
- `components/Education.tsx` - Educational background
- `components/Contact.tsx` - Contact information

### Change Color Theme
Edit `tailwind.config.ts` and `app/globals.css` to customize the Midnight Mist theme colors.

### Add Your CV
Place your CV file in `public/cv/` folder and update the link in `components/Hero.tsx`.

### Add Profile Picture
Replace the placeholder in `components/Hero.tsx` with your actual profile image.

## Data Storage

The blog system uses browser localStorage for simplicity:
- **Posts**: Stored under key `blog_posts`
- **Password**: Stored under key `blog_password` (hashed)

**Note**: localStorage data is specific to each browser. To persist across devices, consider implementing a backend API.

## Deployment

### Vercel (Recommended)
```powershell
npm install -g vercel
vercel login
vercel
```

### Netlify
```powershell
npm run build
# Upload .next folder to Netlify
```

### Other Platforms
Build the project and deploy the `.next` folder to any Node.js hosting service.

## Security Notes

⚠️ **Important**: The current blog authentication uses simple password hashing with localStorage. For production use with sensitive data:

1. Implement proper backend authentication
2. Use bcrypt for password hashing
3. Add rate limiting
4. Consider using a database instead of localStorage
5. Implement HTTPS

## Browser Support

- Chrome (latest)
- Firefox (latest)
- Safari (latest)
- Edge (latest)

## Contact

**Khandoker Wahiduzzaman Anik**
- Email: wahiduzzamananik782@gmail.com
- GitHub: https://github.com/echo-anik
- LinkedIn: https://www.linkedin.com/in/anik-khandokar-261967270/

## License

© 2025 Khandoker Wahiduzzaman Anik. All rights reserved.
