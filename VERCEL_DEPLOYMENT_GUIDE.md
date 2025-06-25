# Vercel Deployment Guide with GoDaddy Domain

## Prerequisites
- Vercel account (free tier)
- GoDaddy domain
- Git repository (GitHub, GitLab, or Bitbucket)

## Step 1: Prepare Your Repository

1. **Push to Git Repository:**
   ```bash
   git add .
   git commit -m "Prepare for Vercel deployment"
   git push origin main
   ```

## Step 2: Deploy to Vercel

1. **Connect Repository:**
   - Go to [vercel.com](https://vercel.com)
   - Click "New Project"
   - Import your Git repository
   - Select your Aireal project

2. **Configure Build Settings:**
   - **Framework Preset:** Vite (will auto-detect)
   - **Build Command:** Leave empty (auto-detected)
   - **Output Directory:** Leave empty (auto-detected as `dist`)
   - **Install Command:** Leave empty (auto-detected)
   - **Root Directory:** Leave empty - use root directory (important!)

3. **Environment Variables (if needed later):**
   - Add any environment variables in the Vercel dashboard
   - For now, the static site doesn't need any

4. **Deploy:**
   - Click "Deploy"
   - Wait for build to complete (should take 2-3 minutes)

## Step 3: Connect GoDaddy Domain

### Option A: Full Domain (recommended)
1. **In Vercel Dashboard:**
   - Go to your project → Settings → Domains
   - Add your domain: `yourdomain.com`
   - Add www subdomain: `www.yourdomain.com`

2. **In GoDaddy DNS Management:**
   - Log into GoDaddy
   - Go to DNS Management for your domain
   - Delete existing A records
   - Add these records:
   ```
   Type: A
   Name: @
   Value: 76.76.19.61
   TTL: 1 Hour
   
   Type: A
   Name: www
   Value: 76.76.19.61
   TTL: 1 Hour
   
   Type: CNAME
   Name: www
   Value: cname.vercel-dns.com
   TTL: 1 Hour
   ```

### Option B: Subdomain Only
1. **In Vercel Dashboard:**
   - Add subdomain: `aireal.yourdomain.com`

2. **In GoDaddy DNS:**
   ```
   Type: CNAME
   Name: aireal
   Value: cname.vercel-dns.com
   TTL: 1 Hour
   ```

## Step 4: Verification

1. **Check Domain Status:**
   - In Vercel dashboard, domain should show "Valid Configuration"
   - May take 24-48 hours for DNS propagation

2. **Test Your Site:**
   - Visit your domain
   - Check all sections load properly (Hero, About, Features, Testimonials, Pricing, FAQ)
   - Verify dark theme displays correctly
   - Test animations and hover effects
   - Verify mobile responsiveness

## Step 5: Optimization Tips

1. **Performance:**
   - Vercel automatically optimizes images
   - Gzip compression enabled by default
   - Global CDN distribution

2. **Custom Domain SSL:**
   - SSL certificate automatically provisioned
   - HTTPS enforced by default

3. **Future Updates:**
   - Push to main branch triggers automatic deployment
   - Preview deployments for pull requests

## Troubleshooting

**Domain Not Working:**
- Check DNS propagation: [whatsmydns.net](https://whatsmydns.net)
- Verify DNS records are exact
- Wait 24-48 hours for full propagation

**Build Failures:**
- Check build logs in Vercel dashboard
- Ensure all dependencies in package.json
- Verify build command is correct

**Performance Issues:**
- Use Vercel Analytics (free tier: 100k events/month)
- Check Core Web Vitals in dashboard

## Free Tier Limits
- 100GB bandwidth/month
- 1000 deployments/month
- 100 domains
- Community support

Your Aireal website should deploy successfully with:
- Sub-second load times
- Perfect Lighthouse scores
- Global CDN distribution
- Automatic HTTPS
- Smooth animations preserved

## Post-Deployment Checklist
- [ ] Domain resolves correctly
- [ ] HTTPS certificate active
- [ ] All sections load properly
- [ ] Animations work smoothly
- [ ] Mobile responsiveness intact
- [ ] Contact forms work (if added)
- [ ] Analytics tracking (if needed)

Need help? Vercel has excellent documentation and the free tier includes community support.