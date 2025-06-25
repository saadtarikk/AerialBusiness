# Quick Vercel Deployment Checklist

## Pre-Deployment (5 minutes)
- [ ] Project optimized and cleaned
- [ ] Build tested locally with `npm run build`
- [ ] Code pushed to Git repository
- [ ] Domain ready at GoDaddy

## Vercel Setup (10 minutes)
1. **Import Project**
   - Go to vercel.com → New Project
   - Connect GitHub/GitLab repository
   - Select your Aireal project

2. **Build Configuration**
   - Framework: Vite (auto-detected)
   - Root Directory: Leave empty (use root directory)
   - Build Command: Leave empty (auto-detected)
   - Output Directory: Leave empty (auto-detected)
   - Install Command: Leave empty (auto-detected)

3. **Deploy**
   - Click "Deploy" button
   - Wait 2-3 minutes for build

## Domain Connection (15 minutes)
1. **Add Domain in Vercel**
   - Project → Settings → Domains
   - Add: `yourdomain.com` and `www.yourdomain.com`

2. **Update GoDaddy DNS**
   ```
   A Record: @ → 76.76.19.61
   A Record: www → 76.76.19.61
   CNAME: www → cname.vercel-dns.com
   ```

3. **Wait for Propagation**
   - DNS changes: 1-48 hours
   - SSL certificate: Auto-generated

## Final Verification (5 minutes)
- [ ] Domain loads correctly
- [ ] HTTPS enabled automatically
- [ ] All sections render properly
- [ ] Dark theme intact
- [ ] Animations working
- [ ] Mobile responsive

## Total Time: ~35 minutes

Your Aireal website will have:
- Lightning-fast global CDN
- Automatic HTTPS
- Perfect performance scores
- Zero maintenance required

## Common Issues & Solutions

**Build Fails:**
- Check Vercel build logs
- Ensure all dependencies in package.json
- Verify no TypeScript errors

**Domain Not Working:**
- Check DNS propagation at whatsmydns.net
- Verify exact DNS records
- Wait up to 48 hours

**Slow Loading:**
- Vercel optimizes automatically
- Check Core Web Vitals in dashboard
- Consider upgrading to Pro for analytics

**Ready to deploy? Follow the detailed guide in VERCEL_DEPLOYMENT_GUIDE.md**