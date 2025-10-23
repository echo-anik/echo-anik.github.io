# 🌐 Custom Domain Setup Guide

## Your Domain: wahidanik.me

### Step 1: Configure DNS on Namecheap

1. **Log in to Namecheap**: https://www.namecheap.com
2. **Go to Domain List** → Click "Manage" next to `wahidanik.me`
3. **Navigate to "Advanced DNS"** tab

### Step 2: Add DNS Records

Delete any existing A records and add these:

#### A Records (for root domain):
| Type | Host | Value | TTL |
|------|------|-------|-----|
| A Record | @ | 185.199.108.153 | Automatic |
| A Record | @ | 185.199.109.153 | Automatic |
| A Record | @ | 185.199.110.153 | Automatic |
| A Record | @ | 185.199.111.153 | Automatic |

#### CNAME Record (for www subdomain):
| Type | Host | Value | TTL |
|------|------|-------|-----|
| CNAME Record | www | echo-anik.github.io | Automatic |

### Step 3: Configure GitHub Pages

1. **Go to Repository Settings**: 
   https://github.com/echo-anik/echo-anik.github.io/settings/pages

2. **Under "Custom domain"**:
   - Enter: `wahidanik.me`
   - Click "Save"

3. **Wait for DNS Check** (may take a few minutes)

4. **Enable HTTPS** (checkbox will appear after DNS verification):
   - ✅ Check "Enforce HTTPS"

### Step 4: Push CNAME File

The CNAME file has been created in `public/CNAME`. Now push it:

```bash
git add public/CNAME
git commit -m "Add custom domain CNAME"
git push origin main
```

### DNS Propagation Time

- **Minimum**: 15-30 minutes
- **Maximum**: 24-48 hours (rare)
- **Usually**: 1-2 hours

### Verify DNS Configuration

Check if DNS is propagated:
```
nslookup wahidanik.me
```

Or use online tools:
- https://dnschecker.org/#A/wahidanik.me
- https://www.whatsmydns.net/#A/wahidanik.me

### Your URLs After Setup

- ✅ **Main Site**: https://wahidanik.me
- ✅ **WWW Redirect**: https://www.wahidanik.me (redirects to main)
- ✅ **Old URL**: https://echo-anik.github.io (redirects to custom domain)

### Troubleshooting

#### DNS Not Resolving:
1. Wait longer (DNS can take time)
2. Clear DNS cache: `ipconfig /flushdns` (Windows)
3. Try incognito/private browsing

#### Certificate Error:
1. Make sure "Enforce HTTPS" is enabled in GitHub Pages settings
2. Wait 15-30 minutes for certificate to be issued
3. Try clearing browser cache

#### "Domain's DNS record could not be retrieved":
1. Double-check DNS records on Namecheap
2. Make sure TTL is set to "Automatic" or "5 min"
3. Wait and try again in 10-15 minutes

### Email Configuration (Optional)

If you want to set up email forwarding:

1. In Namecheap → "Email Forwarding"
2. Forward `contact@wahidanik.me` → `wahiduzzamananik782@gmail.com`

Or use **Cloudflare Email Routing** (free):
1. Transfer DNS to Cloudflare (optional but recommended for better features)
2. Enable Email Routing
3. Create catch-all or specific email forwards

### Advanced: Subdomain Setup (Optional)

Want to add subdomains like `blog.wahidanik.me` or `api.wahidanik.me`?

Add CNAME records:
| Type | Host | Value | TTL |
|------|------|-------|-----|
| CNAME | blog | echo-anik.github.io | Automatic |

Then update your Next.js routing accordingly.

### Benefits of Custom Domain

✅ Professional appearance
✅ Better SEO
✅ Easier to remember
✅ Custom email addresses possible
✅ Full control over your brand

---

## Quick Summary

1. ✅ CNAME file created in `public/CNAME`
2. 🔄 Add 4 A records + 1 CNAME record on Namecheap
3. 🔄 Set custom domain in GitHub Pages settings
4. 🔄 Push CNAME file to GitHub
5. ⏳ Wait for DNS propagation (1-2 hours)
6. 🔒 Enable HTTPS in GitHub settings
7. 🎉 Visit https://wahidanik.me

**Note**: Until DNS propagates, your site is still accessible at https://echo-anik.github.io
